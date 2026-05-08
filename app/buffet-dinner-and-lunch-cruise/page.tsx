import type { Metadata } from 'next';
import DiningCruisePage from '@/components/CruisePageDiningCruise';

export const metadata: Metadata = {
  title: 'Buffet Dinner & Lunch Cruise — Flavours of Australia · Boattime Yacht Charters',
  description:
    'Choose your session — a golden-hour Buffet Dinner Cruise or a relaxed Flavours of Australia Lunch Cruise (commencing 3 October) aboard the Mermaid Spirit. Adults from $99.',
};

export default function Page() {
  return <DiningCruisePage />;
}
