import type { Metadata } from 'next';
import RiverPage from '@/components/CruisePageRiverfire';
import GoogleAdsTag from '@/components/GoogleAdsTag';
import JsonLd from '@/components/JsonLd';
import { boatTripSchema, breadcrumbSchema } from '@/lib/schema';

const PATH = '/riverfire-2026';

export const metadata: Metadata = {
  title: 'Riverfire 2026 Brisbane Fireworks Cruise',
  description:
    "Brisbane's iconic Riverfire fireworks from the best seat on the river. Mermaid Spirit · 5 September 2026 · 18+ · $249 pp.",
  alternates: { canonical: `https://www.boattimeyachtcharters.com${PATH}` },
};

export default function Page() {
  return (
    <>
      <GoogleAdsTag />
      <JsonLd
        schemas={[
          boatTripSchema({
            name: 'Riverfire 2026 — Brisbane Fireworks Yacht Cruise',
            description:
              "A Brisbane River cruise aboard the Mermaid Spirit for the Riverfire fireworks on 5 September 2026. 18+.",
            path: PATH,
            image: '/Riverfire.jpg',
            offer: { price: '249', description: 'Per person' },
          }),
          breadcrumbSchema([{ name: 'Riverfire 2026', path: PATH }]),
        ]}
      />
      <RiverPage />
    </>
  );
}
