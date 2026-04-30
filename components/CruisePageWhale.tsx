'use client';

import Script from 'next/script';
import Nav from './Nav';
import Footer from './Footer';
import {
  CruiseHero,
  CruiseGallery,
  CruiseItinerary,
  CruiseYachts,
  CruiseExperience,
} from './CruiseSections';
import type { ReactNode } from 'react';

// ── Data ──────────────────────────────────────────────────────────────────────

const GL: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 9,
  letterSpacing: '0.28em',
  textTransform: 'uppercase' as const,
  color: 'var(--gold)',
  fontWeight: 600,
};

const GALLERY_THUMBS = [
  'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
  'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=600&q=80',
  'https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=600&q=80',
  '/broadwater.jpeg',
];

const ITINERARY_INTRO: ReactNode = (
  <div
    style={{
      fontFamily: 'var(--font-body)',
      color: 'rgba(245,240,232,0.75)',
      lineHeight: 1.9,
    }}
  >
    <p style={{ marginBottom: 20, fontSize: 15 }}>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 72,
          float: 'left',
          lineHeight: 0.78,
          color: 'var(--gold)',
          marginRight: 10,
          marginTop: 6,
          fontStyle: 'italic',
        }}
      >
        S
      </span>
      ensational two and a half hour Luxury Gold Coast Whale Watching tours on
      board Sun Goddess, a stylish 34 metre super yacht with a fully licensed
      bar and rotating viewing decks so everyone gets an amazing view!
    </p>
    <p style={{ fontSize: 14, clear: 'both' }}>
      Jump aboard a clean, well appointed vessel and a truly international
      operation for a unique tour away from the crowded big players. Sensational
      commentary with lots of fun and games along the way, our world-class and
      informative crew will guide you on an epic adventure learning about the
      unique marine life and Whale Migration off the Gold Coast.
    </p>
  </div>
);

