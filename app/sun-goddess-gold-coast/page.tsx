import type { Metadata } from 'next';
import SunGoddessPage from '@/components/YachtPageSunGoddess';

export const metadata: Metadata = {
  title: 'Sun Goddess — 110ft Luxury Superyacht Gold Coast · Boattime Yacht Charters',
  description:
    'Charter the Sun Goddess superyacht on the Gold Coast Broadwater. 110ft · up to 135 guests · dual bars · watersports · award-winning catering.',
};

export default function Page() {
  return <SunGoddessPage />;
}
