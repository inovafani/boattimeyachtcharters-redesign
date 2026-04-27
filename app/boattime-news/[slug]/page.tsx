import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createPublicClient } from '@/lib/supabase/public';
import ArticlePage from '@/components/ArticlePage';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const supabase = createPublicClient();
    const { data } = await supabase
      .from('posts')
      .select('title, excerpt')
      .eq('slug', slug)
      .eq('published', true)
      .single();
    if (data) {
      return { title: `${data.title} · Boattime News`, description: data.excerpt ?? '' };
    }
  } catch {}
  return { title: 'Boattime News' };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  console.log('[article] fetching slug', slug);

  try {
    const supabase = createPublicClient();
    const { data: post, error } = await supabase
      .from('posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single();

    if (error || !post) {
      console.log('[article] not found', slug);
      notFound();
    }

    console.log('[article] loaded', post.title);
    return <ArticlePage post={post} />;
  } catch {
    notFound();
  }
}
