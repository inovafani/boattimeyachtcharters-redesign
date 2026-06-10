import type { Metadata } from 'next';
import CampaignSkyToSea from '@/components/CampaignSkyToSea';

export const metadata: Metadata = {
  title:
    'Sky to Sea — Whale Watching by Helicopter & Yacht · Boattime × Gold Coast Helitours',
  description:
    "Two ways to witness one of nature's greatest journeys. A co-branded Gold Coast experience — scenic helicopter flight with Gold Coast Helitours and a luxury whale-watching cruise aboard Boattime Yacht Charters.",
};

export default function Page() {
  return <CampaignSkyToSea />;
}
