'use client';

import Script from 'next/script';
import Nav from './Nav';
import Footer from './Footer';
import {
  CruiseHero, CruiseEventBanner, CruiseOverview,
  CruisePhotographyFeature, CruiseInclusions,
  CruiseScheduleDetails, CruisePricingCards,
  CruiseGiftVoucherCallout,
} from './CruiseSections';

export default function ValentinesPage() {
  return (
    <>
      <Script
        src="https://boattimeyachtcharters.rezdy.com/pluginJs"
        strategy="lazyOnload"
      />

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
          bookingUrl="#book"
        />

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
          bookingUrl="#book"
        />

        <CruiseGiftVoucherCallout bookingUrl="#book" />

        {/* ── Inline booking widget ── */}
        <section
          id="book"
          style={{
            background: 'var(--navy-mid)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '80px 48px 100px',
          }}
        >
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ marginBottom: 48, textAlign: 'center' }}>
              <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
                Book Your Tickets
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: 'clamp(36px, 5vw, 60px)',
                  lineHeight: 1.0,
                  letterSpacing: '-0.02em',
                  color: 'var(--cream)',
                  marginBottom: 16,
                }}
              >
                Reserve your <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>spot</em>.
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 15,
                  color: 'var(--text-muted)',
                  lineHeight: 1.75,
                  maxWidth: 520,
                  margin: '0 auto',
                }}
              >
                Saturday, 14 February 2026. Limited tickets available for Valentine's evening.
                Instant confirmation on booking.
              </p>
            </div>

            <div
              style={{
                border: '1px solid var(--border-subtle)',
                background: 'rgba(255,255,255,0.02)',
              }}
            >
              <iframe
                seamless
                width="100%"
                height="1000px"
                frameBorder="0"
                className="rezdy"
                src="https://boattimeyachtcharters.rezdy.com/542529/zzz-luxury-valentines-sunset-cruise?iframe=true"
                style={{ display: 'block' }}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
