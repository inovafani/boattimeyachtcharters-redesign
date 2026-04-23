'use client';

import Nav from './Nav';
import Footer from './Footer';
import {
  CruiseHero, CruiseEventBanner, CruiseOverview,
  CruiseFoodMenu, CruiseInclusions, CruiseSocialProof,
  CruiseScheduleDetails, CruisePricingCards, CruiseBookingCTA,
} from './CruiseSections';

const BOOKING = 'https://boattimeyachtcharters.rezdy.com/';

export default function RiverPage() {
  return (
    <>
      <Nav />
      <main>
        <CruiseHero
          eyebrow="Special Event · Riverfire 2026"
          title="Riverfire"
          titleAccent="2026"
          image="https://images.unsplash.com/photo-1498354178607-a79df2916198?w=2000&q=85"
          stats={[
            { label: 'Date',       value: '5 Sep 2026' },
            { label: 'Per Person', value: '$249' },
            { label: 'Duration',   value: '5 hours' },
            { label: 'Event',      value: '18+ Only' },
          ]}
          bookingUrl={BOOKING}
        />

        {/* Event + location details */}
        <CruiseEventBanner
          date="5 September 2026"
          vessel="Mermaid Spirit — Brisbane River"
          tagline="New Farm · Three decks · Dual bars · 100 guests"
          adultsOnly
          urgency="Limited tickets — Brisbane's most sought-after NYE alternative"
        />

        <CruiseOverview
          title="Riverfire"
          titleAccent="2026"
          description={[
            'Brisbane\'s iconic Riverfire festival transforms the river into the most spectacular stage in Queensland — and the Mermaid Spirit gives you the finest vantage point of all. Spend five hours aboard a 30-metre luxury catamaran as the city ignites around you.',
            'Two bars, three decks, premium gourmet canapés, and an unobstructed front-row seat for the fireworks display that defines the Brisbane summer. Adults only.',
          ]}
          image="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80"
        />

        {/* Canapé menu is a key feature of this event page */}
        <CruiseFoodMenu
          title="Gourmet Canapés"
          titleAccent="On Arrival"
          sections={[
            {
              heading: 'Savoury',
              items: [
                'Beef mignon with truffle aioli',
                'Bangalow pork belly bites',
                'Lemon-herb chicken skewers',
                'Natural oysters with mignonette',
              ],
            },
            {
              heading: 'Seafood & Vegetarian',
              items: [
                'Queensland tiger prawns with cocktail sauce',
                'Smoked salmon blini with crème fraîche',
                'Caprese bruschetta (vegetarian)',
                'Seasonal vegetable tartlet (GF option)',
              ],
            },
          ]}
        />

        <CruiseInclusions
          items={[
            { title: 'Welcome Champagne',  detail: 'Champagne, wine, or premium beer upon boarding as the afternoon begins.' },
            { title: 'Gourmet Canapés',    detail: 'Beef, chicken, pork belly, oysters, Queensland prawns, and vegetarian options.' },
            { title: 'Dual Bar Service',   detail: 'Two fully licensed bars serving premium drinks throughout the 5-hour voyage.' },
            { title: 'Three Deck Access',  detail: 'All three spacious decks with unobstructed views up and down the Brisbane River.' },
            { title: 'Riverfire Views',    detail: 'Premium waterfront positioning for the full Riverfire fireworks display.' },
            { title: '18+ Adults Only',    detail: 'Adults-only event for an elevated atmosphere and premium on-board experience.' },
          ]}
        />

        {/* Social proof — especially relevant here as a high-trust event booking */}
        <CruiseSocialProof
          ratings={[
            { score: '5.0', label: 'Facebook · 2,047 reviews' },
            { score: '4.7', label: 'Google · 1,863 reviews' },
            { score: '12yr', label: 'On the water' },
          ]}
        />

        <CruiseScheduleDetails
          schedule={[
            { label: 'Boarding',            time: '3:00 PM' },
            { label: 'Departure',           time: '3:30 PM' },
            { label: 'Riverfire Fireworks', time: 'At dusk' },
            { label: 'Return',              time: '8:30 PM' },
          ]}
          dates="Saturday, 5 September 2026&#10;18+ only event"
          location="New Farm, Brisbane River&#10;Brisbane, Queensland"
          vessel="Mermaid Spirit — 30m tri-deck catamaran · 100 guests"
          availability="Limited tickets — sells out every year"
        />

        <CruisePricingCards
          pricing={[
            { label: 'Per Person', price: '$249', note: 'Includes canapés, champagne & full bar access' },
          ]}
          bookingUrl={BOOKING}
        />

        <CruiseBookingCTA bookingUrl={BOOKING} />
      </main>
      <Footer />
    </>
  );
}
