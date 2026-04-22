'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eyebrow, ItalicEm, Icon } from './Shared';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface YachtData {
  eyebrow: string;
  name: string;
  emWord: string;
  body: string;
  specs: [string, string][];
  img: string;
}

const YACHTS: YachtData[] = [
  {
    eyebrow: '34m · 110ft Superyacht',
    name: 'Sun Goddess',
    emWord: 'Goddess',
    body: 'Sleek, stylish, unmistakable on the Broadwater. Dual bars, two decks, a dual-level galley, and sound throughout — room to breathe without giving up a thing.',
    specs: [['Guests', '135'], ['Length', '34m'], ['Decks', 'Two']],
    img: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1400&q=80',
  },
  {
    eyebrow: '30m · 100ft Tri-Deck',
    name: 'Mermaid Spirit',
    emWord: 'Spirit',
    body: 'A tri-deck catamaran built for functions and celebrations. Three decks, a chef\'s kitchen, sun lounge, dual bars — the ultimate entertaining venue on the coast.',
    specs: [['Guests', '100'], ['Length', '30m'], ['Decks', 'Three']],
    img: 'https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=1400&q=80',
  },
];

function YachtCard({ y, index }: { y: YachtData; index: number }) {
  const [hovered, setHovered] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(imgRef.current, {
        scale: hovered ? 1.05 : 1,
        duration: 0.8,
        ease: 'power2.out',
      });
    },
    { dependencies: [hovered] },
  );

  return (
    <div
      ref={cardRef}
      className="relative overflow-hidden cursor-pointer"
      style={{ aspectRatio: '4/5', background: 'var(--ocean)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={imgRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: `url(${y.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(10,22,40,0.97) 0%, rgba(10,22,40,0.5) 45%, rgba(10,22,40,0.15) 100%)',
        }}
      />

      {/* Large ghost number */}
      <div
        className="absolute"
        style={{
          top: 40,
          right: 44,
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontSize: 100,
          fontWeight: 300,
          color: 'rgba(201,168,76,0.12)',
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        0{index + 1}
      </div>

      {/* Info */}
      <div className="absolute" style={{ left: 44, right: 44, bottom: 44 }}>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 10,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontWeight: 500,
            marginBottom: 14,
          }}
        >
          {y.eyebrow}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 'clamp(38px, 4vw, 54px)',
            color: 'var(--cream)',
            lineHeight: 1,
            marginBottom: 18,
            letterSpacing: '-0.015em',
          }}
        >
          {y.name.replace(y.emWord, '').trim()}{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>{y.emWord}</span>
        </div>
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 13.5,
            color: 'rgba(245,240,232,0.78)',
            lineHeight: 1.7,
            marginBottom: 24,
            maxWidth: 400,
          }}
        >
          {y.body}
        </p>

        {/* Specs */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, auto)',
            gap: 32,
            paddingTop: 20,
            borderTop: '1px solid rgba(201,168,76,0.28)',
            marginBottom: 28,
          }}
        >
          {y.specs.map(([k, v]) => (
            <div key={k} className="flex flex-col gap-1.5">
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 9,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  fontWeight: 500,
                }}
              >
                {k}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 24,
                  color: 'var(--cream)',
                  fontWeight: 400,
                }}
              >
                {v}
              </div>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-3"
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
          Step aboard <Icon name="arrow" size={12} color="var(--gold)" />
        </a>
      </div>
    </div>
  );
}

export default function Fleet() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

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

      gsap.from(card1Ref.current, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card1Ref.current,
          start: 'top 85%',
          once: true,
        },
      });

      gsap.from(card2Ref.current, {
        x: 60,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card2Ref.current,
          start: 'top 85%',
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      id="fleet"
      style={{ padding: '110px 48px', background: 'var(--navy-mid)' }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <div ref={headerRef} style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto 64px' }}>
          <Eyebrow>Our Yachts</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(40px, 5vw, 64px)',
              lineHeight: 1.05,
              letterSpacing: '-0.015em',
            }}
          >
            Two superyachts. <ItalicEm>One</ItalicEm> unhurried coastline.
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
            Sun Goddess for head-turning arrivals. Mermaid Spirit for three decks of
            celebration. Both berthed at Marina Mirage, ready for your afternoon.
          </p>
        </div>

        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          <div ref={card1Ref}>
            <YachtCard y={YACHTS[0]} index={0} />
          </div>
          <div ref={card2Ref}>
            <YachtCard y={YACHTS[1]} index={1} />
          </div>
        </div>
      </div>
    </div>
  );
}
