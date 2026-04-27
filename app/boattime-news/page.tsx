import type { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import NewsPage, { type Post } from '@/components/NewsPage';

export const metadata: Metadata = {
  title: 'Boattime News · Yacht Charter Guides & Stories',
  description:
    "Guides, inspiration, and local knowledge from Gold Coast's premier yacht charter company.",
};

export const revalidate = 60;

export default async function Page() {
  console.log('[boattime-news] fetching published posts');
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('posts')
    .select('id, slug, title, excerpt, image_url, categories, published_at, created_at')
    .eq('published', true)
    .order('published_at', { ascending: false });

  if (error) {
    console.log('[boattime-news] fetch error', error.message);
  }

  console.log('[boattime-news] loaded', data?.length ?? 0, 'posts');

  return <NewsPage posts={(data as Post[]) ?? []} />;
}
