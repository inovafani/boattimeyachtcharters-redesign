import type { Metadata } from 'next';
import CharterPageCatering from '@/components/CharterPageCatering';

export const metadata: Metadata = {
  title: 'Luxury Catering & Menus Gold Coast — Boattime Yacht Charters',
  description:
    'Award-winning catering for your Gold Coast yacht charter. Grazing boards, canapés, gourmet BBQ, buffets, fine dining, and custom drinks packages from our culinary partners.',
};

export default function Page() {
  return <CharterPageCatering />;
}
