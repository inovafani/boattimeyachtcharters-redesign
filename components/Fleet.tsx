'use client';

import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eyebrow, ItalicEm } from './Shared';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface YachtData {
  badge: string;
  meta: string;
  name: string;
  emWord: string;
  tagline: string;
  body: string;
  specs: { label: string; value: string; unit: string }[];
  feats: string[];
  ctaLabel: string;
  ctaHref: string;
  tourUrl?: string;
  img: string;
  reverse: boolean;
}

const YACHTS: YachtData[] = [
  {
    badge: '01 / FLAGSHIP',
    meta: 'SG-34M · OCEAN FAST YACHT · 2019 REFIT',
    name: 'Sun',
    emWord: 'Goddess',
    tagline: 'She turns every head in the marina — and earns it.',
    body: 'At 114 feet, Sun Goddess is our flagship. Dual bars, two entertainment decks, a dual-level galley, and Bose sound throughout. Built for up to 135 guests who expect room to breathe without giving up a single luxury.',
    specs: [
      { label: 'Guests', value: '150', unit: 'pax' },
      { label: 'Length', value: '34m', unit: '/ 114ft' },
      { label: 'Decks', value: '2', unit: '' },
      { label: 'Bars', value: '2', unit: '' },
    ],
    feats: [
      'Bose Audio',
      'Dual Galley',
      'Upper Sun Deck',
      'Flat-Screens',
      'BBQ Facilities',
      'Weddings Licensed',
    ],
    ctaLabel: 'Tour Sun Goddess',
    ctaHref: '/#inquiry',
    tourUrl:
      'https://kuula.co/share/collection/7M9TC?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
    img: '/sun-goddess-main-upscale.png',
    reverse: false,
  },
  {
    badge: '02 / ENTERTAINER',
    meta: 'MS-30M · TRI-DECK CATAMARAN · NEW REFIT',
    name: 'Mermaid',
    emWord: 'Spirit',
    tagline: 'Three decks built for the best night of your life.',
    body: "A tri-deck catamaran engineered for celebrations. Three full decks, a chef's kitchen, stinger pool, sun lounge, jet skis, and room for 150 by day or 22 overnight. The Gold Coast's ultimate floating venue.",
    specs: [
      { label: 'Day Guests', value: '150', unit: 'pax' },
      { label: 'Length', value: '30m', unit: '/ 100ft' },
      { label: 'Decks', value: '3', unit: '' },
      { label: 'Sleeps', value: '22', unit: '' },
    ],
    feats: [
      "Chef's Kitchen",
      'Jet Skis',
      'Stinger Pool',
      'Paddle Boards',
      'Sun Lounge',
      'Scuba Gear',
    ],
    ctaLabel: 'Tour Mermaid Spirit',
    ctaHref: '/#inquiry',
    tourUrl:
      'https://kuula.co/share/collection/7MvRw?logo=-1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1',
    img: '/mermaid-spirit-main.jpg',
    reverse: true,
  },
];

function TourModal({
  url,
  label,
  onClose,
}: {
  url: string;
  label: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.9)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        style={{ position: 'relative', width: '100%', maxWidth: 1100 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close tour"
          style={{
            position: 'absolute',
            top: -48,
            right: 0,
            background: 'transparent',
            border: '1px solid rgba(201,168,76,0.5)',
            color: 'var(--gold)',
            width: 38,
            height: 38,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
            lineHeight: 1,
            transition: 'background 0.2s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              'rgba(201,168,76,0.15)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              'transparent';
          }}
        >
          ✕
        </button>

        {/* Label */}
        <div
          style={{
            position: 'absolute',
            top: -46,
            left: 0,
            fontFamily: 'var(--font-body)',
            fontSize: 9,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.7)',
            fontWeight: 600,
          }}
        >
          360° Virtual Tour — {label}
        </div>

        {/* iframe 16:9 */}
        <div
          style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}
        >
          <iframe
            src={url}
            title="Sun Goddess 360 Virtual Tour"
            allowFullScreen
            allow="xr-spatial-tracking; gyroscope; accelerometer"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block',
            }}
          />
        </div>
      </div>
    </div>
  );
}

