import type { Metadata } from 'next';
import WhalePage from '@/components/CruisePageWhale';

export const metadata: Metadata = {
  title: 'Gold Coast Whale Escape — Luxury Whale Watching Cruise | Boattime Yacht Charters',
  description:
    'Board the Sun Goddess superyacht for an extraordinary encounter with humpback whales. Morning & afternoon sessions May–November, Gold Coast.',
  openGraph: {
    title: 'Gold Coast Whale Escape — Luxury Whale Watching Cruise | Boattime Yacht Charters',
    description:
      'Board the Sun Goddess superyacht for an extraordinary encounter with humpback whales. Morning & afternoon sessions May–November, Gold Coast.',
    images: [{ url: '/humpbacks.jpg', width: 1200, height: 630, alt: 'Whale Watching Gold Coast — Boattime Yacht Charters' }],
    url: 'https://www.boattimeyachtcharters.com/cruise-tickets-luxury-whale-watching',
  },
  alternates: {
    canonical: 'https://www.boattimeyachtcharters.com/cruise-tickets-luxury-whale-watching',
  },
};

export default function Page() {
  return <WhalePage />;
}
