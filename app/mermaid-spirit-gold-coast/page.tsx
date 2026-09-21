import type { Metadata } from 'next';
import MermaidSpiritPage from '@/components/YachtPageMermaidSpirit';
import JsonLd from '@/components/JsonLd';
import { vesselSchema, breadcrumbSchema } from '@/lib/schema';

const PATH = '/mermaid-spirit-gold-coast';

export const metadata: Metadata = {
  title: 'Mermaid Spirit — 100ft Catamaran Gold Coast',
  description:
    'Charter the Mermaid Spirit catamaran — 3 decks, 100 guests, jet skis, scuba, DJ, fireworks. Gold Coast Broadwater and Brisbane River.',
  alternates: { canonical: `https://www.boattimeyachtcharters.com${PATH}` },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          vesselSchema({
            name: 'Mermaid Spirit',
            description:
              'A 100ft tri-deck catamaran chartering the Gold Coast Broadwater and Brisbane River — three decks, up to 100 guests, jet skis, scuba, DJ and fireworks.',
            path: PATH,
            image: '/mermaid-spirit-main.jpg',
            length: '100 ft',
            capacity: 100,
          }),
          breadcrumbSchema([{ name: 'Mermaid Spirit', path: PATH }]),
        ]}
      />
      <MermaidSpiritPage />
    </>
  );
}
