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
