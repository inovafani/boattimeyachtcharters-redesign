import type { Metadata } from 'next';
import BroadwaterPage from '@/components/CruisePageBroadwater';

export const metadata: Metadata = {
  title: 'Luxury Broadwater Sunset Cruise Gold Coast — Boattime Yacht Charters',
  description:
    'Special offer: 2 tickets for $129. A magical 2-hour sunset journey through the Gold Coast Broadwater aboard Sun Goddess. Fri–Sun.',
};

export default function Page() {
  return <BroadwaterPage />;
}
