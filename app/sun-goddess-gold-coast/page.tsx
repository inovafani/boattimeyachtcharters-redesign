import type { Metadata } from 'next';
import SunGoddessPage from '@/components/YachtPageSunGoddess';
import JsonLd from '@/components/JsonLd';
import { vesselSchema, breadcrumbSchema } from '@/lib/schema';

const PATH = '/sun-goddess-gold-coast';

export const metadata: Metadata = {
  title: 'Sun Goddess — 114ft Gold Coast Superyacht',
  description:
    'Charter the Sun Goddess superyacht on the Gold Coast Broadwater. 114ft · up to 150 guests · dual bars · watersports · award-winning catering.',
  alternates: { canonical: `https://www.boattimeyachtcharters.com${PATH}` },
};

export default function Page() {
  return (
    <>
      <JsonLd
        schemas={[
          vesselSchema({
            name: 'Sun Goddess',
            description:
              'A 114ft luxury superyacht chartering the Gold Coast Broadwater — up to 150 guests, dual bars, watersports and award-winning catering.',
            path: PATH,
            image: '/sun-goddess-main-upscale.png',
            length: '114 ft',
            capacity: 150,
          }),
          breadcrumbSchema([{ name: 'Sun Goddess', path: PATH }]),
        ]}
      />
      <SunGoddessPage />
    </>
  );
}
