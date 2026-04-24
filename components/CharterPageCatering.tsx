'use client';

import Nav from './Nav';
import Footer from './Footer';
import {
  CharterHero,
  CharterOverview,
  CateringMenuGrid,
  CateringConsultation,
  CharterBookingCTA,
} from './CharterSections';

export default function CharterPageCatering() {
  return (
    <>
      <Nav />
      <main>
        <CharterHero
          eyebrow="Catering · Gold Coast"
          headline="Luxury Catering"
          subtext="Every charter deserves exceptional food. From grazing boards and canapés to fine dining and custom drinks packages — we bring the full Gold Coast dining experience on board."
          image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80"
          ctas={[
            { label: 'Get In Touch', href: '/#inquiry', variant: 'primary' },
            { label: 'View Packages', href: '#menus', variant: 'ghost' },
          ]}
        />
        <CharterOverview
          eyebrow="Private Chefs of Brisbane"
          title="Award-winning cuisine,"
          titleAccent="served on the water."
          description={[
            'We partner with Private Chefs of Brisbane — an award-winning culinary team with deep experience in luxury event catering. Every menu is crafted from the finest Australian produce, designed for the unique environment of a moving vessel.',
            'From intimate canapé receptions to full buffet feasts for 135 guests, our culinary team adapts to your occasion, your dietary requirements, and your vision.',
          ]}
          image="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80"
        />
        <div id="menus">
          <CateringMenuGrid />
        </div>
        <CateringConsultation />
        <CharterBookingCTA
          heading="Ready to discuss your"
          headingAccent="catering menu?"
          subtext="Every menu is built around your group. Contact our team and we'll coordinate the perfect spread for your charter."
        />
      </main>
      <Footer />
    </>
  );
}
