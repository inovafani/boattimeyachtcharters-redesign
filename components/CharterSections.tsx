'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eyebrow, ItalicEm, Button } from './Shared';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ── Style constants ───────────────────────────────────────────────────────────

export const GL: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 9,
  letterSpacing: '0.28em',
  textTransform: 'uppercase',
  color: 'var(--gold)',
  fontWeight: 600,
  marginBottom: 8,
};

// ── Types ─────────────────────────────────────────────────────────────────────

export interface CharterPackage {
  title: string;
  time?: string;
  duration?: string;
  capacity?: string;
  description: string;
  highlights: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

// ── CHARTER HERO ──────────────────────────────────────────────────────────────

export function CharterHero({
  eyebrow, headline, subtext, image, ctas,
}: {
  eyebrow: string;
  headline: string;
  subtext: string;
  image: string;
  ctas: { label: string; href: string; variant?: 'primary' | 'ghost' }[];
}) {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef   = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(bgRef.current, { scale: 1.08 }, { scale: 1, duration: 14, ease: 'none' });
    gsap.from(textRef.current!.querySelectorAll('.hr'), {
      y: 30, opacity: 0, duration: 0.85, stagger: 0.1, ease: 'power2.out', delay: 0.15,
    });
    gsap.to(bgRef.current, {
      yPercent: 25, ease: 'none',
      scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
    });
  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden flex items-end"
      style={{ minHeight: '100vh', background: 'var(--navy)' }}
    >
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.6) 55%, rgba(10,22,40,0.22) 100%), linear-gradient(to top, rgba(10,22,40,0.94) 0%, rgba(10,22,40,0.08) 50%)',
        }}
      />
      <div
        ref={textRef}
        className="relative z-10 w-full cruise-hero-content"
        style={{ paddingLeft: 80, paddingRight: 48, paddingTop: 100, paddingBottom: 88, maxWidth: 1200 }}
      >
        <div className="hr section-eyebrow" style={{ marginBottom: 24 }}>{eyebrow}</div>
        <h1
          className="hr"
          style={{
            fontFamily: 'var(--font-display)', fontWeight: 300,
            fontSize: 'clamp(48px, 7vw, 92px)', lineHeight: 0.95,
            letterSpacing: '-0.02em', color: 'var(--cream)', marginBottom: 28,
          }}
        >
          {headline}
        </h1>
        <p
          className="hr"
          style={{
            fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.75,
            color: 'rgba(245,240,232,0.72)', letterSpacing: '0.03em',
            maxWidth: 560, marginBottom: 44, fontWeight: 300,
          }}
        >
          {subtext}
        </p>
        <div className="hr flex flex-wrap gap-3">
          {ctas.map((cta) => (
            <Button key={cta.label} variant={cta.variant ?? 'primary'} href={cta.href}>
              {cta.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CHARTER OVERVIEW (2-col text + image) ─────────────────────────────────────

export function CharterOverview({
  eyebrow, title, titleAccent, description, image, imageRight = true,
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string[];
  image: string;
  imageRight?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(ref.current!.querySelectorAll('.rv'), {
      y: 40, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
    });
  }, { scope: ref });

  const textCol = (
    <div>
      <div className="rv"><Eyebrow>{eyebrow}</Eyebrow></div>
      <h2
        className="rv"
        style={{
          fontFamily: 'var(--font-display)', fontWeight: 300,
          fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05, marginBottom: 32,
        }}
      >
        {title}
        {titleAccent && <><br /><ItalicEm>{titleAccent}</ItalicEm></>}
      </h2>
      {description.map((p, i) => (
        <p
          key={i}
          className="rv"
          style={{
            fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 300,
            color: 'rgba(245,240,232,0.78)', lineHeight: 1.85, marginBottom: 16,
          }}
        >
          {p}
        </p>
      ))}
    </div>
  );

  const imgCol = (
    <div className="rv" style={{ position: 'relative' }}>
      <div
        style={{
          aspectRatio: '4/5',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: '1px solid rgba(201,168,76,0.15)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 24,
          bottom: -24,
          ...(imageRight
            ? { right: -24, left: 24 }
            : { left: -24, right: 24 }),
          border: '1px solid rgba(201,168,76,0.1)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />
    </div>
  );

  return (
    <section ref={ref} className="cruise-section" style={{ padding: '100px 80px', background: 'var(--navy)' }}>
      <div
        className="cruise-overview-grid"
        style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
        }}
      >
        {imageRight ? <>{textCol}{imgCol}</> : <>{imgCol}{textCol}</>}
      </div>
    </section>
  );
}

// ── CHARTER PACKAGES ──────────────────────────────────────────────────────────

export function CharterPackages({ packages }: { packages: CharterPackage[] }) {
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(ref.current!.querySelectorAll('.pk'), {
      y: 40, opacity: 0, duration: 0.85, stagger: 0.12, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="cruise-section" style={{ padding: '100px 80px', background: 'var(--navy-mid)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <Eyebrow>Our Packages</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05,
            }}
          >
            Tailored to your <ItalicEm>occasion</ItalicEm>.
          </h2>
        </div>
        <div
          className="cruise-inclusions-grid"
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 2, background: 'rgba(201,168,76,0.08)',
          }}
        >
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="pk"
              style={{
                background: 'var(--navy-mid)', padding: '44px 36px',
                display: 'flex', flexDirection: 'column',
              }}
            >
              <div style={{ ...GL, marginBottom: 12 }}>
                Package {String(i + 1).padStart(2, '0')}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)', fontStyle: 'italic',
                  fontSize: 28, color: 'var(--cream)', lineHeight: 1.1, marginBottom: 24,
                }}
              >
                {pkg.title}
              </div>
              {(pkg.time || pkg.duration || pkg.capacity) && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                  {pkg.time && (
                    <span
                      style={{
                        fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.18em',
                        textTransform: 'uppercase', color: 'var(--gold)',
                        border: '1px solid rgba(201,168,76,0.3)', padding: '5px 12px',
                      }}
                    >
                      Departs {pkg.time}
                    </span>
                  )}
                  {pkg.duration && (
                    <span
                      style={{
                        fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.18em',
                        textTransform: 'uppercase', color: 'rgba(245,240,232,0.6)',
                        border: '1px solid rgba(245,240,232,0.15)', padding: '5px 12px',
                      }}
                    >
                      {pkg.duration}
                    </span>
                  )}
                  {pkg.capacity && (
                    <span
                      style={{
                        fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.18em',
                        textTransform: 'uppercase', color: 'rgba(245,240,232,0.6)',
                        border: '1px solid rgba(245,240,232,0.15)', padding: '5px 12px',
                      }}
                    >
                      {pkg.capacity}
                    </span>
                  )}
                </div>
              )}
              <p
                style={{
                  fontFamily: 'var(--font-body)', fontSize: 14,
                  color: 'rgba(245,240,232,0.65)', lineHeight: 1.75, marginBottom: 28,
                }}
              >
                {pkg.description}
              </p>
              <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(201,168,76,0.15)', paddingTop: 24 }}>
                {pkg.highlights.map((h, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                    <div
                      style={{
                        width: 3, height: 3, background: 'var(--gold)',
                        flexShrink: 0, borderRadius: '50%',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-body)', fontSize: 13,
                        color: 'rgba(245,240,232,0.72)', letterSpacing: '0.04em',
                      }}
                    >
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── VESSEL CARDS ──────────────────────────────────────────────────────────────

export function VesselCards() {
  const VESSELS = [
    {
      name: 'Mermaid Spirit',
      tagline: 'Tri-deck catamaran',
      specs: ['100 day guests', '22 overnight guests', '3 decks'],
      description:
        'A stunning tri-deck catamaran offering three distinct levels of entertainment. Equipped with jet skis, kayaks, scuba gear, a stinger-proof pool, and paddle boards.',
      href: '/mermaid-spirit-gold-coast',
      img: 'https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=800&q=80',
    },
    {
      name: 'Sun Goddess',
      tagline: '110ft luxury superyacht',
      specs: ['135 day guests', 'Dual bars', 'Watersports deck'],
      description:
        "Gold Coast's premier luxury superyacht. Spacious decks, dual bars, state-of-the-art sound, and fully customisable routes for any occasion.",
      href: '/sun-goddess-gold-coast',
      img: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=800&q=80',
    },
  ];

  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(ref.current!.querySelectorAll('.vc'), {
      y: 40, opacity: 0, duration: 0.9, stagger: 0.15, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="cruise-section" style={{ padding: '100px 80px', background: 'var(--navy)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <Eyebrow>The Fleet</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05,
            }}
          >
            Two world-class <ItalicEm>vessels</ItalicEm>.
          </h2>
        </div>
        <div
          className="cruise-overview-grid"
          style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 2, background: 'rgba(201,168,76,0.08)',
          }}
        >
          {VESSELS.map((v) => (
            <div
              key={v.name}
              className="vc"
              style={{ background: 'var(--navy)', display: 'flex', flexDirection: 'column' }}
            >
              <div
                style={{
                  aspectRatio: '16/9',
                  backgroundImage: `url(${v.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div
                style={{
                  padding: '40px 36px', flex: 1,
                  display: 'flex', flexDirection: 'column',
                }}
              >
                <div style={{ ...GL, marginBottom: 12 }}>{v.tagline}</div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)', fontStyle: 'italic',
                    fontSize: 32, color: 'var(--cream)', lineHeight: 1.1, marginBottom: 20,
                  }}
                >
                  {v.name}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                  {v.specs.map((s) => (
                    <span
                      key={s}
                      style={{
                        fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.18em',
                        textTransform: 'uppercase', color: 'var(--gold)',
                        border: '1px solid rgba(201,168,76,0.3)', padding: '5px 12px',
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)', fontSize: 14,
                    color: 'rgba(245,240,232,0.65)', lineHeight: 1.75, marginBottom: 28,
                  }}
                >
                  {v.description}
                </p>
                <a
                  href={v.href}
                  style={{
                    marginTop: 'auto', fontFamily: 'var(--font-body)', fontSize: 10,
                    letterSpacing: '0.28em', textTransform: 'uppercase',
                    color: 'var(--gold)', textDecoration: 'none', fontWeight: 600,
                    display: 'flex', alignItems: 'center', gap: 8,
                    borderTop: '1px solid rgba(201,168,76,0.15)', paddingTop: 24,
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.7'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                >
                  View vessel →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── INCLUSIONS + EXTRAS ───────────────────────────────────────────────────────

export function CharterInclusionsExtras() {
  const INCLUDED = [
    { label: 'Bars', detail: 'Two fully stocked bars per vessel, with bar-tab and consumption options.' },
    { label: 'Entertainment Areas', detail: 'Dedicated spaces for dancing, mingling and dining across each deck.' },
    { label: 'Captain & Crew', detail: 'Professional captain and experienced crew for your entire charter.' },
    { label: 'Audio System', detail: 'Premium sound throughout — connect your playlist or bring a DJ.' },
    { label: 'Flat Screen TVs', detail: 'Multiple screens for presentations, slideshows or entertainment.' },
    { label: 'Watersports', detail: 'Canoes, stand-up paddleboards, stinger-proof pool, banana boats.' },
  ];

  const EXTRAS = [
    { label: 'Gourmet Catering', detail: 'Canapés, platters, grazing boards, gourmet BBQ, buffet and fine dining via Private Chefs of Brisbane.' },
    { label: 'Bar Packages', detail: 'Custom drinks packages with premium spirits, wines, beer and cocktails.' },
    { label: 'DJ or Live Band', detail: 'Professional entertainment matched to the vibe of your event.' },
    { label: 'Photography & Film', detail: 'Professional photographers and videographers to capture every moment.' },
  ];

  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(ref.current!.querySelectorAll('.ie'), {
      y: 30, opacity: 0, duration: 0.7, stagger: 0.07, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="cruise-section" style={{ padding: '100px 80px', background: 'var(--navy-mid)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          className="cruise-overview-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80 }}
        >
          <div>
            <Eyebrow>What&rsquo;s Included</Eyebrow>
            <h2
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 300,
                fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1, marginBottom: 48,
              }}
            >
              Everything you <ItalicEm>need on board</ItalicEm>.
            </h2>
            <div style={{ borderTop: '1px solid rgba(201,168,76,0.12)' }}>
              {INCLUDED.map((item, i) => (
                <div
                  key={i}
                  className="ie"
                  style={{ padding: '20px 0', borderBottom: '1px solid rgba(201,168,76,0.12)' }}
                >
                  <div style={{ ...GL, marginBottom: 6 }}>{item.label}</div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)', fontSize: 13,
                      color: 'rgba(245,240,232,0.62)', lineHeight: 1.7,
                    }}
                  >
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow>Optional Extras</Eyebrow>
            <h2
              style={{
                fontFamily: 'var(--font-display)', fontWeight: 300,
                fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.1, marginBottom: 48,
              }}
            >
              Elevate your <ItalicEm>experience</ItalicEm>.
            </h2>
            <div style={{ borderTop: '1px solid rgba(201,168,76,0.12)' }}>
              {EXTRAS.map((item, i) => (
                <div
                  key={i}
                  className="ie"
                  style={{ padding: '20px 0', borderBottom: '1px solid rgba(201,168,76,0.12)' }}
                >
                  <div style={{ ...GL, marginBottom: 6 }}>{item.label}</div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)', fontSize: 13,
                      color: 'rgba(245,240,232,0.62)', lineHeight: 1.7,
                    }}
                  >
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── DESTINATIONS ──────────────────────────────────────────────────────────────

export function CharterDestinations() {
  const REGIONS = [
    {
      name: 'Gold Coast',
      places: ['Wave Break Island', 'Sanctuary Cove', 'Jumpinpin', 'Scottish Prince Wreck'],
    },
    {
      name: 'Moreton Bay',
      places: ['Brisbane River', 'Tangalooma', 'Moreton Island', 'Stradbroke Island'],
    },
  ];

  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(ref.current!.querySelectorAll('.dt'), {
      y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="cruise-section" style={{ padding: '100px 80px', background: 'var(--navy)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <Eyebrow>Destinations</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05,
            }}
          >
            Your charter, <ItalicEm>your route</ItalicEm>.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(245,240,232,0.6)',
              lineHeight: 1.75, maxWidth: 560, margin: '20px auto 0', fontWeight: 300,
            }}
          >
            Departing from the Muriel Henchman Public Pontoon, Gold Coast — 10 minutes from
            Surfers Paradise. Free parking available at the pontoon.
          </p>
        </div>
        <div
          className="cruise-overview-grid"
          style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr',
            gap: 2, background: 'rgba(201,168,76,0.08)',
          }}
        >
          {REGIONS.map((region) => (
            <div key={region.name} className="dt" style={{ background: 'var(--navy)', padding: '52px 48px' }}>
              <div style={{ ...GL, marginBottom: 20 }}>{region.name}</div>
              <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
                {region.places.map((place) => (
                  <div
                    key={place}
                    style={{
                      padding: '18px 0', borderBottom: '1px solid rgba(201,168,76,0.1)',
                      fontFamily: 'var(--font-display)', fontStyle: 'italic',
                      fontSize: 24, color: 'var(--cream)',
                      display: 'flex', alignItems: 'center', gap: 12,
                    }}
                  >
                    <span
                      style={{
                        width: 4, height: 4, background: 'var(--gold)',
                        borderRadius: '50%', flexShrink: 0, display: 'inline-block',
                      }}
                    />
                    {place}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────────────────────

export function CharterFAQ({ items }: { items: FaqItem[] }) {
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(ref.current!.querySelectorAll('.fq'), {
      y: 30, opacity: 0, duration: 0.75, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="cruise-section" style={{ padding: '100px 80px', background: 'var(--navy-mid)' }}>
      <div style={{ maxWidth: 880, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <Eyebrow>Frequently Asked</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05,
            }}
          >
            Good to <ItalicEm>know</ItalicEm>.
          </h2>
        </div>
        <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
          {items.map((item, i) => (
            <div
              key={i}
              className="fq"
              style={{ padding: '32px 0', borderBottom: '1px solid rgba(201,168,76,0.12)' }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-body)', fontSize: 12, letterSpacing: '0.14em',
                  textTransform: 'uppercase', color: 'var(--cream)', fontWeight: 600, marginBottom: 12,
                }}
              >
                {item.q}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)', fontSize: 14,
                  color: 'rgba(245,240,232,0.65)', lineHeight: 1.8,
                }}
              >
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CHARTER BOOKING CTA ───────────────────────────────────────────────────────

export function CharterBookingCTA({
  heading, headingAccent, subtext,
}: {
  heading?: string;
  headingAccent?: string;
  subtext?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(ref.current!.querySelectorAll('.bc'), {
      y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
    });
  }, { scope: ref });

  return (
    <section
      ref={ref}
      className="cruise-section"
      style={{
        padding: '120px 80px', background: 'var(--navy)',
        textAlign: 'center', borderTop: '1px solid rgba(201,168,76,0.12)',
      }}
    >
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        <div className="bc"><Eyebrow>Get in Touch</Eyebrow></div>
        <h2
          className="bc"
          style={{
            fontFamily: 'var(--font-display)', fontWeight: 300,
            fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.05, marginBottom: 24,
          }}
        >
          {heading ?? 'Ready to plan your'}{' '}
          <ItalicEm>{headingAccent ?? 'charter?'}</ItalicEm>
        </h2>
        <p
          className="bc"
          style={{
            fontFamily: 'var(--font-body)', fontSize: 15,
            color: 'rgba(245,240,232,0.62)', lineHeight: 1.8, marginBottom: 48, fontWeight: 300,
          }}
        >
          {subtext ??
            "Our team works with you to build an experience that's uniquely yours. Send an enquiry and we'll be in touch within 24 hours."}
        </p>
        <div className="bc flex justify-center gap-4 flex-wrap">
          <Button variant="primary" href="/#inquiry">Booking Enquiry</Button>
          <Button variant="ghost" href="tel:+61477667644">+61 477 667 644</Button>
        </div>
      </div>
    </section>
  );
}

// ── CORPORATE SERVICE TYPES ───────────────────────────────────────────────────

export function CorporateServiceTypes() {
  const TYPES = [
    'Corporate Retreats',
    'Team Building Activities',
    'Client Entertainment',
    'Conference Venues',
    'Meeting Spaces',
    'Networking Events',
    'Product Launches',
    'Award Ceremonies',
    'Charity Events',
    'CSR Events',
  ];

  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(ref.current!.querySelectorAll('.st'), {
      y: 20, opacity: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
    });
  }, { scope: ref });

  return (
    <section
      ref={ref}
      className="cruise-section"
      style={{
        padding: '80px 80px', background: 'var(--navy)',
        borderTop: '1px solid rgba(201,168,76,0.1)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <Eyebrow>Event Types</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(28px, 3.5vw, 44px)', lineHeight: 1.05,
            }}
          >
            Every occasion, <ItalicEm>elevated</ItalicEm>.
          </h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          {TYPES.map((type) => (
            <div
              key={type}
              className="st"
              style={{
                fontFamily: 'var(--font-body)', fontSize: 11, letterSpacing: '0.2em',
                textTransform: 'uppercase', color: 'var(--cream)',
                border: '1px solid rgba(201,168,76,0.25)', padding: '14px 28px', fontWeight: 400,
              }}
            >
              {type}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── WEDDING ADDITIONAL SERVICES ───────────────────────────────────────────────

export function WeddingAdditionalServices() {
  const SERVICES = [
    {
      label: 'Photography & Videography',
      detail:
        'Professional photographers and videographers capture every precious moment on the water.',
    },
    {
      label: 'DJ or Live Band',
      detail:
        'Entertainment tailored to your style — from a jazz quartet to DJ sets that keep the dance floor alive.',
    },
    {
      label: 'Floral Arrangements',
      detail:
        'Curated floral design to complement the setting — from the ceremony arch to table centrepieces.',
    },
    {
      label: 'Wedding Planning',
      detail:
        'Our experienced event team coordinates every detail so you can focus on enjoying your day.',
    },
  ];

  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(ref.current!.querySelectorAll('.ws'), {
      y: 30, opacity: 0, duration: 0.75, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="cruise-section" style={{ padding: '100px 80px', background: 'var(--navy)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <Eyebrow>Additional Services</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05,
            }}
          >
            Every detail, <ItalicEm>taken care of</ItalicEm>.
          </h2>
        </div>
        <div
          className="cruise-inclusions-grid"
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 2, background: 'rgba(201,168,76,0.08)',
          }}
        >
          {SERVICES.map((s) => (
            <div key={s.label} className="ws" style={{ background: 'var(--navy)', padding: '44px 32px' }}>
              <div style={{ width: 32, height: 1, background: 'var(--gold)', marginBottom: 24 }} />
              <div style={{ ...GL, marginBottom: 14 }}>{s.label}</div>
              <div
                style={{
                  fontFamily: 'var(--font-body)', fontSize: 13,
                  color: 'rgba(245,240,232,0.62)', lineHeight: 1.75,
                }}
              >
                {s.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CATERING MENU GRID ────────────────────────────────────────────────────────

export function CateringMenuGrid() {
  const MENUS = [
    {
      label: 'Grazing Boards',
      detail:
        'Abundant boards of artisan cheeses, cured meats, seasonal fruit and house-made accompaniments. Perfect for mingling guests.',
      img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
    },
    {
      label: 'Canapés',
      detail:
        'Elegant bite-sized creations passed by our crew — crafted from the finest Australian produce by our culinary partners.',
      img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
    },
    {
      label: 'Gourmet BBQ',
      detail:
        'A relaxed yet premium feast — market fish, premium meats, salads and sides grilled to perfection on the sun deck.',
      img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80',
    },
    {
      label: 'Buffet',
      detail:
        'Generous, self-serve spreads built around Australian cuisine. Ideal for larger groups and extended charters.',
      img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    },
    {
      label: 'Fine Dining',
      detail:
        'A seated multi-course experience with matched wines — elevated, intimate, and unforgettable for your most special occasions.',
      img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
    },
    {
      label: 'Drinks Packages',
      detail:
        'Premium beverage packages tailored to your group — from sparkling on arrival to fully stocked bars with craft spirits and cocktails.',
      img: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80',
    },
  ];

  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(ref.current!.querySelectorAll('.cm'), {
      y: 40, opacity: 0, duration: 0.85, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="cruise-section" style={{ padding: '100px 80px', background: 'var(--navy)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 72 }}>
          <Eyebrow>Catering Options</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(32px, 4vw, 52px)', lineHeight: 1.05,
            }}
          >
            Cuisine crafted for <ItalicEm>the water</ItalicEm>.
          </h2>
        </div>
        <div
          className="cruise-menu-grid"
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 2, background: 'rgba(201,168,76,0.08)',
          }}
        >
          {MENUS.map((menu) => (
            <div key={menu.label} className="cm" style={{ background: 'var(--navy)', overflow: 'hidden' }}>
              <div
                style={{
                  height: 200,
                  backgroundImage: `url(${menu.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.6s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                }}
              />
              <div style={{ padding: '32px 32px 40px' }}>
                <div style={{ ...GL, marginBottom: 12 }}>{menu.label}</div>
                <div
                  style={{
                    fontFamily: 'var(--font-body)', fontSize: 14,
                    color: 'rgba(245,240,232,0.65)', lineHeight: 1.75,
                  }}
                >
                  {menu.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── CATERING CONSULTATION ─────────────────────────────────────────────────────

export function CateringConsultation() {
  const ref = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.from(ref.current!.querySelectorAll('.cc'), {
      y: 30, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
    });
  }, { scope: ref });

  return (
    <section ref={ref} className="cruise-section" style={{ padding: '100px 80px', background: 'var(--navy-mid)' }}>
      <div
        className="cruise-overview-grid"
        style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr auto', gap: 80, alignItems: 'center',
        }}
      >
        <div>
          <div className="cc"><Eyebrow>Custom Menus</Eyebrow></div>
          <h2
            className="cc"
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 300,
              fontSize: 'clamp(30px, 4vw, 48px)', lineHeight: 1.05, marginBottom: 20,
            }}
          >
            Talk to us about your <ItalicEm>catering requirements</ItalicEm>.
          </h2>
          <p
            className="cc"
            style={{
              fontFamily: 'var(--font-body)', fontSize: 15,
              color: 'rgba(245,240,232,0.65)', lineHeight: 1.8, fontWeight: 300,
            }}
          >
            Every charter is different. We work with our culinary partners to build menus that suit
            your guest count, dietary requirements, and occasion. Get in touch and we&rsquo;ll take
            care of the rest.
          </p>
        </div>
        <div className="cc" style={{ flexShrink: 0 }}>
          <Button variant="primary" href="/#inquiry">Get In Touch</Button>
        </div>
      </div>
    </section>
  );
}
