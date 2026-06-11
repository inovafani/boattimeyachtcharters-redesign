import type { Metadata } from 'next';
import IndustryPartnership from '@/components/IndustryPartnership';

export const metadata: Metadata = {
  title: 'Industry Partnership · Boattime Yacht Charters Gold Coast',
  description:
    'Partner with Boattime Yacht Charters — open opportunities for content creators, influencers, tourism operators, and hospitality brands on the Gold Coast.',
};

export default function Page() {
  return <IndustryPartnership />;
}
