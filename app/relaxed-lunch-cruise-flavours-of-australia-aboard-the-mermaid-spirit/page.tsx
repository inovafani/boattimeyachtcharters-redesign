import type { Metadata } from 'next';
import LunchPage from '@/components/CruisePageLunch';

export const metadata: Metadata = {
  title: 'Relaxed Lunch Cruise — Flavours of Australia · Boattime Yacht Charters',
  description:
    'A leisurely 2-hour lunch cruise with Executive Chef Brendan Ward. Australian cuisine, 360° Broadwater views, family-friendly. From $99.',
};

export default function Page() {
  return <LunchPage />;
}
