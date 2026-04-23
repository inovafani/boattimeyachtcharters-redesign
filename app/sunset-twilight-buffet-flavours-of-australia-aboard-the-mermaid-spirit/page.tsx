import type { Metadata } from 'next';
import BuffetPage from '@/components/CruisePageBuffet';

export const metadata: Metadata = {
  title: 'Sunset Twilight Buffet — Flavours of Australia · Boattime Yacht Charters',
  description:
    'A 2.5-hour sunset buffet dinner with Executive Chef Brendan Ward. Australian cuisine, golden-hour Broadwater views. Family-friendly. From $99.',
};

export default function Page() {
  return <BuffetPage />;
}
