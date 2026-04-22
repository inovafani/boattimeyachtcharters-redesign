'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eyebrow, ItalicEm, Icon } from './Shared';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface CharterData {
  index: string;
  eyebrow: string;
  title: string;
  em: string;
  body: string;
  img: string;
}

const CHARTERS: CharterData[] = [
  {
    index: '01',
    eyebrow: 'Private',
    title: 'Your',
    em: 'afternoon',
    body: 'Up to 135 guests. Half-day or full-day on the Broadwater. BBQ, watersports, a swim stop at Wavebreak.',
    img: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1200&q=80',
  },
  {
    index: '02',
    eyebrow: 'Corporate',
    title: 'Your',
    em: 'function',
    body: 'Client events, team offsites, product launches. Dual bars, sound throughout, curated catering.',
    img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&q=80',
  },
  {
    index: '03',
    eyebrow: 'Weddings',
    title: 'Your',
    em: 'ceremony',
    body: 'Ceremony on the foredeck, reception across three decks. Florals, celebrant, and the line the captain reads.',
    img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
  },
  {
    index: '04',
    eyebrow: 'Galley',
    title: 'Your',
    em: 'menu',
    body: 'Grazing boards, canapés, gourmet BBQ, fine dining. Curated with Private Chefs of Brisbane.',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
  },
];

function CharterCard({ c }: { c: CharterData }) {
  const [hovered, setHovered] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(imgRef.current, {
        scale: hovered ? 1.06 : 1,
        duration: 0.75,
        ease: 'power2.out',
      });
    },
    { dependencies: [hovered] },
  );

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      style={{ minHeight: 440, aspectRatio: '3/4', background: 'var(--ocean)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={imgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${c.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.4) 55%, rgba(10,22,40,0.15) 100%)',
        }}
      />

      {/* Ghost index number — top right */}
      <div
        className="absolute"
        style={{
          top: 22,
          right: 26,
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 18,
          color: 'var(--gold)',
          fontWeight: 300,
          letterSpacing: '0.08em',
          opacity: 0.9,
        }}
      >
        {c.index}
      </div>

      <div className="absolute" style={{ left: 28, right: 28, bottom: 32 }}>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 9,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontWeight: 500,
            marginBottom: 14,
          }}
        >
          {c.eyebrow}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 30,
            color: 'var(--cream)',
            lineHeight: 1.1,
            marginBottom: 14,
            letterSpacing: '-0.01em',
          }}
        >
          {c.title}{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>{c.em}</span>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 13,
            color: 'rgba(245,240,232,0.78)',
            lineHeight: 1.65,
            marginBottom: 22,
          }}
        >
          {c.body}
        </p>
        <a
          href="#inquiry"
          className="inline-flex items-center gap-2.5"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 10,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Enquire <Icon name="arrow" size={11} color="var(--gold)" />
        </a>
      </div>
    </div>
  );
}

export default function Charters() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

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

      gsap.from(sectionRef.current!.querySelectorAll('.charter-card-wrap'), {
        y: 60,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      style={{ padding: '110px 48px', maxWidth: 1440, margin: '0 auto' }}
    >
      <div ref={headerRef} style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto 64px' }}>
        <Eyebrow>Yacht Charters</Eyebrow>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(40px, 5vw, 64px)',
            lineHeight: 1.05,
            letterSpacing: '-0.015em',
          }}
        >
          Tailored for <ItalicEm>every occasion</ItalicEm>.
        </h2>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 15,
            color: 'var(--text-muted)',
            marginTop: 22,
            lineHeight: 1.75,
          }}
        >
          From intimate sunset proposals to full-vessel corporate events — every charter is
          bespoke, every afternoon written to your brief.
        </p>
      </div>

      <div
        className="grid"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 2 }}
      >
        {CHARTERS.map((c) => (
          <div key={c.index} className="charter-card-wrap">
            <CharterCard c={c} />
          </div>
        ))}
      </div>
    </div>
  );
}