const ITINERARY = [
  {
    title: 'Schedule',
    content: (
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 14,
          color: 'rgba(245,240,232,0.7)',
          lineHeight: 1.85,
        }}
      >
        <p style={{ marginBottom: 10 }}>
          <strong
            style={{
              color: 'var(--gold)',
              fontWeight: 600,
              letterSpacing: '0.1em',
              fontSize: 11,
              textTransform: 'uppercase' as const,
            }}
          >
            Morning Session
          </strong>
          <br />
          Boarding 8:30 AM &middot; Departs 9:00 AM &middot; Returns 11:30 AM
        </p>
        <p>
          <strong
            style={{
              color: 'var(--gold)',
              fontWeight: 600,
              letterSpacing: '0.1em',
              fontSize: 11,
              textTransform: 'uppercase' as const,
            }}
          >
            Afternoon Session
          </strong>
          <br />
          Boarding 1:00 PM &middot; Departs 1:30 PM &middot; Returns 4:00 PM
        </p>
        <p style={{ marginTop: 12, color: 'rgba(245,240,232,0.5)' }}>
          Both sessions operate 7 days a week, June through November.
        </p>
      </div>
    ),
  },
  {
    title: 'What You Should Bring',
    content: (
      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: 'none',
          fontFamily: 'var(--font-body)',
          fontSize: 14,
          color: 'rgba(245,240,232,0.7)',
          lineHeight: 1.85,
        }}
      >
        {[
          'Sunscreen and sunglasses',
          'A camera or fully charged phone — you will want it',
          'A warm layer for open-deck viewing (the ocean breeze can be cool)',
          'Non-slip, comfortable shoes',
          "Seasickness medication if you're prone — take 30 minutes before boarding",
          'Photo ID for the licensed bar',
        ].map((item, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              gap: 14,
              paddingBottom: 10,
              marginBottom: 10,
              borderBottom: i < 5 ? '1px solid rgba(201,168,76,0.08)' : 'none',
            }}
          >
            <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 2 }}>
              —
            </span>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: 'Best Times For This Excursion',
    content: (
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 14,
          color: 'rgba(245,240,232,0.7)',
          lineHeight: 1.85,
        }}
      >
        <p style={{ marginBottom: 14 }}>
          The Gold Coast humpback season runs June through November. Morning
          sessions typically offer calmer sea conditions and more active whale
          behaviour.
        </p>
        <p style={{ marginBottom: 14 }}>
          September and October tend to have the highest whale density as
          thousands of humpbacks pass through on their southern migration.
        </p>
        <p>
          We operate daily throughout the season — and our whale sighting
          guarantee means you will always get value, no matter the conditions.
        </p>
      </div>
    ),
  },
  {
    title: 'Frequently Asked',
    content: (
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 14,
          color: 'rgba(245,240,232,0.7)',
          lineHeight: 1.85,
        }}
      >
        {[
          {
            q: 'Will I get seasick?',
            a: 'We recommend a non-drowsy seasickness remedy taken 30 minutes before boarding. The Sun Goddess is a large, stable vessel and the Broadwater is relatively protected. Covered seating is available throughout.',
          },
          {
            q: 'Are children welcome?',
            a: 'Absolutely — all ages are welcome aboard. Life jackets and full safety briefings are provided for all passengers.',
          },
          {
            q: 'What if it rains?',
            a: 'All cruises operate in all weather unless conditions are unsafe. The Sun Goddess has covered viewing areas on every deck.',
          },
          {
            q: 'How close do we get to the whales?',
            a: 'We follow all marine park regulations and maintain a respectful distance — but humpbacks are naturally curious and often approach the vessel.',
          },
        ].map((faq, i, arr) => (
          <div
            key={i}
            style={{
              paddingBottom: 16,
              marginBottom: 16,
              borderBottom:
                i < arr.length - 1 ? '1px solid rgba(201,168,76,0.08)' : 'none',
            }}
          >
            <div
              style={{
                color: 'var(--cream)',
                fontWeight: 500,
                marginBottom: 6,
              }}
            >
              {faq.q}
            </div>
            <div>{faq.a}</div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: 'Gift Voucher T&Cs',
    content: (
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 14,
          color: 'rgba(245,240,232,0.7)',
          lineHeight: 1.85,
        }}
      >
        <p style={{ marginBottom: 12 }}>
          Gift vouchers never expire and can be redeemed online for any
          available whale watching session — perfect for birthdays,
          anniversaries, or anyone who has everything.
        </p>
        <p style={{ marginBottom: 12 }}>
          Vouchers can be purchased from $74.50 (one adult ticket). To redeem,
          simply enter your voucher code during checkout at our booking portal.
        </p>
        <p>
          Vouchers are valid for any session during whale season (June –
          November) and can be gifted via email instantly.
        </p>
      </div>
    ),
  },
  {
    title: 'Optional Extras',
    content: (
      <ul
        style={{
          margin: 0,
          padding: 0,
          listStyle: 'none',
          fontFamily: 'var(--font-body)',
          fontSize: 14,
          color: 'rgba(245,240,232,0.7)',
          lineHeight: 1.85,
        }}
      >
        {[
          'Premium drinks packages available from $35 pp — ask the crew on boarding',
          'Souvenir whale watching guidebooks available for purchase on board',
          'Professional photography prints available post-cruise via our online gallery',
          'Gift vouchers from $74.50 — never expire, redeemable online',
        ].map((item, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              gap: 14,
              paddingBottom: 10,
              marginBottom: 10,
              borderBottom: i < 3 ? '1px solid rgba(201,168,76,0.08)' : 'none',
            }}
          >
            <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 2 }}>
              —
            </span>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
];

