import type { Metadata } from 'next';
import TicketsPage from '@/components/TicketsPage';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

const PATH = '/tickets';

export const metadata: Metadata = {
  title: 'Book Cruise Tickets Gold Coast',
  description:
    'Browse and book Gold Coast cruises, whale watching tours, sunset dinners, and private charters with Boattime Yacht Charters.',
  alternates: { canonical: `https://www.boattimeyachtcharters.com${PATH}` },
};

export default function Page() {
  return (
    <>
      <JsonLd schemas={[breadcrumbSchema([{ name: 'Book Tickets', path: PATH }])]} />
      <TicketsPage />
    </>
  );
}
