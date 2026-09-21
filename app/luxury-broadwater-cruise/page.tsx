import type { Metadata } from 'next';
import BroadwaterPage from '@/components/CruisePageBroadwater';
import JsonLd from '@/components/JsonLd';
import { boatTripSchema, breadcrumbSchema } from '@/lib/schema';

const PATH = '/luxury-broadwater-cruise';

export const metadata: Metadata = {
  title: 'Broadwater Sunset Cruise Gold Coast',
  description:
    'Special offer: 2 tickets for $129. A magical 2-hour sunset journey through the Gold Coast Broadwater aboard Sun Goddess. Fri–Sun.',
  alternates: { canonical: `https://www.boattimeyachtcharters.com${PATH}` },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          boatTripSchema({
            name: 'Twilight Drift — Broadwater Sunset Cruise',
            description:
              'A 2-hour sunset scenic cruise through the Gold Coast Broadwater aboard the Sun Goddess superyacht, running Friday to Sunday.',
            path: PATH,
            image: '/twilight-drift.jpeg',
            duration: 'PT2H',
            offer: { price: '129', description: 'Two tickets' },
          }),
          breadcrumbSchema([{ name: 'Broadwater Sunset Cruise', path: PATH }]),
        ]}
      />
      <BroadwaterPage />
    </>
  );
}
