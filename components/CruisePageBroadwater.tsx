'use client';

import Script from 'next/script';
import Nav from './Nav';
import Footer from './Footer';
import {
  CruiseHero, CruiseDealBanner, CruiseOverview,
  CruisePerfectFor, CruiseInclusions,
  CruiseScheduleDetails, CruisePricingCards,
} from './CruiseSections';

export default function BroadwaterPage() {
  return (
    <>
      <Script
        src="https://boattimeyachtcharters.rezdy.com/pluginJs"
        strategy="lazyOnload"
      />

      <Nav />
      <main>
        <CruiseHero
          eyebrow="Cruise Tickets · Sunset Cruise"
          title="Broadwater"
          titleAccent="Sunset Cruise"
          image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2000&q=85"
          stats={[
            { label: 'Duration',  value: '2 hours' },
            { label: 'From',      value: '$64.50 pp' },
            { label: 'Departs',   value: '5:00 PM' },
            { label: 'Days',      value: 'Fri Sat Sun' },
          ]}
          bookingUrl="#book"
        />

        <CruiseDealBanner
          headline="2 Tickets for $129"
          sub="Save when you bring someone special · also available for 4 guests at $229"
        />

        <CruiseOverview
          title="Broadwater"
          titleAccent="Sunset Cruise"
          description={[
            'Step aboard the Sun Goddess as the Gold Coast sky turns gold. Over two unhurried hours you\'ll drift through the shimmering Broadwater, watching the city skyline glow and the horizon catch fire — all from the deck of a 34-metre luxury superyacht.',
            'Keep an eye out for dolphins and turtles playing alongside the hull. A share plate and your first glass arrive as soon as you\'re settled. There is no better way to end a Gold Coast day.',
          ]}
          image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
        />

        <CruisePerfectFor
          categories={[
            { label: 'Couples',       description: 'Sparkling on arrival, sunset views, and two hours of uninterrupted togetherness on the Broadwater.' },
            { label: 'Families',      description: 'Children are welcome — spot dolphins, take in the skyline, and enjoy the fresh sea air together.' },
            { label: 'Date Nights',   description: 'An evening that impresses without effort. Let the sunset do the talking.' },
          ]}
        />

        <CruiseInclusions
          items={[
            { title: 'Sparkling on Arrival',  detail: 'One complimentary glass of sparkling wine or premium beer as you board.' },
            { title: 'Nibbles Share Plate',   detail: 'A curated share plate for two served during the cruise.' },
            { title: 'Sunset Views',          detail: 'Watch the sun set over the Gold Coast skyline from the open deck.' },
            { title: 'Wildlife Spotting',     detail: 'Regular dolphin and turtle sightings in the Broadwater waters.' },
            { title: 'Light Commentary',      detail: 'Gentle commentary about the Broadwater, its wildlife, and surrounds.' },
            { title: 'Licensed Bar',          detail: 'Fully stocked bar serving wine, beer, spirits, and soft drinks throughout.' },
          ]}
        />

        <CruiseScheduleDetails
          schedule={[
            { label: 'Boarding',  time: '4:30 PM' },
            { label: 'Departure', time: '5:00 PM' },
            { label: 'Return',    time: '7:00 PM' },
          ]}
          dates="Fridays, Saturdays & Sundays year-round"
          location="Muriel Henchman Public Pontoon&#10;Seaworld Drive, Main Beach, Gold Coast"
          vessel="Sun Goddess — 34m superyacht · up to 100 guests"
        />

        <CruisePricingCards
          pricing={[
            { label: '1 Adult',      price: '$79',  note: 'Single ticket' },
            { label: '2 Adults',     price: '$129', note: '$64.50 each' },
            { label: '4 Adults',     price: '$229', note: '$57.25 each' },
            { label: 'Child (3–13)', price: '$59',  note: 'Per child' },
          ]}
          bookingUrl="#book"
        />

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
                Book Your Session
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
                Fridays, Saturdays, and Sundays at 5:00 PM year-round.
                Instant confirmation — cancel up to 24 hours before for a full refund.
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
                src="https://boattimeyachtcharters.rezdy.com/700304/gold-coast-sunset-cruise-on-board-sun-goddess?iframe=true"
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
