import type { Metadata } from 'next';
import ValentinesPage from '@/components/CruisePageValentines';
import JsonLd from '@/components/JsonLd';
import { boatTripSchema, breadcrumbSchema } from '@/lib/schema';

const PATH = '/valentines-day';

export const metadata: Metadata = {
  title: "Valentine's Day Cruise Gold Coast 2026",
  description:
    "An evening of refined indulgence aboard Sun Goddess. Champagne, gourmet dining, complimentary photography. 14 February 2026 · 2 for $269.",
  alternates: { canonical: `https://www.boattimeyachtcharters.com${PATH}` },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          boatTripSchema({
            name: "Valentine's Day Cruise 2026 — Gold Coast",
            description:
              "A Valentine's Day evening cruise aboard the Sun Goddess superyacht on 14 February 2026, with champagne, gourmet dining and complimentary photography.",
            path: PATH,
            image: '/valentines-day-images/valentine1.webp',
            offer: { price: '269', description: 'Two guests' },
          }),
          breadcrumbSchema([{ name: "Valentine's Day 2026", path: PATH }]),
        ]}
      />
      <ValentinesPage />
    </>
  );
}
