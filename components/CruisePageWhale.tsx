'use client';

import Nav from './Nav';
import Footer from './Footer';
import {
  CruiseHero, CruiseSessions, CruiseOverview,
  CruiseInclusions, CruiseGuaranteeBanner,
  CruiseScheduleDetails, CruisePricingCards, CruiseBookingCTA,
} from './CruiseSections';

const BOOKING = 'https://boattimeyachtcharters.rezdy.com/';

export default function WhalePage() {
  return (
    <>
      <Nav />
      <main>
        <CruiseHero
          eyebrow="Cruise Tickets · Whale Watching"
          title="Luxury Whale Watching"
          titleAccent="Gold Coast"
          image="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=2000&q=85"
          stats={[
            { label: 'Duration',     value: '2.5 hours' },
            { label: 'From',         value: '$74.50 pp' },
            { label: 'Season',       value: 'Jun – Nov' },
            { label: 'Daily',        value: 'AM & PM' },
          ]}
          bookingUrl={BOOKING}
        />

        {/* Two sessions side by side */}
        <CruiseSessions
          morning={{   boarding: '8:30 AM', departs: '9:00 AM',  returns: '11:30 AM' }}
          afternoon={{ boarding: '1:00 PM', departs: '1:30 PM',  returns: '4:00 PM'  }}
        />

        <CruiseOverview
          title="Luxury Whale Watching"
          titleAccent="Gold Coast"
          description={[
            'Board the Sun Goddess superyacht for an extraordinary encounter with humpback whales in their natural habitat. From June through November, the waters off the Gold Coast become a stage for one of nature\'s most breathtaking spectacles.',
            'Our expert crew provides live marine commentary throughout the voyage, bringing you closer to these magnificent creatures while ensuring their comfort and safety. With 360° rotating viewing decks, every passenger has a front-row seat to moments they will never forget.',
          ]}
          image="https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=800&q=80"
        />

        <CruiseInclusions
          items={[
            { title: 'Sun Goddess Superyacht',  detail: '135-passenger luxury vessel with multiple viewing decks and full onboard amenities.' },
            { title: 'Marine Commentary',       detail: 'World-class crew delivering live education and whale behaviour insights throughout.' },
            { title: 'Licensed Bar',            detail: 'Fully licensed bar open throughout the voyage plus complimentary tea and coffee.' },
            { title: 'Whale Guarantee',         detail: 'No whales sighted? Receive a complimentary return ticket — no questions asked.' },
            { title: 'Light Snacks',            detail: 'Selection of nibbles and snacks available on board throughout the voyage.' },
            { title: '360° Viewing Decks',      detail: 'Multiple open-air decks with unobstructed ocean views in every direction.' },
          ]}
        />

        <CruiseGuaranteeBanner />

        <CruiseScheduleDetails
          schedule={[
            { label: 'Boarding — Morning',  time: '8:30 AM' },
            { label: 'Departure',           time: '9:00 AM' },
            { label: 'Return',              time: '11:30 AM' },
          ]}
          dates="June – November · 7 days a week&#10;Afternoon session departs 1:30 PM"
          location="Muriel Henchman Public Pontoon&#10;Seaworld Drive, Main Beach, Gold Coast"
          vessel="Sun Goddess — 34m superyacht · up to 135 guests"
          availability="Morning & afternoon sessions available daily"
        />

        <CruisePricingCards
          pricing={[
            { label: '2 Tickets',     price: '$149',     note: '$74.50 per person' },
            { label: '1 Adult',       price: '$85',      note: 'Single ticket' },
            { label: 'Gift Voucher',  price: 'From $85', note: 'Never expires' },
          ]}
          bookingUrl={BOOKING}
        />

        <CruiseBookingCTA bookingUrl={BOOKING} />
      </main>
      <Footer />
    </>
  );
}
