'use client';

import Script from 'next/script';
import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from './Nav';
import Footer from './Footer';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ============================================================
   Sky to Sea — Boattime × Gold Coast Helitours campaign page.
   Sales-driven landing page for the co-branded whale bundle:
   scenic helicopter flight (sky) + luxury yacht cruise (sea).
   Boattime-led identity; Gold Coast Helitours real assets.
   NOTE: prices are indicative placeholders — confirm with GCH.
   ============================================================ */

const BUNDLE_PRICE = 349; // placeholder
const HELI_PRICE = 285; // placeholder
const CRUISE_PRICE = 129; // placeholder
const SEPARATE_TOTAL = HELI_PRICE + CRUISE_PRICE; // 414
const SAVING = SEPARATE_TOTAL - BUNDLE_PRICE; // 65

// ── Icons ─────────────────────────────────────────────────────────────────────

function HeliIcon({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--gold)"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 6h18" />
      <path d="M12 6v3" />
      <path d="M7 12.5C7 10.6 8.6 9 12 9c4.5 0 7 1.6 7 4v1.5H9a2 2 0 0 1-2-2Z" />
      <path d="M9 16.5h7" />
      <path d="M19 14.5c1.6 0 1.6 2-0.6 2H16" />
      <path d="M12 16.5V19" />
      <path d="M9.5 19h5" />
    </svg>
  );
}

function WhaleIcon({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--gold)"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 13c0 3.5 3.5 6 8 6 3 0 5.5-1.2 7-3.2" />
      <path d="M3 13c0-2 1.4-3.5 3-3.5 1.2 0 2 0.7 2.4 1.6" />
      <path d="M18 15.8c1.5-0.6 3-2 3-4 0-1.5-1-2.3-1.8-1.3-0.5 0.6-0.4 1.5 0.2 2" />
      <path d="M7 13.5h0.01" />
    </svg>
  );
}

function BadgeCheckIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--gold)"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path
        d="M12 2l2.4 1.8 3 .2.2 3L20 12l-2.4 2.8-.2 3-3 .2L12 20l-2.4-1.8-3-.2-.2-3L4 12l2.4-2.8.2-3 3-.2L12 2Z"
        opacity="0.45"
      />
      <path d="M8.5 12l2.4 2.4L16 9" />
    </svg>
  );
}

function Tick() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      style={{ flexShrink: 0, marginTop: 3 }}
      aria-hidden="true"
    >
      <path
        d="M2 7L5.5 10.5L12 4"
        stroke="var(--gold)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Stars({ size = 14 }: { size?: number }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="#C9A84C">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

// ── Dual-brand lockup (real logos) ──────────────────────────────────────────────

function BrandLockup() {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/gch-logo.png"
        alt="Gold Coast Helitours"
        style={{ height: 54, width: 'auto' }}
      />
    </div>
  );
}

// ── Section heading helper ──────────────────────────────────────────────────────

function SectionHead({
  eyebrow,
  title,
  sub,
  align = 'center',
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  align?: 'center' | 'left';
}) {
  return (
    <div
      style={{
        textAlign: align,
        maxWidth: align === 'center' ? 760 : undefined,
        margin: align === 'center' ? '0 auto' : undefined,
      }}
    >
      <div
        className="section-eyebrow"
        style={{
          justifyContent: align === 'center' ? 'center' : 'flex-start',
          marginBottom: 22,
        }}
      >
        {eyebrow}
      </div>
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 300,
          fontSize: 'clamp(32px, 4.5vw, 58px)',
          lineHeight: 1.02,
          letterSpacing: '-0.02em',
          color: 'var(--cream)',
          marginBottom: sub ? 20 : 0,
        }}
      >
        {title}
      </h2>
      {sub && (
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            color: 'var(--text-muted)',
            lineHeight: 1.8,
            fontWeight: 300,
            maxWidth: 580,
            margin: align === 'center' ? '0 auto' : undefined,
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

// ── Experience half-card (Sky / Sea) ────────────────────────────────────────────

function ExperienceCard({
  kicker,
  operator,
  title,
  body,
  image,
  icon,
}: {
  kicker: string;
  operator: string;
  title: string;
  body: string;
  image: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: 'var(--navy-mid)',
        border: '1px solid rgba(201,168,76,0.16)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ height: 300, position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(10,22,40,0.94) 0%, rgba(10,22,40,0.1) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 28,
            bottom: 24,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          {icon}
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 10,
              letterSpacing: '0.26em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              fontWeight: 600,
            }}
          >
            {kicker}
          </div>
        </div>
      </div>

      <div style={{ padding: '40px 40px 44px' }}>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 9,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            fontWeight: 600,
            marginBottom: 14,
          }}
        >
          {operator}
        </div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(26px, 3vw, 36px)',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
            color: 'var(--cream)',
            marginBottom: 18,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            color: 'rgba(245,240,232,0.72)',
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