const VESSELS = [
  {
    image:
      'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1600&q=80',
    name: 'Mermaid Spirit',
    description:
      'This hugely spacious and beautifully appointed vessel is the perfect venue for functions and celebrations. A Tri-Deck catamaran, Mermaid Spirit is the ultimate entertaining venue.',
    pax: '100 Guests',
    size: '30m (100ft)',
    features: [
      '3 Decks',
      'Well-Appointed Galley',
      'Sun Lounge',
      "Chef's Kitchen",
      'Dual Bars',
    ],
    href: '/mermaid-spirit-gold-coast',
  },
  {
    image: '/broadwater.jpeg',
    name: 'Sun Goddess',
    description:
      "Sleek, stylish, and luxury are the first words that come to mind when you view Sun Goddess. A real 'Head Turner,' SG will get people excited — lots of room without giving up the luxury.",
    pax: '135 Guests',
    size: '34m (110ft)',
    features: [
      'Dual Bars',
      '2 Decks',
      'Dual-level Galley',
      'Speakers Throughout',
      "A Real 'Head Turner'",
    ],
    href: '/sun-goddess-gold-coast',
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function WhalePage() {
  return (
    <>
      <Script
        src="https://boattimeyachtcharters.rezdy.com/pluginJs"
        strategy="lazyOnload"
      />
      <Nav />
      <main>
        {/* 1 ── HERO */}
        <CruiseHero
          eyebrow="Cruise Tickets · Whale Watching"
          title="Luxury Whale Watching"
          titleAccent="Gold Coast"
          image="/luxury-whale.jpg"
          stats={[
            { label: 'Duration', value: '2.5 hours' },
            { label: 'From', value: '$74.50 pp' },
            { label: 'Season', value: 'Jun – Nov' },
            { label: 'Daily', value: 'AM & PM' },
          ]}
          bookingUrl="#book"
        />

        {/* 3 ── SOCIAL PROOF */}
        <div
          style={{
            background: 'var(--navy-mid)',
            padding: '28px 48px',
            borderTop: '1px solid rgba(201,168,76,0.1)',
            borderBottom: '1px solid rgba(201,168,76,0.1)',
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 64,
              flexWrap: 'wrap',
            }}
          >
            {[
              {
                platform: 'Facebook',
                score: '5.0',
                reviews: '2,047 reviews',
                stars: 5,
              },
              {
                platform: 'Google',
                score: '4.7',
                reviews: '1,863 reviews',
                stars: 5,
              },
            ].map((r) => (
              <div
                key={r.platform}
                style={{ display: 'flex', alignItems: 'center', gap: 14 }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 9,
                      letterSpacing: '0.28em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      fontWeight: 600,
                      marginBottom: 4,
                    }}
                  >
                    Boattime Yacht Charters
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 10,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,240,232,0.45)',
                      marginBottom: 6,
                    }}
                  >
                    {r.platform}
                  </div>
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                  >
                    <span style={{ color: 'var(--gold)', fontSize: 13 }}>
                      {'★'.repeat(r.stars)}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 18,
                        color: 'var(--cream)',
                        lineHeight: 1,
                      }}
                    >
                      {r.score}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 10,
                        color: 'rgba(245,240,232,0.45)',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {r.reviews}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 ── SESSION INFO BAR */}
        <div
          style={{
            background: 'var(--navy)',
            padding: '16px 48px',
            borderBottom: '1px solid rgba(201,168,76,0.08)',
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              display: 'flex',
              alignItems: 'center',
              gap: 32,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <circle cx="12" cy="5" r="3" />
              <line x1="12" y1="22" x2="12" y2="8" />
              <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
            </svg>
            {[
              'SeaWorld Drive Muriel Henchman Public Pontoon Gold Coast',
              'Morning Sessions 9:00 AM · 7 Days',
              'Afternoon Sessions 1:30 PM · 7 Days',
            ].map((text, i, arr) => (
              <span
                key={i}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 10,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(245,240,232,0.55)',
                  fontWeight: 500,
                  borderRight:
                    i < arr.length - 1
                      ? '1px solid rgba(201,168,76,0.15)'
                      : 'none',
                  paddingRight: i < arr.length - 1 ? 32 : 0,
                }}
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* 5 ── GALLERY */}
        <CruiseGallery
          main="https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=1200&q=80"
          thumbs={GALLERY_THUMBS}
          wide="/luxury-whale.jpg"
        />

        {/* 6 ── QUICK INFO GRID */}
        <div
          style={{
            background: 'var(--navy-mid)',
            padding: '60px 48px',
            borderTop: '1px solid rgba(201,168,76,0.08)',
          }}
        >
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 2,
                background: 'rgba(201,168,76,0.06)',
                border: '1px solid rgba(201,168,76,0.1)',
              }}
            >
              {[
                {
                  label: 'Departure Point',
                  value: 'Muriel Henchman Public Pontoon, Gold Coast',
                },
                { label: 'Sessions Per Day', value: '2 (AM & PM)' },
                { label: 'Days Per Week', value: '7 Days — June to November' },
                { label: 'Duration', value: '2.5 Hours' },
                { label: 'Vessel', value: 'Superyacht Experience' },
                { label: 'Guarantee', value: 'Whale Sighting Guaranteed' },
              ].map((item, i, arr) => (
                <div
                  key={i}
                  style={{
                    padding: '32px 28px',
                    borderRight:
                      (i + 1) % 3 !== 0
                        ? '1px solid rgba(201,168,76,0.08)'
                        : 'none',
                    borderBottom:
                      i < arr.length - 3
                        ? '1px solid rgba(201,168,76,0.08)'
                        : 'none',
                  }}
                >
                  <div style={{ ...GL, marginBottom: 8 }}>{item.label}</div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13,
                      color: 'rgba(245,240,232,0.78)',
                      lineHeight: 1.5,
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 7 ── DETAILS & ITINERARY */}
        <CruiseItinerary items={ITINERARY} intro={ITINERARY_INTRO} />

        {/* 8 ── OUR YACHTS */}
        <CruiseYachts vessels={VESSELS} />

        {/* 9 ── THE BOATTIME EXPERIENCE */}
        <CruiseExperience videoId="4te3yFiKLmM" />

        {/* 10 ── GET YOUR TICKETS NOW CTA */}
        <section
          style={{
            background: 'var(--gold)',
            padding: '72px 48px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: 680, margin: '0 auto' }}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(10,22,40,0.4)"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{ marginBottom: 20 }}
            >
              <circle cx="12" cy="5" r="3" />
              <line x1="12" y1="22" x2="12" y2="8" />
              <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
            </svg>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: 'clamp(24px, 3.5vw, 40px)',
                color: 'var(--navy)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                lineHeight: 1.15,
                marginBottom: 16,
              }}
            >
              Get Your Tickets Now
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 12,
                color: 'rgba(10,22,40,0.65)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 32,
              }}
            >
              Boarding at 8:30 am &middot; From: Muriel Henchman Public Pontoon
              Gold Coast
            </p>
            <div
              style={{
                display: 'flex',
                gap: 12,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="#book"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'var(--navy)',
                  color: 'var(--cream)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 10,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  textDecoration: 'none',
                  padding: '14px 28px',
                }}
              >
                Buy Tickets
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6h8M6 2l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#book"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'transparent',
                  color: 'var(--navy)',
                  border: '1px solid rgba(10,22,40,0.4)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 10,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  textDecoration: 'none',
                  padding: '14px 28px',
                }}
              >
                Gift Vouchers
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 6h8M6 2l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* 11 ── INLINE BOOKING WIDGET */}
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
              <div
                className="section-eyebrow"
                style={{ justifyContent: 'center' }}
              >
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
                Reserve your{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>
                  spot
                </em>
                .
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
                Morning and afternoon sessions run daily June through November.
                Instant confirmation — cancel up to 24 hours before for a full
                refund.
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
                src="https://boattimeyachtcharters.rezdy.com/431872/luxury-whale-watching-experience?iframe=true"
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
