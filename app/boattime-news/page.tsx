import type { Metadata } from 'next';
import { createPublicClient } from '@/lib/supabase/public';
import NewsPage, { type Post } from '@/components/NewsPage';

export const metadata: Metadata = {
  title: 'Boattime News · Yacht Charter Guides & Stories',
  description:
    "Guides, inspiration, and local knowledge from Gold Coast's premier yacht charter company.",
};

export const dynamic = 'force-dynamic';

export default async function Page() {
  console.log('[boattime-news] fetching published posts');

  let posts: Post[] = [];

  try {
    const supabase = createPublicClient();

    const { data, error } = await supabase
      .from('posts')
      .select('id, slug, title, excerpt, image_url, categories, published_at, created_at')
      .eq('published', true)
      .order('published_at', { ascending: false });

    if (error) {
      console.log('[boattime-news] fetch error', error.message);
    } else {
      posts = (data as Post[]) ?? [];
      console.log('[boattime-news] loaded', posts.length, 'posts');
    }
  } catch (err) {
    console.log('[boattime-news] client error', err);
  }

  return <NewsPage posts={posts} />;
}
