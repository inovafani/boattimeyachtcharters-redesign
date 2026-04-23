'use client';

import Nav from './Nav';
import Footer from './Footer';
import {
  CruiseHero, CruiseEventBanner, CruiseOverview,
  CruisePhotographyFeature, CruiseInclusions,
  CruiseScheduleDetails, CruisePricingCards,
  CruiseGiftVoucherCallout, CruiseBookingCTA,
} from './CruiseSections';

const BOOKING = 'https://boattimeyachtcharters.rezdy.com/';

export default function ValentinesPage() {
  return (
    <>
      <Nav />
      <main>
        <CruiseHero
          eyebrow="Special Event · Valentine's Day"
          title="Valentine's"
          titleAccent="Cruise 2026"
          image="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=2000&q=85"
          stats={[
            { label: 'Date',      value: '14 Feb 2026' },
            { label: '2 Tickets', value: '$269' },
            { label: 'Departs',   value: '6:00 PM' },
            { label: 'Duration',  value: '2.5 hours' },
          ]}
          bookingUrl={BOOKING}
        />

        {/* Date confirmed callout */}
        <CruiseEventBanner
          date="14 February 2026"
          vessel="Sun Goddess — 34m Superyacht"
          tagline="Two decks · Professional photography · Gourmet dining"
          urgency="Limited tickets available for Valentine's evening"
        />

        <CruiseOverview
          title="Valentine's"
          titleAccent="Cruise 2026"
          description={[
            'Give the gift of an evening they will never forget. Step aboard the Sun Goddess superyacht as the sun dissolves into the Broadwater, and spend two and a half golden hours adrift in absolute luxury.',
            'From the welcome champagne to the gourmet multi-course dinner and complimentary photography, every detail is prepared so you can focus entirely on the person beside you.',
          ]}
          image="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80"
        />

        {/* Photography is a signature feature of this cruise */}
        <CruisePhotographyFeature />

        <CruiseInclusions
          items={[
            { title: 'Champagne on Arrival',     detail: 'Sparkling wine or premium beer to begin the evening as you board.' },
            { title: 'Multi-Course Dinner',      detail: 'Gourmet canapés followed by a carefully crafted multi-course dining experience.' },
            { title: 'Professional Photography', detail: 'Complimentary photography on boarding to capture the occasion forever.' },
            { title: 'Full Bar Service',         detail: 'Fully stocked bar with cocktails, wine, beer, and spirits all evening.' },
            { title: 'Sunset Views',             detail: 'Dine under the golden-hour sky with 360° views of the Broadwater.' },
            { title: 'Premium Crew Service',     detail: 'Dedicated crew providing attentive, unhurried service throughout.' },
          ]}
        />

        <CruiseScheduleDetails
          schedule={[
            { label: 'Boarding',  time: '5:30 PM' },
            { label: 'Departure', time: '6:00 PM' },
            { label: 'Return',    time: '8:00 PM' },
          ]}
          dates="Saturday, 14 February 2026"
          location="Muriel Henchman Public Pontoon&#10;Seaworld Drive, Main Beach QLD 4217"
          vessel="Sun Goddess — 34m superyacht"
        />

        <CruisePricingCards
          pricing={[
            { label: '2 Tickets', price: '$269', note: '$134.50 per person · all inclusive' },
          ]}
          bookingUrl={BOOKING}
        />

        {/* Valentine's-specific gift voucher callout */}
        <CruiseGiftVoucherCallout bookingUrl={BOOKING} />

        <CruiseBookingCTA bookingUrl={BOOKING} />
      </main>
      <Footer />
    </>
  );
}
