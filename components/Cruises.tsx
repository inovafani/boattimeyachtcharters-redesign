'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eyebrow, ItalicEm, Icon } from './Shared';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface CruiseData {
  cat: string;
  title: string;
  em: string;
  body: string | null;
  dur: string;
  vessel: string;
  lg?: boolean;
  col: string;
  row: string;
  img: string;
}

const CRUISES: CruiseData[] = [
  {
    cat: 'Whale Season',
    title: 'Luxury whale',
    em: 'watching',
    body: 'Meet the humpbacks from the foredeck of Sun Goddess. Breach season June through October.',
    dur: '4 hrs',
    vessel: 'Sun Goddess',
    lg: true,
    col: 'span 7',
    row: 'span 2',
    img: 'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=1400&q=80',
  },
  {
    cat: 'Sunset',
    title: 'Broadwater',
    em: 'sunset cruise',
    body: null,
    dur: '2.5 hrs',
    vessel: 'Sun Goddess',
    col: 'span 5',
    row: 'span 2',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
  },
  {
    cat: 'Galley',
    title: 'Relaxed',
    em: 'lunch cruise',
    body: null,
    dur: '3 hrs',
    vessel: 'Mermaid Spirit',
    col: 'span 4',
    row: 'span 2',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
  },
  {
    cat: 'Event',
    title: 'Riverfire',
    em: '2026',
    body: null,
    dur: '4 hrs',
    vessel: 'Mermaid Spirit',
    col: 'span 5',
    row: 'span 2',
    img: 'https://images.unsplash.com/photo-1498354178607-a79df2916198?w=1200&q=80',
  },
  {
    cat: 'Celebration',
    title: "New Year's",
    em: 'Eve 2026',
    body: null,
    dur: '5 hrs',
    vessel: 'Mermaid Spirit',
    col: 'span 3',
    row: 'span 2',
    img: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1000&q=80',
  },
  {
    cat: 'Romance',
    title: "Valentine's",
    em: 'evening',
    body: null,
    dur: '3 hrs',
    vessel: 'Mermaid Spirit',
    col: 'span 4',
    row: 'span 2',
    img: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1200&q=80',
  },
  {
    cat: 'Dining',
    title: 'Sunset twilight',
    em: 'buffet',
    body: null,
    dur: '3.5 hrs',
    vessel: 'Mermaid Spirit',
    col: 'span 8',
    row: 'span 2',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=80',
  },
];

function CruiseCard({ c }: { c: CruiseData }) {
  const [hovered, setHovered] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    gsap.to(imgRef.current, {
      scale: hovered ? 1.06 : 1,
      duration: 0.75,
      ease: 'power2.out',
    });
    if (descRef.current) {
      gsap.to(descRef.current, {
        opacity: hovered ? 1 : 0,
        y: hovered ? 0 : 8,
        duration: 0.35,
        ease: 'power2.out',
      });
    }
    if (linkRef.current) {
      gsap.to(linkRef.current, {
        opacity: hovered ? 1 : 0,
        y: hovered ? 0 : 6,
        duration: 0.35,
        delay: hovered ? 0.05 : 0,
        ease: 'power2.out',
      });
    }
  }, { dependencies: [hovered] });

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      style={{
        gridColumn: c.col,
        gridRow: c.row,
        background: 'var(--ocean)',
        minHeight: c.lg ? 480 : 'auto',
      }}
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
            'linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.2) 55%, rgba(10,22,40,0.05) 100%)',
        }}
      />
      <div
        className="absolute"
        style={{
          left: c.lg ? 40 : 28,
          right: c.lg ? 40 : 28,
          bottom: c.lg ? 36 : 28,
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 9,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontWeight: 500,
            marginBottom: 12,
          }}
        >
          {c.cat}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: c.lg ? 42 : 26,
            color: 'var(--cream)',
            lineHeight: 1.1,
            marginBottom: 10,
            letterSpacing: '-0.01em',
          }}
        >
          {c.title}{' '}
          <span style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>{c.em}</span>
        </div>
        {c.body && (
          <div
            ref={descRef}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              color: 'rgba(245,240,232,0.78)',
              lineHeight: 1.65,
              marginBottom: 14,
              maxWidth: 380,
              opacity: 0,
            }}
          >
            {c.body}
          </div>
        )}
        <div
          style={{
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
            fontFamily: 'var(--font-body)',
            fontSize: 9,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontWeight: 500,
            marginBottom: 14,
          }}
        >
          <span className="flex items-center gap-1.5">
            <Icon name="clock" size={10} color="var(--gold)" /> {c.dur}
          </span>
          <span className="flex items-center gap-1.5">
            <Icon name="anchor" size={10} color="var(--gold)" /> {c.vessel}
          </span>
        </div>
        <a
          ref={linkRef}
          href="#"
          className="flex items-center gap-2"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 10,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            fontWeight: 600,
            textDecoration: 'none',
            opacity: 0,
          }}
        >
          View Experience <Icon name="arrow" size={11} color="var(--gold)" />
        </a>
      </div>
    </div>
  );
}

export default function Cruises() {
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

      gsap.from(sectionRef.current!.querySelectorAll('.cruise-card-wrap'), {
        y: 60,
        opacity: 0,
        duration: 0.85,
        stagger: 0.08,
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
    <div ref={sectionRef} id="cruises" style={{ padding: '110px 0', background: 'var(--navy)' }}>
      <div ref={headerRef} style={{ textAlign: 'center', maxWidth: 780, margin: '0 auto 72px', padding: '0 48px' }}>
        <Eyebrow>Cruise Tickets</Eyebrow>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(40px, 5vw, 64px)',
            lineHeight: 1.05,
            letterSpacing: '-0.015em',
          }}
        >
          Choose your <ItalicEm>afternoon</ItalicEm>.
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
          Seven scheduled cruises running year-round from Marina Mirage — from whale season
          mornings to New Year&rsquo;s Eve across three decks.
        </p>
      </div>

      <div
        className="cruise-mosaic"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridAutoRows: '200px',
          gap: 2,
          maxWidth: 1440,
          margin: '0 auto',
          padding: '0 48px',
        }}
      >
        {CRUISES.map((c, i) => (
          <div
            key={i}
            className="cruise-card-wrap"
            style={{ gridColumn: c.col, gridRow: c.row }}
          >
            <CruiseCard c={c} />
          </div>
        ))}
      </div>
    </div>
  );
}