function YachtShowcase({
  y,
  onTourClick,
}: {
  y: YachtData;
  onTourClick?: () => void;
}) {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(imgRef.current, {
        x: y.reverse ? 80 : -80,
        opacity: 0,
        duration: 1.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: showcaseRef.current,
          start: 'top 80%',
          once: true,
        },
      });
      gsap.from(infoRef.current, {
        x: y.reverse ? -60 : 60,
        opacity: 0,
        duration: 1.1,
        delay: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: showcaseRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    },
    { scope: showcaseRef },
  );

  return (
    <div
      ref={showcaseRef}
      className={`yacht-showcase${y.reverse ? ' yacht-showcase--reverse' : ''}`}
    >
      {/* Image panel */}
      <div ref={imgRef} className="yacht-visual">
        <img src={y.img} alt={`${y.name} ${y.emWord}`} />
        <div
          className="yacht-visual__badge"
          style={{
            position: 'absolute',
            top: 40,
            left: y.reverse ? 'auto' : 40,
            right: y.reverse ? 40 : 'auto',
            zIndex: 2,
            fontFamily: 'var(--font-body)',
            fontSize: 9,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontWeight: 600,
            border: '1px solid rgba(201,168,76,0.4)',
            padding: '7px 14px',
            background: 'rgba(10,22,40,0.6)',
          }}
        >
          {y.badge}
        </div>
      </div>

      {/* Info panel */}
      <div ref={infoRef} className="yacht-info">
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 9,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontWeight: 500,
            marginBottom: 24,
          }}
        >
          {y.meta}
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(52px, 6vw, 80px)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            color: 'var(--cream)',
            marginBottom: 20,
          }}
        >
          {y.name}{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>
            {y.emWord}
          </span>
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: 'clamp(16px, 1.6vw, 20px)',
            color: 'rgba(245,240,232,0.65)',
            lineHeight: 1.4,
            marginBottom: 28,
            letterSpacing: '-0.005em',
          }}
        >
          {y.tagline}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            color: 'var(--text-muted)',
            lineHeight: 1.8,
            marginBottom: 40,
            maxWidth: 420,
          }}
        >
          {y.body}
        </p>

        {/* 4-column spec row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
            borderTop: '1px solid rgba(201,168,76,0.18)',
            borderLeft: '1px solid rgba(201,168,76,0.18)',
            marginBottom: 36,
          }}
        >
          {y.specs.map((s) => (
            <div
              key={s.label}
              style={{
                padding: '20px 0 20px 20px',
                borderRight: '1px solid rgba(201,168,76,0.18)',
                borderBottom: '1px solid rgba(201,168,76,0.18)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(24px, 2.5vw, 36px)',
                  fontWeight: 300,
                  color: 'var(--cream)',
                  lineHeight: 1,
                  marginBottom: 4,
                }}
              >
                {s.value}
              </div>
              {s.unit && (
                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 10,
                    color: 'rgba(245,240,232,0.45)',
                    marginBottom: 6,
                  }}
                >
                  {s.unit}
                </div>
              )}
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 9,
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  fontWeight: 500,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Feature pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            marginBottom: 44,
          }}
        >
          {y.feats.map((f) => (
            <span
              key={f}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 9,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gold-light)',
                border: '1px solid rgba(201,168,76,0.28)',
                borderRadius: '100px',
                padding: '6px 14px',
              }}
            >
              {f}
            </span>
          ))}
        </div>

        {/* CTA */}
        {y.tourUrl && onTourClick ? (
          <button
            onClick={onTourClick}
            className="yacht-cta-link"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
            }}
          >
            {y.ctaLabel}
            <svg
              width="14"
              height="14"
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
          </button>
        ) : (
          <a href={y.ctaHref} className="yacht-cta-link">
            {y.ctaLabel}
            <svg
              width="14"
              height="14"
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
        )}
      </div>
    </div>
  );
}

export default function Fleet() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeTour, setActiveTour] = useState<{
    url: string;
    label: string;
  } | null>(null);

  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <div ref={sectionRef} id="fleet" style={{ background: 'var(--navy)' }}>
      {/* Section header — 2-column grid */}
      <div
        ref={headerRef}
        className="fleet-header-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          padding: '110px 80px 80px',
          maxWidth: 1440,
          margin: '0 auto',
          alignItems: 'end',
        }}
      >
        <div>
          <Eyebrow>The Fleet</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(44px, 5.5vw, 72px)',
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              color: 'var(--cream)',
            }}
          >
            Two vessels. <ItalicEm>One horizon.</ItalicEm>
          </h2>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            color: 'var(--text-muted)',
            lineHeight: 1.8,
            maxWidth: 480,
          }}
        >
          Sun Goddess for head-turning arrivals. Mermaid Spirit for three decks
          of celebration. Both berthed at Muriel Henchman Public Pontoon, Main
          Beach 4217 — ready when you are.
        </p>
      </div>

      {/* Yacht showcases */}
      {YACHTS.map((y) => (
        <YachtShowcase
          key={y.name}
          y={y}
          onTourClick={
            y.tourUrl
              ? () =>
                  setActiveTour({
                    url: y.tourUrl!,
                    label: `${y.name} ${y.emWord}`,
                  })
              : undefined
          }
        />
      ))}

      {activeTour && (
        <TourModal
          url={activeTour.url}
          label={activeTour.label}
          onClose={() => setActiveTour(null)}
        />
      )}
    </div>
  );
}
