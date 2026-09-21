import type { Metadata } from 'next';
import CharterPageCatering from '@/components/CharterPageCatering';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

const PATH = '/yacht-charter-menus';

export const metadata: Metadata = {
  title: 'Luxury Catering & Menus Gold Coast',
  description:
    'Award-winning catering for your Gold Coast yacht charter. Grazing boards, canapés, gourmet BBQ, buffets, fine dining, and custom drinks packages from our culinary partners.',
  alternates: { canonical: `https://www.boattimeyachtcharters.com${PATH}` },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          serviceSchema({
            name: 'Yacht Charter Catering & Menus Gold Coast',
            description:
              'Catering for Gold Coast yacht charters — grazing boards, canapés, gourmet BBQ, buffets, fine dining and custom drinks packages.',
            path: PATH,
            image: '/catering-charter.webp',
            serviceType: 'Event catering',
          }),
          breadcrumbSchema([{ name: 'Catering & Menus', path: PATH }]),
        ]}
      />
      <CharterPageCatering />
    </>
  );
}
