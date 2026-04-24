'use client';

import Nav from './Nav';
import Footer from './Footer';
import {
  CharterHero,
  CharterOverview,
  CorporateServiceTypes,
  CharterPackages,
  VesselCards,
  CharterInclusionsExtras,
  CharterDestinations,
  CharterFAQ,
  CharterBookingCTA,
} from './CharterSections';

const PACKAGES = [
  {
    title: 'Corporate Island Getaway',
    time: '12pm',
    duration: 'Min. 4 hours',
    capacity: 'Up to 130 guests',
    description:
      'A full day of island hopping, watersports and a gourmet BBQ buffet on the Broadwater. Ideal for team building, end-of-year celebrations, or rewarding your top performers.',
    highlights: [
      'Island hopping & swimming',
      'Banana boats & watersports',
      'BBQ buffet & cold drinks',
      'Dual bars throughout',
      'Professional crew & captain',
    ],
  },
  {
    title: 'Awards Night Cocktails & Canapés',
    time: '5pm',
    duration: '3 hours',
    capacity: 'Up to 130 guests',
    description:
      'Celebrate your team in style with a sunset cruise through the northern Broadwater islands. Platters, canapés, cocktails and champagne — the perfect setting for an awards ceremony or client entertainment evening.',
    highlights: [
      'Sunset Broadwater cruise',
      'Platters & canapés',
      'Cocktails & champagne',
      'Ideal for award ceremonies',
      'Corporate branding available',
    ],
  },
  {
    title: 'Custom Corporate Charter',
    description:
      'A fully tailored event built around your brief. From team-building watersports days to black-tie product launches — we coordinate catering, entertainment, logistics, and more.',
    highlights: [
      'Customisable to your brief',
      'Catering from chef partners',
      'DJ, band or AV presentations',
      'Photography & videography',
      'Flexible duration & guest count',
    ],
  },
];

const FAQ = [
  {
    q: 'Where do we depart?',
    a: 'Muriel Henchman Public Pontoon, Gold Coast — approximately 10 minutes from Surfers Paradise and 15 minutes from Broadbeach. Ample free parking is available at the pontoon.',
  },
  {
    q: 'Can we customise the catering and drinks?',
    a: 'Absolutely. From grazing boards and canapés to private chef fine dining — we work with our culinary partners to build a menu around your event. Bar packages are also fully customisable.',
  },
  {
    q: 'Is AV equipment available for presentations?',
    a: 'Yes. Both vessels have flat-screen TVs and premium audio throughout. Let us know your AV requirements at the time of enquiry.',
  },
  {
    q: 'What transport options are there for large groups?',
    a: 'Maxi taxis are the most popular and cost-effective option. The pontoon has ample free parking if guests prefer to drive.',
  },
  {
    q: 'Can we brand the event or add custom signage?',
    a: 'Yes — corporate branding, custom menus, and event theming can all be arranged. Contact us with your requirements and we will accommodate where possible.',
  },
  {
    q: 'Are accessibility requirements catered for?',
    a: 'We welcome guests with limited mobility. We recommend contacting us before booking so we can assess specific requirements and ensure the experience is comfortable for everyone.',
  },
];

export default function CharterPageCorporate() {
  return (
    <>
      <Nav />
      <main>
        <CharterHero
          eyebrow="Corporate Charters · Gold Coast"
          headline="Corporate Yacht Charter"
          subtext="Where luxury meets business. Our corporate charters offer a genuinely unique setting for retreats, client entertainment, team building, product launches, and award ceremonies."
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1800&q=80"
          ctas={[
            { label: 'Booking Enquiry', href: '/#inquiry', variant: 'primary' },
            { label: 'View Sun Goddess', href: '/sun-goddess-gold-coast', variant: 'ghost' },
            { label: 'View Mermaid Spirit', href: '/mermaid-spirit-gold-coast', variant: 'ghost' },
          ]}
        />
        <CharterOverview
          eyebrow="Why Boattime"
          title="A setting that"
          titleAccent="commands attention."
          description={[
            'Hosting a corporate event on the water changes everything. No hotel conference room, no boardroom — just open water, a premium vessel, and an experience your guests will talk about long after the event.',
            'Our experienced event team handles every detail: catering, entertainment, transport, logistics. You focus on your people, we handle everything else.',
          ]}
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80"
        />
        <CorporateServiceTypes />
        <CharterPackages packages={PACKAGES} />
        <VesselCards />
        <CharterInclusionsExtras />
        <CharterDestinations />
        <CharterFAQ items={FAQ} />
        <CharterBookingCTA
          heading="Let's plan your"
          headingAccent="corporate event."
          subtext="Our team will assess your needs and provide a customised quote. Send an enquiry and a specialist will be in touch within 24 hours."
        />
      </main>
      <Footer />
    </>
  );
}
