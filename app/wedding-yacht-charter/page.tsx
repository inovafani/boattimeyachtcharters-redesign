import type { Metadata } from 'next';
import WeddingCharterPage from '@/components/CharterPageWedding';

export const metadata: Metadata = {
  title: 'Wedding Yacht Charter Gold Coast · Boattime Yacht Charters',
  description:
    'Say I Do on a Boattime luxury yacht. Gold Coast wedding ceremonies and receptions on the Broadwater — up to 135 guests, custom catering, photography, florals and DJ.',
};

export default function Page() {
  return <WeddingCharterPage />;
}
