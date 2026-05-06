'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Nav from './Nav';
import Footer from './Footer';
import MenuFlipbook from './MenuFlipbook';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ── Queensland badge (right side of hero) ──────────────────────────────────────

function QldBadge() {
  return (
    <div style={{
      width: 148,
      height: 148,
      borderRadius: '50%',
      border: '2px solid #C9A84C',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 2,
      padding: 16,
      textAlign: 'center',
      position: 'relative',
    }}>
      {/* outer ring */}
      <div style={{
        position: 'absolute', inset: 6,
        borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.4)',
      }} />
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: 7,
        letterSpacing: '0.2em',
        color: '#C9A84C',
        textTransform: 'uppercase',
        lineHeight: 1.3,
      }}>
        RECOMMENDED BY
      </span>
      <span style={{
        fontFamily: 'Georgia, serif',
        fontStyle: 'italic',
        fontWeight: 700,
        fontSize: 36,
        color: '#C9A84C',
        lineHeight: 1,
      }}>
        Q
      </span>
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: 6,
        letterSpacing: '0.14em',
        color: '#C9A84C',
        textTransform: 'uppercase',
        lineHeight: 1.4,
      }}>
        BEST OF QUEENSLAND<br />EXPERIENCE
      </span>
      <span style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        fontSize: 8,
        color: '#C9A84C',
        letterSpacing: '0.1em',
      }}>
        2023
      </span>
    </div>
  );
}

// ── Gold anchor SVG ────────────────────────────────────────────────────────────

function AnchorSvg() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--gold)"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: 'block', margin: '0 auto' }}
    >
      <circle cx="12" cy="5" r="2.5" />
      <line x1="12" y1="7.5" x2="12" y2="19" />
      <path d="M6 12 C6 12 6 19 12 19 C18 19 18 12 18 12" />
      <line x1="3" y1="12" x2="21" y2="12" />
    </svg>
  );
}

// ── Navy CTA box (wave background + button + anchor) ──────────────────────────

function NavyCTABox({ title }: { title: string }) {
  return (
    <section
      style={{
        background: 'var(--navy)',
        padding: '72px 40px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle horizontal wave lines */}
      <svg
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.06,
          pointerEvents: 'none',
        }}
        preserveAspectRatio="none"
        viewBox="0 0 1200 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        {Array.from({ length: 20 }).map((_, i) => {
          const y = 12 + i * 16;
          return (
            <path
              key={i}
              d={`M0 ${y} Q300 ${y - 10} 600 ${y} Q900 ${y + 10} 1200 ${y}`}
              stroke="white"
              strokeWidth="1"
              fill="none"
            />
          );
        })}
      </svg>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2
          style={{
            fontFamily: 'var(--font-body)',
            color: 'var(--gold)',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 44,
          }}
        >
          {title}
        </h2>

        <a
          href="/#inquiry"
          onClick={(e) => { e.preventDefault(); sessionStorage.setItem('scrollTo', '#inquiry'); window.location.href = '/'; }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '13px 44px',
            border: '1px solid var(--gold)',
            color: 'var(--gold)',
            textDecoration: 'none',
            fontFamily: 'var(--font-body)',
            fontSize: 10,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            fontWeight: 600,
            transition: 'background 0.25s, color 0.25s',
            marginBottom: 44,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = 'var(--gold)';
            el.style.color = '#0A1628';
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.background = 'transparent';
            el.style.color = 'var(--gold)';
          }}
        >
          Get In Touch &rarr;
        </a>

        <AnchorSvg />
      </div>

      {/* Gold rope / dashed border at bottom */}
      <div
        style={{
          marginTop: 40,
          height: 10,
          background:
            'repeating-linear-gradient(90deg, var(--gold) 0px, var(--gold) 8px, transparent 8px, transparent 14px)',
          opacity: 0.45,
        }}
      />
    </section>
  );
}

// ── Main catering page component ───────────────────────────────────────────────

export default function CharterPageCatering() {
  const heroRef = useRef<HTMLElement>(null);
  const bgRef   = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(bgRef.current, { scale: 1.08 }, { scale: 1, duration: 14, ease: 'none' });
    gsap.from(textRef.current!.querySelectorAll('.hr'), {
      y: 30, opacity: 0, duration: 0.85, stagger: 0.1, ease: 'power2.out', delay: 0.15,
    });
    gsap.to(bgRef.current, {
      yPercent: 25,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, { scope: heroRef });

  return (
    <>
      <Nav />
      <main>

        {/* ── Hero ── */}
        <section
          ref={heroRef}
          className="relative overflow-hidden flex items-end"
          style={{ minHeight: '100vh', background: 'var(--navy)' }}
        >
          {/* Background image */}
          <div
            ref={bgRef}
            className="absolute inset-0 will-change-transform"
            style={{
              backgroundImage: 'url(/catering-charter.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          {/* Dark overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.6) 55%, rgba(10,22,40,0.22) 100%), linear-gradient(to top, rgba(10,22,40,0.94) 0%, rgba(10,22,40,0.08) 50%)',
            }}
          />

          {/* Text content */}
          <div
            ref={textRef}
            className="relative z-10 w-full cruise-hero-content"
            style={{ paddingLeft: 80, paddingRight: 48, paddingTop: 100, paddingBottom: 88, maxWidth: 1200 }}
          >
            <div
              className="hr section-eyebrow"
              style={{ marginBottom: 24 }}
            >
              BOATTIME YC LUXURY
            </div>

            <h1
              className="hr"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(48px, 7vw, 92px)',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                color: 'var(--cream)',
                marginBottom: 44,
              }}
            >
              Catering Gold Coast
            </h1>

            <div className="hr">
              <a
                href="/#inquiry"
                onClick={(e) => { e.preventDefault(); sessionStorage.setItem('scrollTo', '#inquiry'); window.location.href = '/'; }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '14px 36px',
                  background: 'var(--gold)',
                  color: '#0A1628',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-body)',
                  fontSize: 10,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.85'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
              >
                Booking Enquiry &rarr;
              </a>
            </div>
          </div>

          {/* QLD Travellers badge — right side */}
          <div
            className="absolute right-20 top-1/2 -translate-y-1/2 hidden lg:block"
            style={{ zIndex: 10 }}
          >
            <QldBadge />
          </div>
        </section>

        {/* ── CATERING MENUS CTA box ── */}
        <NavyCTABox title="CATERING MENUS" />

        {/* ── PDF Flipbook ── */}
        <MenuFlipbook pdfUrl="/boattime-menu-2026.pdf" />

        {/* ── TALK TO US CTA box ── */}
        <NavyCTABox title="TALK TO US ABOUT YOUR CATERING REQUIREMENTS" />

      </main>
      <Footer />
    </>
  );
}
