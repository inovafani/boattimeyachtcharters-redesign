'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STATS = [
  { eyebrow: 'Est. 2014', value: 12, suffix: 'yr', label: 'On the water', isFloat: false },
  { eyebrow: 'The fleet', value: 2, suffix: null, label: 'Luxury superyachts', isFloat: false },
  { eyebrow: 'Guest capacity', value: 135, suffix: null, label: 'Maximum pax', isFloat: false },
  { eyebrow: 'Rating', value: 4.9, suffix: null, label: 'From 3,900 reviews', isFloat: true },
];

export default function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const numbers = sectionRef.current!.querySelectorAll<HTMLElement>('.stat-number');

      numbers.forEach((el, i) => {
        const target = STATS[i].value;
        const isFloat = STATS[i].isFloat;
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 2.2,
          ease: 'power2.out',
          onUpdate() {
            el.textContent = isFloat
              ? obj.val.toFixed(1)
              : Math.round(obj.val).toString();
          },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            once: true,
          },
        });
      });

      // Stagger items in
      gsap.from(sectionRef.current!.querySelectorAll('.stat-item'), {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <div ref={sectionRef} style={{ background: 'var(--gold)' }}>
      <div
        className="grid stats-grid"
        style={{
          gridTemplateColumns: 'repeat(4, 1fr)',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={i}
            className="stat-item"
            style={{
              padding: '52px 40px',
              borderRight: i < 3 ? '1px solid rgba(10,22,40,0.15)' : 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 13,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--navy)',
                opacity: 0.75,
                fontWeight: 600,
              }}
            >
              {s.eyebrow}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                fontSize: 'clamp(52px, 5vw, 76px)',
                color: 'var(--navy)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
                display: 'flex',
                alignItems: 'baseline',
                gap: 3,
              }}
            >
              <span className="stat-number">{s.value}</span>
              {s.suffix && (
                <span
                  style={{
                    fontStyle: 'italic',
                    fontSize: '0.52em',
                    color: 'var(--navy)',
                    opacity: 0.8,
                  }}
                >
                  {s.suffix}
                </span>
              )}
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: 'var(--navy)',
                opacity: 0.65,
                fontWeight: 500,
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
