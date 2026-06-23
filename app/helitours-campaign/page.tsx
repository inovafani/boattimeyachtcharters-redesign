import type { Metadata } from 'next';
import CampaignSkyToSea from '@/components/CampaignSkyToSea';

export const metadata: Metadata = {
  title:
    'Gold Coast Helitours — Scenic Helicopter Flights over the Gold Coast · Presented by Boattime Yacht Charters',
  description:
    'See the Gold Coast like never before. Scenic helicopter flights with Gold Coast Helitours — from a five-minute harbour lap to a 45-minute grand tour of the coast and hinterland. Proudly presented by Boattime Yacht Charters.',
};

export default function Page() {
  return <CampaignSkyToSea />;
}
