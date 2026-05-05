import type { Metadata } from 'next';
import SunGoddessPage from '@/components/YachtPageSunGoddess';

export const metadata: Metadata = {
  title:
    'Sun Goddess — 114ft Luxury Superyacht Gold Coast · Boattime Yacht Charters',
  description:
    'Charter the Sun Goddess superyacht on the Gold Coast Broadwater. 114ft · up to 150 guests · dual bars · watersports · award-winning catering.',
};

export default function Page() {
  return <SunGoddessPage />;
}
