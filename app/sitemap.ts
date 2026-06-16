import type { MetadataRoute } from 'next';
import { createPublicClient } from '@/lib/supabase/public';

const BASE_URL = 'https://www.boattimeyachtcharters.com';

export const revalidate = 3600;

const staticRoutes: Array<{
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
  priority: number;
}> = [
  { path: '', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/private-yacht-charter', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/corporate-yacht-charter', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/wedding-yacht-charter', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/luxury-broadwater-cruise', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/cruise-tickets-luxury-whale-watching', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/buffet-dinner-and-lunch-cruise', changeFrequency: 'monthly', priority: 0.8 },
  {
    path: '/relaxed-lunch-cruise-flavours-of-australia-aboard-the-mermaid-spirit',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  {
    path: '/sunset-twilight-buffet-flavours-of-australia-aboard-the-mermaid-spirit',
    changeFrequency: 'monthly',
    priority: 0.8,
  },
  { path: '/yacht-charter-menus', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/tickets', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/boattime-news', changeFrequency: 'daily', priority: 0.7 },
  { path: '/helitours-campaign', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/nye-2026', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/riverfire-2026', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/valentines-day', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/industry-partnership', changeFrequency: 'monthly', priority: 0.5 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  let newsEntries: MetadataRoute.Sitemap = [];
  try {
    const supabase = createPublicClient();
    const { data: posts } = await supabase
      .from('posts')
      .select('slug, published_at, created_at')
      .eq('published', true);

    newsEntries = (posts ?? []).map((post) => ({
      url: `${BASE_URL}/boattime-news/${post.slug}`,
      lastModified: new Date(post.published_at ?? post.created_at),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    }));
  } catch {
    newsEntries = [];
  }

  return [...staticEntries, ...newsEntries];
}
