import type { Metadata } from 'next';
import NewsPage from '@/components/NewsPage';

export const metadata: Metadata = {
  title: 'Boattime News · Yacht Charter Guides & Stories',
  description:
    'Guides, inspiration, and local knowledge from Gold Coast\'s premier yacht charter company. Explore articles on sunset cruises, luxury whale watching, private charters, and more.',
};

export default function Page() {
  return <NewsPage />;
}
