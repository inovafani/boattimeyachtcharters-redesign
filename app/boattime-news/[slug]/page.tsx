import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createPublicClient } from '@/lib/supabase/public';
import ArticlePage from '@/components/ArticlePage';

export const dynamic = 'force-dynamic';

const BASE_URL = 'https://www.boattimeyachtcharters.com';
const FALLBACK_OG = `${BASE_URL}/sun-goddess-main-upscale.png`;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const supabase = createPublicClient();
    const { data } = await supabase
      .from('posts')
      .select('title, excerpt, image_url, published_at, categories')
      .eq('slug', slug)
      .eq('published', true)
      .single();

    if (data) {
      const url = `${BASE_URL}/boattime-news/${slug}`;
      const ogImage = data.image_url || FALLBACK_OG;
      return {
        title: `${data.title} · Boattime News`,
        description: data.excerpt ?? '',
        alternates: { canonical: url },
        openGraph: {
          type: 'article',
          url,
          title: data.title,
          description: data.excerpt ?? '',
          publishedTime: data.published_at ?? undefined,
          authors: ['Boattime Yacht Charters'],
          images: [{ url: ogImage, width: 1200, height: 630, alt: data.title }],
        },
        twitter: {
          card: 'summary_large_image',
          title: data.title,
          description: data.excerpt ?? '',
          images: [ogImage],
        },
      };
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

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt ?? '',
      image: post.image_url || FALLBACK_OG,
      datePublished: post.published_at ?? post.created_at,
      dateModified: post.published_at ?? post.created_at,
      author: {
        '@type': 'Organization',
        name: 'Boattime Yacht Charters',
        url: BASE_URL,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Boattime Yacht Charters',
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/boattime-logo.png`,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${BASE_URL}/boattime-news/${slug}`,
      },
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ArticlePage post={post} />
      </>
    );
  } catch {
    notFound();
  }
}
