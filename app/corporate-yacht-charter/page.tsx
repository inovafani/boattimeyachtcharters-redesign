import type { Metadata } from 'next';
import CharterPageCorporate from '@/components/CharterPageCorporate';

export const metadata: Metadata = {
  title: 'Corporate Yacht Charter Gold Coast — Boattime Yacht Charters',
  description:
    'Premium corporate yacht charters on the Gold Coast. Team building, client entertainment, award ceremonies, product launches and networking events aboard Sun Goddess or Mermaid Spirit.',
};

export default function Page() {
  return <CharterPageCorporate />;
}
