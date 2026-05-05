import type { Metadata } from 'next';
import TicketsPage from '@/components/TicketsPage';

export const metadata: Metadata = {
  title: 'Book Tickets — Boattime Yacht Charters',
  description:
    'Browse and book Gold Coast cruises, whale watching tours, sunset dinners, and private charters with Boattime Yacht Charters.',
};

export default function Page() {
  return <TicketsPage />;
}
