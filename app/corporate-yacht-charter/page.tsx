import type { Metadata } from 'next';
import CorporateCharterPage from '@/components/CharterPageCorporate';

export const metadata: Metadata = {
  title: 'Corporate Yacht Charter Gold Coast · Boattime Yacht Charters',
  description:
    'Corporate yacht charters on the Gold Coast. Retreats, team building, client entertainment, award ceremonies and product launches — on two premium vessels. Up to 130 guests.',
};

export default function Page() {
  return <CorporateCharterPage />;
}
