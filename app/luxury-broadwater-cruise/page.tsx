import type { Metadata } from 'next';
import BroadwaterPage from '@/components/CruisePageBroadwater';
import JsonLd from '@/components/JsonLd';
import { boatTripSchema, breadcrumbSchema, faqSchema } from '@/lib/schema';
import { SUNSET_FAQS } from '@/lib/cruise-faqs';

const PATH = '/luxury-broadwater-cruise';

export const metadata: Metadata = {
  title: 'Sunset Cruise Gold Coast — Twilight Drift',
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
            offer: {
              price: '59',
              highPrice: '229',
              description: 'Child $59 · 1 adult $79 · 2 adults $129 · 4 adults $229',
            },
          }),
          faqSchema(SUNSET_FAQS),
          breadcrumbSchema([{ name: 'Sunset Cruise Gold Coast', path: PATH }]),
        ]}
      />
      <BroadwaterPage />
    </>
  );
}
