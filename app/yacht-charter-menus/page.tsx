import type { Metadata } from 'next';
import CateringPage from '@/components/CharterPageCatering';

export const metadata: Metadata = {
  title: 'Luxury Catering Gold Coast · Boattime Yacht Charters',
  description:
    'Award-winning catering for Gold Coast yacht charters. Grazing boards, canapés, gourmet BBQ, buffet, fine dining and custom drinks packages — all served on the water.',
};

export default function Page() {
  return <CateringPage />;
}
