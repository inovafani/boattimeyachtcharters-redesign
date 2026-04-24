'use client';

import Nav from './Nav';
import Footer from './Footer';
import {
  CharterHero,
  CharterOverview,
  CharterPackages,
  WeddingAdditionalServices,
  VesselCards,
  CharterInclusionsExtras,
  CharterDestinations,
  CharterFAQ,
  CharterBookingCTA,
} from './CharterSections';

const PACKAGES = [
  {
    title: 'Daytime Ceremony & Reception',
    description:
      'A sun-soaked celebration on the Broadwater. Say your vows on the foredeck with the Gold Coast skyline as your backdrop, then celebrate with a full reception — custom dining, dancing, and watersports for the adventurous.',
    highlights: [
      'Ceremony on the foredeck',
      'Custom dining experience',
      'Live music or DJ',
      'Watersports available',
      'Up to 135 guests',
    ],
  },
  {
    title: 'Sunset Wedding',
    duration: 'Evening',
    description:
      'An intimate evening ceremony and reception as the sun drops over the Broadwater. Canapés, cocktails, and champagne flow as golden hour gives way to a starlit sky — a setting that does the decorating for you.',
    highlights: [
      'Sunset ceremony on the water',
      'Canapés, cocktails & champagne',
      'Starlit reception',
      'Intimate atmosphere',
      'Up to 135 guests',
    ],
  },
  {
    title: 'Custom Charter',
    description:
      'Your wedding, your way. We work with you to design a completely bespoke experience — venue styling, catering, entertainment, photography, florals, and more — all coordinated by our event team.',
    highlights: [
      'Fully bespoke design',
      'Venue styling & florals',
      'Custom catering & bar packages',
      'Photography & videography',
      'Planning support throughout',
    ],
  },
];

const FAQ = [
  {
    q: 'How many guests can we have?',
    a: 'The Sun Goddess accommodates up to 135 guests for a day charter. The Mermaid Spirit hosts up to 100 guests. Both vessels offer distinct experiences — get in touch and we can help you choose the right vessel for your guest count.',
  },
  {
    q: 'Where do we depart?',
    a: 'Muriel Henchman Public Pontoon, Gold Coast — approximately 10 minutes from Surfers Paradise and 15 minutes from Broadbeach. Free parking is available at the pontoon.',
  },
  {
    q: 'Can we have a ceremony on board?',
    a: "Yes. We can host your ceremony on the foredeck with the Broadwater as your backdrop. We recommend coordinating with a registered marriage celebrant — we're happy to recommend partners if needed.",
  },
  {
    q: 'What catering options are available?',
    a: 'From canapés and platters to private chef fine dining — we work with our culinary partners to craft menus suited to your occasion. Grazing boards, buffets, and multi-course seated dinners are all available.',
  },
  {
    q: 'Can we arrange flowers and styling?',
    a: "Yes. Floral arrangements, table styling, and custom décor can all be coordinated through our event team. Let us know your vision and we'll connect you with the right suppliers.",
  },
  {
    q: 'What if it rains?',
    a: 'Both vessels have covered deck areas and interior spaces that keep your event running regardless of the weather. We will always have a contingency plan in place.',
  },
];

export default function CharterPageWedding() {
  return (
    <>
      <Nav />
      <main>
        <CharterHero
          eyebrow="Wedding Charters · Gold Coast"
          headline="Yacht Wedding Gold Coast"
          subtext="Say 'I Do' on a Boattime luxury yacht. Celebrate your love with friends and family as you cruise through the crystal waters of the Gold Coast — breathtaking scenery, golden hour light, and an occasion nobody will forget."
          image="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1800&q=80"
          ctas={[
            { label: 'Booking Enquiry', href: '/#inquiry', variant: 'primary' },
            { label: 'View Sun Goddess', href: '/sun-goddess-gold-coast', variant: 'ghost' },
            { label: 'View Mermaid Spirit', href: '/mermaid-spirit-gold-coast', variant: 'ghost' },
          ]}
        />
        <CharterOverview
          eyebrow="Why a Yacht Wedding"
          title="An unforgettable"
          titleAccent="venue on the water."
          description={[
            "There is no venue quite like it. No four walls, no ceiling — just open water, sea breeze, and a sky that changes colour as the evening unfolds. Boattime is one of the Gold Coast's leading private function providers, and we bring that experience to every wedding we host.",
            'With vessels accommodating up to 135 guests, world-class catering, and a dedicated event team, your wedding on the water will be as seamless as it is unforgettable.',
          ]}
          image="https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80"
        />
        <CharterPackages packages={PACKAGES} />
        <WeddingAdditionalServices />
        <VesselCards />
        <CharterInclusionsExtras />
        <CharterDestinations />
        <CharterFAQ items={FAQ} />
        <CharterBookingCTA
          heading="Start planning your"
          headingAccent="perfect day."
          subtext="Our wedding specialists will work with you from the first enquiry to the last dance. Get in touch and we'll begin building your experience."
        />
      </main>
      <Footer />
    </>
  );
}
