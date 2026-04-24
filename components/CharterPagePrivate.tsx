'use client';

import Nav from './Nav';
import Footer from './Footer';
import {
  CharterHero,
  CharterOverview,
  CharterPackages,
  VesselCards,
  CharterInclusionsExtras,
  CharterDestinations,
  CharterFAQ,
  CharterBookingCTA,
} from './CharterSections';

const PACKAGES = [
  {
    title: 'Day-trip Beaches & BBQs',
    time: '12pm',
    duration: 'Min. 4 hours',
    capacity: 'Up to 130 guests',
    description:
      'Set sail at midday for an afternoon of island hopping, watersports and a gourmet BBQ buffet on the Broadwater. Swim at Wave Break Island, try the banana boats, and soak in the Gold Coast sunshine.',
    highlights: [
      'Island hopping',
      'Watersports included',
      'BBQ buffet',
      'Cold beverages throughout',
      'Banana boats & bars',
    ],
  },
  {
    title: 'Evening Cocktails & Canapés',
    time: '5pm',
    duration: '3 hours',
    capacity: 'Up to 130 guests',
    description:
      'Cruise the northern broadwater islands as the sun sets over the Gold Coast. Platters and canapés circulated by crew, with cocktails, champagne, and a golden-hour backdrop that makes every moment memorable.',
    highlights: [
      'Sunset Broadwater cruise',
      'Platters & canapés',
      'Cocktails & champagne',
      'Northern islands route',
      'Professional crew throughout',
    ],
  },
  {
    title: 'Custom Charter',
    description:
      'A fully bespoke event designed around your vision. Choose your route, your catering style, your entertainment — we coordinate every element with our culinary and entertainment partners.',
    highlights: [
      'Fully customisable',
      'Catering from chef partners',
      'DJ, band or live entertainment',
      'Photography & videography',
      'Any date, any duration',
    ],
  },
];

const FAQ = [
  {
    q: 'Where do we depart?',
    a: 'Muriel Henchman Public Pontoon, Gold Coast — approximately 10 minutes from Surfers Paradise and 15 minutes from Broadbeach. Free parking is available at the pontoon.',
  },
  {
    q: 'Can we bring our own food and drinks?',
    a: "Yes. We also offer a full catering list — from grazing boards and canapés to private chef experiences. Fridges, eskies, and ice are provided on board.",
  },
  {
    q: 'What transport options are there?',
    a: "Maxi taxis are the most popular option and are cost-effective for groups. The pontoon has ample free parking if you're driving.",
  },
  {
    q: 'Where will we cruise?',
    a: 'Day charters typically visit Wave Break Island for swimming. Evening charters sail north through the Broadwater for sunset views and city lights. Offshore and extended routes are also available on request.',
  },
  {
    q: 'Will guests get seasick?',
    a: 'We operate primarily in the calm, protected Gold Coast Broadwater — seasickness is rarely an issue. Offshore charters may encounter larger swell.',
  },
  {
    q: 'Can guests with limited mobility come on board?',
    a: 'Yes. We recommend contacting us before booking so we can assess your specific requirements and ensure the experience is comfortable for everyone.',
  },
];

export default function CharterPagePrivate() {
  return (
    <>
      <Nav />
      <main>
        <CharterHero
          eyebrow="Yacht Charters · Gold Coast"
          headline="Private Yacht Charter"
          subtext="Experience the best private yacht charter on the Gold Coast. Whether it's an intimate gathering or a large celebration, we tailor every element to create an unforgettable day on the water."
          image="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=1800&q=80"
          ctas={[
            { label: 'Booking Enquiry', href: '/#inquiry', variant: 'primary' },
            { label: 'View Sun Goddess', href: '/sun-goddess-gold-coast', variant: 'ghost' },
            { label: 'View Mermaid Spirit', href: '/mermaid-spirit-gold-coast', variant: 'ghost' },
          ]}
        />
        <CharterOverview
          eyebrow="The Experience"
          title="Your boat."
          titleAccent="Your rules."
          description={[
            'A private yacht charter is the ultimate way to celebrate on the Gold Coast. From birthday parties and anniversaries to family reunions and sunset escapes — we provide the platform, you provide the occasion.',
            "With two world-class vessels, expert crew, and access to the Gold Coast's most beautiful waterways, every charter is built around your vision. No two are the same.",
          ]}
          image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80"
        />
        <CharterPackages packages={PACKAGES} />
        <VesselCards />
        <CharterInclusionsExtras />
        <CharterDestinations />
        <CharterFAQ items={FAQ} />
        <CharterBookingCTA />
      </main>
      <Footer />
    </>
  );
}