// ── Marquee urgency strip ───────────────────────────────────────────────────────

function UrgencyStrip() {
  const items = [
    'WHALE SEASON · JUNE – NOVEMBER',
    'LIMITED SEATS EACH DEPARTURE',
    `BUNDLE & SAVE $${SAVING}`,
    'SIGHTING GUARANTEE',
    'INSTANT CONFIRMATION',
  ];
  const row = [...items, ...items];
  return (
    <div
      style={{
        background: 'var(--gold)',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        padding: '12px 0',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          gap: 0,
          animation: 'skyseaMarquee 26s linear infinite',
        }}
      >
        {row.map((t, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 11,
              letterSpacing: '0.22em',
              fontWeight: 700,
              color: '#0A1628',
              padding: '0 28px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 28,
            }}
          >
            {t}
            <span style={{ opacity: 0.4 }}>&bull;</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes skyseaMarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}

// ── Sticky bottom book bar ──────────────────────────────────────────────────────

function StickyBookBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div
      className="skysea-stickybar"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 90,
        background: 'rgba(6,14,28,0.94)',
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderTop: '1px solid rgba(201,168,76,0.28)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        padding: '14px 32px',
        transform: show ? 'translateY(0)' : 'translateY(110%)',
        transition: 'transform 0.4s cubic-bezier(0.2,0.6,0.2,1)',
      }}
    >
      <div className="skysea-stickybar-info" style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 9,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              fontWeight: 600,
            }}
          >
            Sky to Sea Bundle
          </div>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              color: 'var(--cream)',
              marginTop: 3,
            }}
          >
            from <strong style={{ color: 'var(--gold-light)' }}>${BUNDLE_PRICE}</strong> pp
            <span
              className="skysea-stickybar-save"
              style={{ color: 'rgba(245,240,232,0.5)', marginLeft: 10 }}
            >
              save ${SAVING}
            </span>
          </div>
        </div>
      </div>
      <a href="#book" className="btn btn-primary btn-sm">
        Book Now
      </a>
      <style>{`@media (max-width:768px){.skysea-stickybar{padding:10px 16px !important}.skysea-stickybar-save{display:none !important}}`}</style>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function CampaignSkyToSea() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [videoReady, setVideoReady] = useState(false);

  useGSAP(
    () => {
      gsap.fromTo(
        bgRef.current,
        { scale: 1.12 },
        { scale: 1, duration: 16, ease: 'none' },
      );
      gsap.from(textRef.current!.querySelectorAll('.hr'), {
        y: 30,
        opacity: 0,
        duration: 0.85,
        stagger: 0.09,
        ease: 'power2.out',
        delay: 0.2,
      });
      gsap.to(bgRef.current, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    },
    { scope: heroRef },
  );

  const STEPS = [
    {
      n: '01',
      title: 'Take flight',
      body: 'Lift off from the Gold Coast heliport for a scenic flight along the coastline with Gold Coast Helitours.',
    },
    {
      n: '02',
      title: 'Spot from the sky',
      body: 'See the first humpbacks breaching far below — a god&rsquo;s-eye view almost no one gets.',
    },
    {
      n: '03',
      title: 'Board the yacht',
      body: 'Step aboard a Boattime luxury catamaran and cruise out across the Broadwater.',
    },
    {
      n: '04',
      title: 'Meet them at sea',
      body: 'Drift right alongside the giants at the surface — close enough to hear them breathe.',
    },
  ];

  const INCLUSIONS_SKY = [
    'Scenic helicopter flight over the Gold Coast',
    'Aerial humpback spotting from the air',
    'Live commentary from an expert pilot',
    'Window seat with sweeping ocean views',
    'Departure from the Gold Coast heliport',
  ];
  const INCLUSIONS_SEA = [
    'Luxury catamaran whale-watching cruise',
    'Up-close, sea-level humpback encounters',
    'Premium open decks & climate-controlled saloon',
    'Onboard refreshments & licensed bar',
    'Professional marine crew',
  ];

  const TESTIMONIALS = [
    {
      quote:
        'Seeing the whales from the air and again from the water on the same day was unreal. Hands-down the best thing we did on the Gold Coast.',
      name: 'Hannah & Marcus',
      detail: 'Sky to Sea · Melbourne',
    },
    {
      quote:
        'The flight was breathtaking and the yacht was pure luxury. Two ways to experience the same whales — worth every cent.',
      name: 'David L.',
      detail: 'Sky to Sea · Sydney',
    },
    {
      quote:
        'Faultless from the heliport to the harbour. Both crews made it feel seamless and genuinely special.',
      name: 'Priya R.',
      detail: 'Sky to Sea · Brisbane',
    },
  ];

  const FAQS = [
    {
      q: 'When can I do the Sky to Sea experience?',
      a: 'Humpback whale season on the Gold Coast runs from June to November, when thousands of whales migrate past the coastline. Departures run daily through the season, weather permitting.',
    },
    {
      q: 'What if we don’t see any whales?',
      a: 'In peak season sightings are extremely common. If your cruise doesn’t spot a whale, we’ll have you back out on another cruise free of charge under our sighting guarantee.',
    },
    {
      q: 'Do the helicopter and cruise happen on the same day?',
      a: 'Yes — the bundle is designed as one seamless half-day: your scenic flight with Gold Coast Helitours, then your luxury cruise with Boattime. Exact timings are confirmed at booking.',
    },
    {
      q: 'Is it suitable for kids and non-flyers?',
      a: 'Both experiences are family-friendly. If anyone in your group prefers to skip the flight, talk to us — we can tailor the package for your group.',
    },
    {
      q: 'How do I secure my seats?',
      a: 'Book online for instant confirmation, or enquire and our team will hold a spot for you. Seats per departure are strictly limited, so early booking is recommended.',
    },
  ];

  const ctaBlock = (
    label: string,
    style?: React.CSSProperties,
  ) => (
    <a href="#book" className="btn btn-primary" style={style}>
      {label}
    </a>
  );

  return (
    <>
      <Script
        src="https://boattimeyachtcharters.rezdy.com/pluginJs"
        strategy="lazyOnload"
      />
      <Nav />
      <main>
        {/* ── Hero (helicopter video) ── */}
        <section
          ref={heroRef}
          className="relative overflow-hidden"
          style={{
            minHeight: '100vh',
            background: 'var(--navy)',
            display: 'flex',
            alignItems: 'flex-end',
          }}
        >
          <div
            ref={bgRef}
            className="absolute inset-0 will-change-transform"
            style={{ inset: 0 }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onPlaying={() => setVideoReady(true)}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                background: 'var(--navy)',
                opacity: videoReady ? 1 : 0,
                transition: 'opacity 0.7s ease',
              }}
            >
              <source src="/gch-hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.5) 55%, rgba(10,22,40,0.2) 100%), linear-gradient(to top, rgba(10,22,40,0.96) 0%, rgba(10,22,40,0.04) 52%)',
            }}
          />

          <div
            ref={textRef}
            className="relative z-10 w-full cruise-hero-content"
            style={{
              paddingLeft: 80,
              paddingRight: 48,
              paddingTop: 120,
              paddingBottom: 128,
              maxWidth: 1240,
            }}
          >
            <div className="hr" style={{ marginBottom: 28 }}>
              <BrandLockup />
            </div>
            <div className="hr section-eyebrow" style={{ marginBottom: 22 }}>
              GOLD COAST PARTNERSHIP · WHALE SEASON IS HERE
            </div>
            <h1
              className="hr"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(42px, 6vw, 84px)',
                lineHeight: 1.0,
                letterSpacing: '-0.02em',
                color: 'var(--cream)',
                marginBottom: 22,
                maxWidth: 840,
                textWrap: 'balance',
              }}
            >
              See the whales from the{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold-light)', whiteSpace: 'nowrap' }}>
                sky.
              </em>{' '}
              Then meet them at{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold-light)', whiteSpace: 'nowrap' }}>
                sea.
              </em>
            </h1>
            <p
              className="hr"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(15px, 2vw, 19px)',
                color: 'rgba(245,240,232,0.82)',
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: 560,
                marginBottom: 30,
              }}
            >
              One unforgettable day. A scenic helicopter flight and a luxury
              whale-watching cruise — two ways to witness one of nature&rsquo;s
              greatest journeys, bundled into a single Gold Coast experience.
            </p>

            {/* inline social proof + price */}
            <div
              className="hr"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 22,
                flexWrap: 'wrap',
                marginBottom: 34,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Stars />
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 12,
                    color: 'rgba(245,240,232,0.75)',
                    letterSpacing: '0.04em',
                  }}
                >
                  4.9 from 2,600+ guests
                </span>
              </div>
              <span style={{ color: 'rgba(201,168,76,0.4)' }}>|</span>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 12,
                  color: 'rgba(245,240,232,0.75)',
                  letterSpacing: '0.04em',
                }}
              >
                Bundle from{' '}
                <strong style={{ color: 'var(--gold-light)' }}>
                  ${BUNDLE_PRICE}
                </strong>{' '}
                pp ·{' '}
                <span style={{ textDecoration: 'line-through', opacity: 0.5 }}>
                  ${SEPARATE_TOTAL}
                </span>{' '}
                separately
              </div>
            </div>

            <div
              className="hr"
              style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
            >
              <a href="#book" className="btn btn-primary">
                Book the Bundle
              </a>
              <a href="#experience" className="btn btn-ghost">
                See What&rsquo;s Included
              </a>
            </div>
          </div>

          {/* Hero info bar */}
          <div className="hero-infobar">
            {[
              { label: 'Season', value: 'Jun – Nov' },
              { label: 'Duration', value: 'Half day', em: 'sky + sea' },
              { label: 'Departs', value: 'Gold Coast' },
              { label: 'Seats', value: 'Limited', em: 'per flight' },
            ].map((c) => (
              <div key={c.label} className="hero-infobar-cell">
                <div className="hero-infobar-label">{c.label}</div>
                <div className="hero-infobar-value">
                  {c.value} {c.em && <em>· {c.em}</em>}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Urgency marquee ── */}
        <UrgencyStrip />

        {/* ── The promise ── */}
        <section
          className="cruise-section"
          style={{
            background: 'var(--navy)',
            padding: '104px 80px',
          }}
        >
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <SectionHead
              eyebrow="ONE DAY · TWO PERSPECTIVES"
              title={
                <>
                  Most people see whales once.{' '}
                  <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
                    You&rsquo;ll see them twice.
                  </em>
                </>
              }
              sub="Every winter, thousands of humpbacks migrate past the Gold Coast. We&rsquo;ve teamed up with Gold Coast Helitours so you can witness it twice in one day — once from the sky, once from the sea."
            />

            <div
              className="stats-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 2,
                marginTop: 56,
                background: 'rgba(201,168,76,0.16)',
                border: '1px solid rgba(201,168,76,0.18)',
              }}
            >
              {[
                { num: '2', label: 'Experiences · one day' },
                { num: '30+', label: 'Years of flight' },
                { num: '2,600+', label: 'Five-star guests' },
                { num: `$${SAVING}`, label: 'Saved per person' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="stat-item"
                  style={{
                    background: 'var(--navy)',
                    padding: '42px 24px',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 300,
                      fontSize: 'clamp(38px, 5vw, 64px)',
                      color: 'var(--gold)',
                      lineHeight: 1,
                      marginBottom: 12,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 10,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(245,240,232,0.6)',
                      fontWeight: 600,
                      lineHeight: 1.5,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Experience ── */}
        <section
          id="experience"
          className="cruise-section"
          style={{
            background: 'var(--navy-mid)',
            padding: '104px 80px',
            borderTop: '1px solid rgba(201,168,76,0.08)',
          }}
        >
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <SectionHead
              eyebrow="THE EXPERIENCE"
              title={
                <>
                  Your day, from{' '}
                  <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
                    above & below
                  </em>
                </>
              }
            />

            <div
              className="cruise-overview-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 24,
                marginTop: 56,
              }}
            >
              <ExperienceCard
                kicker="The Sky"
                operator="Gold Coast Helitours"
                title="Scenic whale flight"
                body="Lift off for a scenic flight along the Gold Coast coastline. From hundreds of feet up, watch for the tell-tale spouts and breaches of humpbacks tracing their migration — a view almost no one ever gets."
                image="/gch-heli.jpg"
                icon={<HeliIcon size={26} />}
              />
              <ExperienceCard
                kicker="The Sea"
                operator="Boattime Yacht Charters"
                title="Luxury whale cruise"
                body="Then trade altitude for intimacy. Board a Boattime luxury catamaran and cruise out to meet the whales at the surface — close enough to hear them breathe — with refreshments in hand and the skyline behind you."
                image="/luxury-whale.jpg"
                icon={<WhaleIcon size={26} />}
              />
            </div>

            {/* How it works */}
            <div style={{ marginTop: 80 }}>
              <div
                className="section-eyebrow"
                style={{ justifyContent: 'center', marginBottom: 44 }}
              >
                HOW YOUR DAY UNFOLDS
              </div>
              <div
                className="timeline-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: 2,
                  background: 'rgba(201,168,76,0.1)',
                  border: '1px solid rgba(201,168,76,0.14)',
                }}
              >
                {STEPS.map((s) => (
                  <div
                    key={s.n}
                    style={{ background: 'var(--navy)', padding: '38px 30px' }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 300,
                        fontSize: 40,
                        color: 'var(--gold)',
                        lineHeight: 1,
                        marginBottom: 18,
                      }}
                    >
                      {s.n}
                    </div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 400,
                        fontSize: 21,
                        color: 'var(--cream)',
                        marginBottom: 12,
                      }}
                    >
                      {s.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 12.5,
                        color: 'rgba(245,240,232,0.62)',
                        lineHeight: 1.75,
                        fontWeight: 300,
                      }}
                      dangerouslySetInnerHTML={{ __html: s.body }}
                    />
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center', marginTop: 48 }}>
                {ctaBlock('Reserve My Day')}
              </div>
            </div>
          </div>
        </section>

        {/* ── Value stack / savings ── */}
        <section
          className="cruise-section"
          style={{
            background: 'var(--navy)',
            padding: '104px 80px',
            borderTop: '1px solid rgba(201,168,76,0.08)',
          }}
        >
          <div style={{ maxWidth: 1080, margin: '0 auto' }}>
            <SectionHead
              eyebrow="THE BUNDLE"
              title={
                <>
                  Two premium experiences.{' '}
                  <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
                    One smart price.
                  </em>
                </>
              }
            />

            <div
              className="cruise-overview-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.1fr 0.9fr',
                gap: 24,
                marginTop: 56,
                alignItems: 'stretch',
              }}
            >
              {/* Inclusions */}
              <div
                style={{
                  background: 'var(--navy-mid)',
                  border: '1px solid rgba(201,168,76,0.14)',
                  padding: '44px 44px 48px',
                }}
              >
                <div
                  className="cruise-page-split"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0 40px',
                  }}
                >
                  {[
                    { head: 'In the air', icon: <HeliIcon size={22} />, items: INCLUSIONS_SKY },
                    { head: 'On the water', icon: <WhaleIcon size={22} />, items: INCLUSIONS_SEA },
                  ].map((col) => (
                    <div key={col.head}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          paddingBottom: 16,
                          marginBottom: 16,
                          borderBottom: '1px solid rgba(201,168,76,0.16)',
                        }}
                      >
                        {col.icon}
                        <span
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 400,
                            fontSize: 19,
                            color: 'var(--cream)',
                          }}
                        >
                          {col.head}
                        </span>
                      </div>
                      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                        {col.items.map((it) => (
                          <li
                            key={it}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 10,
                              padding: '8px 0',
                            }}
                          >
                            <Tick />
                            <span
                              style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: 13,
                                color: 'rgba(245,240,232,0.76)',
                                lineHeight: 1.55,
                              }}
                            >
                              {it}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price card */}
              <div
                style={{
                  background: 'var(--navy-mid)',
                  border: '1px solid var(--gold)',
                  padding: '44px 40px 46px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 10,
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    color: 'var(--gold)',
                    fontWeight: 600,
                    marginBottom: 22,
                  }}
                >
                  Sky to Sea Bundle
                </div>

                {[
                  { label: 'Scenic helicopter flight', val: `$${HELI_PRICE}` },
                  { label: 'Luxury whale cruise', val: `$${CRUISE_PRICE}` },
                ].map((r) => (
                  <div
                    key={r.label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      padding: '9px 0',
                      borderBottom: '1px solid rgba(245,240,232,0.06)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 13,
                        color: 'rgba(245,240,232,0.7)',
                      }}
                    >
                      {r.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 13,
                        color: 'rgba(245,240,232,0.5)',
                        textDecoration: 'line-through',
                      }}
                    >
                      {r.val}
                    </span>
                  </div>
                ))}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    padding: '12px 0 6px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 12,
                      color: 'rgba(245,240,232,0.55)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    Booked separately
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 15,
                      color: 'rgba(245,240,232,0.55)',
                      textDecoration: 'line-through',
                    }}
                  >
                    ${SEPARATE_TOTAL}
                  </span>
                </div>

                <div style={{ margin: '20px 0 8px' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 9,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      fontWeight: 600,
                      marginBottom: 6,
                    }}
                  >
                    Bundle price · per person
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 300,
                        fontSize: 'clamp(48px, 6vw, 64px)',
                        color: 'var(--cream)',
                        lineHeight: 1,
                      }}
                    >
                      ${BUNDLE_PRICE}
                    </span>
                    <span
                      className="hero-gold-tag"
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 10,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        padding: '5px 12px',
                      }}
                    >
                      Save ${SAVING}
                    </span>
                  </div>
                </div>

                {ctaBlock('Book the Bundle', { width: '100%', marginTop: 22 })}
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 10.5,
                    color: 'rgba(245,240,232,0.4)',
                    lineHeight: 1.6,
                    marginTop: 16,
                    textAlign: 'center',
                  }}
                >
                  Indicative pricing — final figures confirmed with Gold Coast
                  Helitours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Trust band (risk reversal + reassurance) ── */}
        <section
          className="cruise-section"
          style={{
            background: 'var(--navy-mid)',
            padding: '92px 80px',
            borderTop: '1px solid rgba(201,168,76,0.08)',
          }}
        >
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <SectionHead
              eyebrow="BOOK WITH CONFIDENCE"
              title={
                <>
                  No catch.{' '}
                  <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
                    Just whales.
                  </em>
                </>
              }
            />
            <div
              className="cruise-3col-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 2,
                marginTop: 52,
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.14)',
              }}
            >
              {[
                {
                  icon: <WhaleIcon size={28} />,
                  title: 'Sighting guarantee',
                  body: 'Don’t spot a humpback on your cruise? We’ll have you back out again — completely free.',
                },
                {
                  icon: <BadgeCheckIcon />,
                  title: 'Instant confirmation',
                  body: 'Book online in minutes and your seats in the sky and on the sea are locked in straight away.',
                },
                {
                  icon: (
                    <div style={{ paddingTop: 4 }}>
                      <Stars size={17} />
                    </div>
                  ),
                  title: 'Rated five stars',
                  body: 'Thousands of five-star reviews across both Boattime and Gold Coast Helitours.',
                },
              ].map((c) => (
                <div
                  key={c.title}
                  style={{ background: 'var(--navy)', padding: '46px 40px 50px' }}
                >
                  <div style={{ marginBottom: 22, minHeight: 28 }}>{c.icon}</div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 400,
                      fontSize: 24,
                      color: 'var(--cream)',
                      marginBottom: 14,
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13.5,
                      color: 'rgba(245,240,232,0.68)',
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Social proof — star blocks ── */}
        <section
          className="cruise-section"
          style={{
            background: 'var(--navy)',
            padding: '80px 40px 24px',
            borderTop: '1px solid rgba(201,168,76,0.08)',
          }}
        >
          <SectionHead
            eyebrow="LOVED BY GUESTS"
            title={
              <>
                Rated{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
                  five stars
                </em>{' '}
                on both sides
              </>
            }
          />
          <div
            style={{
              maxWidth: 760,
              margin: '48px auto 0',
              display: 'flex',
              justifyContent: 'center',
              gap: 80,
              flexWrap: 'wrap',
            }}
          >
            {[
              { name: 'Boattime Yacht Charters', rating: '5.0 Stars · 2,047 Reviews', net: 'fb' },
              { name: 'Gold Coast Helitours', rating: '4.9 Stars · 600+ Reviews', net: 'google' },
            ].map((b) => (
              <div key={b.name} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                {b.net === 'fb' ? (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                ) : (
                  <svg width="36" height="36" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                )}
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 12,
                      color: 'var(--cream)',
                      fontWeight: 600,
                      marginBottom: 4,
                    }}
                  >
                    {b.name}
                  </div>
                  <Stars />
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 10,
                      color: 'rgba(245,240,232,0.55)',
                      marginTop: 3,
                      letterSpacing: '0.05em',
                    }}
                  >
                    {b.rating}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section
          className="cruise-section"
          style={{ background: 'var(--navy)', padding: '40px 80px 104px' }}
        >
          <div style={{ maxWidth: 1180, margin: '0 auto' }}>
            <div
              className="cruise-3col-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 24,
              }}
            >
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  style={{
                    background: 'var(--navy-mid)',
                    border: '1px solid rgba(201,168,76,0.12)',
                    padding: '36px 34px 40px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ marginBottom: 20 }}>
                    <Stars />
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 300,
                      fontSize: 19,
                      lineHeight: 1.5,
                      color: 'var(--cream)',
                      letterSpacing: '-0.01em',
                      marginBottom: 28,
                      flex: 1,
                    }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 12,
                      color: 'var(--cream)',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 9.5,
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      fontWeight: 500,
                      marginTop: 6,
                    }}
                  >
                    {t.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ (objection handling) ── */}
        <section
          className="cruise-section"
          style={{
            background: 'var(--navy-mid)',
            padding: '104px 80px',
            borderTop: '1px solid rgba(201,168,76,0.08)',
          }}
        >
          <div
            className="cruise-itinerary-grid"
            style={{
              maxWidth: 1080,
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: '0.8fr 1.2fr',
              gap: 64,
              alignItems: 'start',
            }}
          >
            <div>
              <SectionHead
                align="left"
                eyebrow="GOOD TO KNOW"
                title={
                  <>
                    Questions,{' '}
                    <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
                      answered
                    </em>
                  </>
                }
              />
              <div style={{ marginTop: 28 }}>{ctaBlock('Book Now')}</div>
            </div>

            <div>
              {FAQS.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div
                    key={f.q}
                    style={{ borderBottom: '1px solid rgba(201,168,76,0.12)' }}
                  >
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 20,
                        padding: '22px 0',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontWeight: 400,
                          fontSize: 'clamp(18px, 2.2vw, 23px)',
                          color: open ? 'var(--gold-light)' : 'var(--cream)',
                          lineHeight: 1.25,
                          transition: 'color 0.2s',
                        }}
                      >
                        {f.q}
                      </span>
                      <span
                        style={{
                          flexShrink: 0,
                          color: 'var(--gold)',
                          fontSize: 22,
                          fontWeight: 300,
                          transform: open ? 'rotate(45deg)' : 'rotate(0)',
                          transition: 'transform 0.25s',
                          lineHeight: 1,
                        }}
                      >
                        +
                      </span>
                    </button>
                    <div
                      style={{
                        maxHeight: open ? 240 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 0.35s ease, opacity 0.25s',
                        opacity: open ? 1 : 0,
                      }}
                    >
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 14,
                          color: 'rgba(245,240,232,0.7)',
                          lineHeight: 1.8,
                          fontWeight: 300,
                          padding: '0 0 24px',
                          maxWidth: 580,
                        }}
                      >
                        {f.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Closing urgency band ── */}
        <section
          className="cta-band"
          style={{
            position: 'relative',
            padding: '120px 40px',
            textAlign: 'center',
            overflow: 'hidden',
            borderTop: '1px solid rgba(201,168,76,0.1)',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/gch-heli.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(10,22,40,0.86), rgba(6,14,28,0.92))',
            }}
          />
          <div
            className="cta-band-content"
            style={{ position: 'relative', zIndex: 1, maxWidth: 760, margin: '0 auto' }}
          >
            <div
              className="section-eyebrow"
              style={{ justifyContent: 'center', marginBottom: 22 }}
            >
              WHALE SEASON · SEATS ARE LIMITED
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(36px, 5.5vw, 72px)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                color: 'var(--cream)',
                marginBottom: 24,
              }}
            >
              Don&rsquo;t watch from shore.{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>
                Be in it.
              </em>
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 16,
                color: 'rgba(245,240,232,0.78)',
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: 520,
                margin: '0 auto 36px',
              }}
            >
              The whales are here now — and there are only so many seats in the
              sky each day. Lock in your Sky to Sea experience before the season
              books out.
            </p>
            {ctaBlock('Book the Bundle')}
          </div>
        </section>

        {/* ── Book Now (Rezdy — dummy) ── */}
        <section
          id="book"
          className="cruise-section"
          style={{
            background: 'var(--navy-mid)',
            borderTop: '1px solid rgba(201,168,76,0.1)',
            padding: '100px 48px 130px',
          }}
        >
          <div style={{ maxWidth: 1000, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <div
                className="section-eyebrow"
                style={{ justifyContent: 'center', marginBottom: 18 }}
              >
                BOOK YOUR SKY TO SEA
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: 'clamp(32px, 4.5vw, 56px)',
                  lineHeight: 1.0,
                  letterSpacing: '-0.02em',
                  color: 'var(--cream)',
                  marginBottom: 16,
                }}
              >
                Reserve your{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
                  seats
                </em>
                .
              </h2>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  color: 'rgba(245,240,232,0.62)',
                  lineHeight: 1.75,
                  maxWidth: 520,
                  margin: '0 auto',
                  fontWeight: 300,
                }}
              >
                Whale season runs June to November. Limited daily departures —
                book early to secure your seat in the sky and on the sea.
              </p>
            </div>

            {/* Dummy booking widget — swap for live Rezdy embed when the
                Sky to Sea product is created in Rezdy. */}
            <div
              style={{
                border: '1px solid rgba(201,168,76,0.15)',
                background: 'rgba(255,255,255,0.02)',
                minHeight: 460,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '64px 32px',
                gap: 18,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  border: '1px solid rgba(201,168,76,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <WhaleIcon size={28} />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 10,
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  fontWeight: 600,
                }}
              >
                Rezdy booking widget · placeholder
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 13.5,
                  color: 'rgba(245,240,232,0.55)',
                  lineHeight: 1.7,
                  maxWidth: 440,
                  fontWeight: 300,
                }}
              >
                The live Sky to Sea booking widget will appear here once the
                joint product is set up in Rezdy. In the meantime, enquire below
                and we&rsquo;ll hold a spot for you.
              </p>
              <a href="/#inquiry" className="btn btn-primary" style={{ marginTop: 8 }}>
                Enquire Now
              </a>
            </div>

            {/*
              Live embed — uncomment & set the real product URL when ready:

              <div style={{ border: '1px solid rgba(201,168,76,0.15)', background: 'rgba(255,255,255,0.02)' }}>
                <iframe
                  seamless
                  width="100%"
                  height="1000px"
                  frameBorder="0"
                  className="rezdy"
                  src="https://boattimeyachtcharters.rezdy.com/PRODUCT_ID/sky-to-sea?iframe=true"
                  style={{ display: 'block' }}
                />
              </div>
            */}
          </div>
        </section>
      </main>
      <StickyBookBar />
      <Footer />
    </>
  );
}
