import type { Metadata } from 'next';
import WhalePage from '@/components/CruisePageWhale';

export const metadata: Metadata = {
  title: 'Luxury Whale Watching Gold Coast — Boattime Yacht Charters',
  description:
    'Board the Sun Goddess superyacht for an extraordinary encounter with humpback whales. Morning & afternoon sessions June–November, Gold Coast.',
};

export default function Page() {
  return <WhalePage />;
}
