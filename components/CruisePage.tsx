'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from './Nav';
import Footer from './Footer';
import { Eyebrow, ItalicEm, Button } from './Shared';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export interface InclusionItem { title: string; detail: string }
export interface ScheduleStop  { label: string; time: string }
export interface PriceTier     { label: string; price: string; note?: string }
export interface MenuSection   { heading: string; items: string[] }

export interface CruisePageData {
  eyebrow:       string;
  title:         string;
  titleAccent?:  string;
  heroImage:     string;
  heroStats:     { label: string; value: string }[];
  description:   string[];
  overviewImage: string;
  inclusions:    InclusionItem[];
  schedule:      ScheduleStop[];
  dates:         string;
  location:      string;
  vessel:        string;
  availability?: string;
  pricing:       PriceTier[];
  menu?:         MenuSection[];
  bookingUrl:    string;
}

const LABEL: React.CSSProperties = {
  fontFamily: 'var(--font-body)',
  fontSize: 9,
  letterSpacing: '0.28em',
  textTransform: 'uppercase',
  color: 'var(--gold)',
  fontWeight: 600,
  marginBottom: 8,
};

export default function CruisePage({
  eyebrow, title, titleAccent, heroImage, heroStats,
  description, overviewImage, inclusions, schedule,
  dates, location, vessel, availability, pricing, menu, bookingUrl,
}: CruisePageData) {
  const heroBgRef    = useRef<HTMLDivElement>(null);
  const heroTextRef  = useRef<HTMLDivElement>(null);
  const heroRef      = useRef<HTMLElement>(null);
  const overviewRef  = useRef<HTMLElement>(null);
  const inclusRef    = useRef<HTMLElement>(null);
  const scheduleRef  = useRef<HTMLElement>(null);
  const pricingRef   = useRef<HTMLElement>(null);
  const menuRef      = useRef<HTMLElement>(null);
  const ctaRef       = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(heroBgRef.current, { scale: 1.08 }, { scale: 1, duration: 14, ease: 'none' });

    gsap.from(heroTextRef.current!.querySelectorAll('.hr'), {
      y: 30, opacity: 0, duration: 0.85, stagger: 0.1, ease: 'power2.out', delay: 0.15,
    });

    gsap.to(heroBgRef.current, {
      yPercent: 25, ease: 'none',
      scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true },
    });

    gsap.from(overviewRef.current!.querySelectorAll('.rv'), {
      y: 40, opacity: 0, duration: 0.9, stagger: 0.12, ease: 'power2.out',
      scrollTrigger: { trigger: overviewRef.current, start: 'top 82%', once: true },
    });

    gsap.from(inclusRef.current!.querySelectorAll('.ic'), {
      y: 30, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: inclusRef.current, start: 'top 82%', once: true },
    });

    gsap.from(scheduleRef.current, {
      y: 30, opacity: 0, duration: 0.85, ease: 'power2.out',
      scrollTrigger: { trigger: scheduleRef.current, start: 'top 82%', once: true },
    });

    gsap.from(pricingRef.current!.querySelectorAll('.pc'), {
      y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
      scrollTrigger: { trigger: pricingRef.current, start: 'top 82%', once: true },
    });

    if (menuRef.current) {
      gsap.from(menuRef.current.querySelectorAll('.mc'), {
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: menuRef.current, start: 'top 82%', once: true },
      });
    }

    gsap.from(ctaRef.current, {
      y: 30, opacity: 0, duration: 0.9, ease: 'power2.out',
      scrollTrigger: { trigger: ctaRef.current, start: 'top 88%', once: true },
    });
  });

  const detailRows = [
    { label: 'Departure Point', value: location },
    { label: 'Vessel',          value: vessel },
    { label: 'When',            value: dates },
    ...(availability ? [{ label: 'Availability', value: availability }] : []),
  ];

  return (
    <>
      <Nav />
      <main>

        {/* ── HERO ──────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative overflow-hidden flex items-center"
          style={{ minHeight: '100vh', background: 'var(--navy)' }}
        >
          <div
            ref={heroBgRef}
            className="absolute inset-0 will-change-transform"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(10,22,40,0.9) 0%, rgba(10,22,40,0.58) 55%, rgba(10,22,40,0.28) 100%), linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.08) 50%)',
            }}
          />

          <div
            ref={heroTextRef}
            className="relative z-10 w-full cruise-hero-content"
            style={{ paddingLeft: 48, paddingRight: 48, paddingTop: 100, maxWidth: 1200 }}
          >
            <div className="section-eyebrow hr" style={{ marginBottom: 24 }}>{eyebrow}</div>

            <h1
              className="hr"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(48px, 7vw, 96px)',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                color: 'var(--cream)',
                marginBottom: 36,
              }}
            >
              {title}
              {titleAccent && (
                <>
                  <br />
                  <span style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>{titleAccent}</span>
                </>
              )}
            </h1>

            <div className="hr flex flex-wrap cruise-stats-row" style={{ gap: 10, marginBottom: 44 }}>
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    padding: '12px 22px',
                    border: '1px solid rgba(201,168,76,0.38)',
                    background: 'rgba(10,22,40,0.52)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                  }}
                >
                  <div style={{ ...LABEL, marginBottom: 5 }}>{s.label}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--cream)', lineHeight: 1 }}>
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="hr flex gap-4 flex-wrap">
              <Button variant="primary" href={bookingUrl}>Book Now</Button>
              <Button variant="ghost" href="#details">View Details</Button>
            </div>
          </div>
        </section>

        {/* ── THE EXPERIENCE ───────────────────────────────── */}
        <section
          ref={overviewRef}
          className="cruise-section"
          style={{ padding: '100px 48px', background: 'var(--navy)' }}
        >
          <div
            className="cruise-overview-grid"
            style={{
              maxWidth: 1200, margin: '0 auto',
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
            }}
          >
            <div>
              <div className="rv"><Eyebrow>The Experience</Eyebrow></div>
              <h2
                className="rv"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  lineHeight: 1.05,
                  marginBottom: 32,
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
                    fontFamily: 'var(--font-body)',
                    fontSize: 15, fontWeight: 300,
                    color: 'rgba(245,240,232,0.78)',
                    lineHeight: 1.85, marginBottom: 16,
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="rv" style={{ position: 'relative' }}>
              <div
                style={{
                  aspectRatio: '4/5',
                  backgroundImage: `url(${overviewImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: '1px solid rgba(201,168,76,0.15)',
                }}
              />
              <div
                style={{
                  position: 'absolute', top: 24, right: -24, bottom: -24, left: 24,
                  border: '1px solid rgba(201,168,76,0.1)',
                  zIndex: -1, pointerEvents: 'none',
                }}
              />
            </div>
          </div>
        </section>

        {/* ── WHAT'S INCLUDED ──────────────────────────────── */}
        <section
          ref={inclusRef}
          className="cruise-section"
          style={{ padding: '100px 48px', background: 'var(--navy-mid)' }}
        >
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Eyebrow>What&rsquo;s Included</Eyebrow>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  lineHeight: 1.05,
                }}
              >
                Everything you <ItalicEm>need on board</ItalicEm>.
              </h2>
            </div>
            <div
              className="cruise-inclusions-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 2,
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.08)',
              }}
            >
              {inclusions.map((item, i) => (
                <div key={i} className="ic" style={{ padding: '40px 32px', background: 'var(--navy-mid)' }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: 40,
                      color: 'rgba(201,168,76,0.2)',
                      lineHeight: 1,
                      marginBottom: 18,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ ...LABEL }}>{item.title}</div>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13,
                      color: 'rgba(245,240,232,0.62)',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SCHEDULE & DETAILS ───────────────────────────── */}
        <section
          id="details"
          ref={scheduleRef}
          className="cruise-section"
          style={{ padding: '100px 48px', background: 'var(--navy)' }}
        >
          <div
            className="cruise-details-grid"
            style={{
              maxWidth: 1200, margin: '0 auto',
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80,
            }}
          >
            {/* Timeline */}
            <div>
              <Eyebrow>Schedule</Eyebrow>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: 'clamp(32px, 3.5vw, 48px)',
                  lineHeight: 1.05,
                  marginBottom: 48,
                }}
              >
                Departure <ItalicEm>timetable</ItalicEm>.
              </h2>
              {schedule.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 24 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 16 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: 5 }} />
                    {i < schedule.length - 1 && (
                      <div style={{ width: 1, flex: 1, background: 'rgba(201,168,76,0.2)', minHeight: 40 }} />
                    )}
                  </div>
                  <div style={{ marginBottom: 28 }}>
                    <div style={{ ...LABEL }}>{s.label}</div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 32,
                        color: 'var(--cream)',
                        lineHeight: 1,
                      }}
                    >
                      {s.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Details */}
            <div>
              <Eyebrow>Details</Eyebrow>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: 'clamp(32px, 3.5vw, 48px)',
                  lineHeight: 1.05,
                  marginBottom: 48,
                }}
              >
                Getting <ItalicEm>there</ItalicEm>.
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                {detailRows.map((d) => (
                  <div key={d.label}>
                    <div style={{ ...LABEL }}>{d.label}</div>
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 14,
                        color: 'rgba(245,240,232,0.78)',
                        lineHeight: 1.7,
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {d.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PRICING ──────────────────────────────────────── */}
        <section
          ref={pricingRef}
          className="cruise-section"
          style={{ padding: '100px 48px', background: 'var(--navy-mid)' }}
        >
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Eyebrow>Pricing</Eyebrow>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: 'clamp(32px, 4vw, 52px)',
                  lineHeight: 1.05,
                }}
              >
                Transparent <ItalicEm>pricing</ItalicEm>.
              </h2>
            </div>
            <div
              className="cruise-pricing-grid"
              style={{
                display: 'flex',
                gap: 2,
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.08)',
              }}
            >
              {pricing.map((p, i) => (
                <div
                  key={i}
                  className="pc"
                  style={{
                    flex: 1,
                    minWidth: 160,
                    padding: '48px 32px',
                    background: 'var(--navy-mid)',
                    textAlign: 'center',
                    borderRight: i < pricing.length - 1 ? '2px solid rgba(201,168,76,0.08)' : 'none',
                  }}
                >
                  <div style={{ ...LABEL, textAlign: 'center' }}>{p.label}</div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 300,
                      fontSize: 'clamp(44px, 5vw, 64px)',
                      color: 'var(--cream)',
                      lineHeight: 1,
                      margin: '16px 0 12px',
                    }}
                  >
                    {p.price}
                  </div>
                  {p.note && (
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: 11,
                        color: 'rgba(245,240,232,0.45)',
                        letterSpacing: '0.08em',
                      }}
                    >
                      {p.note}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 36 }}>
              <Button variant="primary" href={bookingUrl}>Secure Your Tickets</Button>
            </div>
          </div>
        </section>

        {/* ── FOOD MENU (optional) ─────────────────────────── */}
        {menu && (
          <section
            ref={menuRef}
            className="cruise-section"
            style={{ padding: '100px 48px', background: 'var(--navy)' }}
          >
            <div style={{ maxWidth: 1200, margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: 64 }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Eyebrow>The Menu</Eyebrow>
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 300,
                    fontSize: 'clamp(32px, 4vw, 52px)',
                    lineHeight: 1.05,
                  }}
                >
                  Flavours of <ItalicEm>Australia</ItalicEm>.
                </h2>
              </div>
              <div
                className="cruise-menu-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: `repeat(${Math.min(menu.length, 3)}, 1fr)`,
                  gap: 48,
                  paddingTop: 48,
                  borderTop: '1px solid rgba(201,168,76,0.15)',
                }}
              >
                {menu.map((section, i) => (
                  <div key={i} className="mc">
                    <div style={{ ...LABEL, marginBottom: 20 }}>{section.heading}</div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {section.items.map((item, j) => (
                        <li
                          key={j}
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: 14,
                            color: 'rgba(245,240,232,0.7)',
                            lineHeight: 1,
                            paddingBottom: 14,
                            marginBottom: 14,
                            borderBottom:
                              j < section.items.length - 1
                                ? '1px solid rgba(201,168,76,0.1)'
                                : 'none',
                          }}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── BOOKING CTA ──────────────────────────────────── */}
        <section
          ref={ctaRef}
          className="cruise-section"
          style={{
            padding: '120px 48px',
            background: 'var(--navy-mid)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(ellipse at 50% 30%, rgba(201,168,76,0.07), transparent 65%)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Eyebrow>Ready to book?</Eyebrow>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(36px, 5vw, 64px)',
                lineHeight: 1.05,
                marginBottom: 24,
              }}
            >
              Your place on the water <ItalicEm>awaits</ItalicEm>.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 14,
                color: 'rgba(245,240,232,0.6)',
                lineHeight: 1.75,
                marginBottom: 44,
                maxWidth: 460,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Secure your tickets in under two minutes. Gift vouchers available.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button variant="primary" href={bookingUrl}>Book Now</Button>
              <Button variant="ghost" href="/#inquiry">Enquire</Button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
