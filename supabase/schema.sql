-- Run this once in the Supabase project's SQL Editor to set up the blog (Boattime News).

-- 1. Table that stores every article
create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content text,
  image_url text,
  categories text[] not null default '{}',
  published boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default now()
);

alter table posts enable row level security;

-- Anyone (logged out visitors) can read only published articles
create policy "Public can read published posts"
  on posts for select
  using (published = true);

-- Logged-in admins can do everything (read drafts, create, edit, delete)
create policy "Authenticated users manage posts"
  on posts for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- 2. Storage bucket for article images, public so they can be shown on the site
insert into storage.buckets (id, name, public)
values ('news-images', 'news-images', true)
on conflict (id) do nothing;

create policy "Public can view news images"
  on storage.objects for select
  using (bucket_id = 'news-images');

create policy "Authenticated users upload news images"
  on storage.objects for insert
  with check (bucket_id = 'news-images' and auth.role() = 'authenticated');

-- 3. Views counter + related products + SEO columns
alter table posts
  add column if not exists views             int  not null default 0,
  add column if not exists related_products  text[] not null default '{}',
  add column if not exists meta_title       text,
  add column if not exists meta_description text,
  add column if not exists focus_keyword    text,
  add column if not exists image_alt        text,
  add column if not exists canonical_url    text,
  add column if not exists schema_types     text[] not null default '{"Article"}',
  add column if not exists tags             text[] not null default '{}',
  add column if not exists og_title         text,
  add column if not exists og_description   text,
  add column if not exists updated_at       timestamptz,
  add column if not exists author           text not null default 'Boattime Yacht Charters Editorial',
  add column if not exists reading_time     int  not null default 0;

-- 4. RPC function to safely increment views (security definer = anon can call it)
create or replace function increment_post_views(post_slug text)
returns void
language plpgsql
security definer
as $$
begin
  update posts set views = views + 1 where slug = post_slug and published = true;
end;
$$;

grant execute on function increment_post_views(text) to anon;

-- 5. Per-view location log — records each view with the visitor's approximate
--    location (country / region / city). Privacy-friendly: NO raw IP is stored.
create table if not exists post_views (
  id         uuid primary key default gen_random_uuid(),
  post_slug  text not null,
  country    text,
  region     text,
  city       text,
  viewed_at  timestamptz not null default now()
);

create index if not exists post_views_slug_idx on post_views (post_slug);

alter table post_views enable row level security;

-- Logged-in admins can read the view log. No public/anon read or write policy
-- exists, so visitors can never query this table directly — inserts happen only
-- through the security-definer function below.
create policy "Authenticated users read post_views"
  on post_views for select
  using (auth.role() = 'authenticated');

-- 6. RPC to record a view: logs the location row AND bumps posts.views, in one
--    safe server-side call. security definer = anon can call it (like #4 above).
create or replace function record_post_view(
  p_slug    text,
  p_country text default null,
  p_region  text default null,
  p_city    text default null
)
returns void
language plpgsql
security definer
as $$
begin
  -- Only log views for articles that are actually published
  if not exists (select 1 from posts where slug = p_slug and published = true) then
    return;
  end if;

  insert into post_views (post_slug, country, region, city)
  values (p_slug, p_country, p_region, p_city);

  update posts set views = views + 1 where slug = p_slug;
end;
$$;

grant execute on function record_post_view(text, text, text, text) to anon;
