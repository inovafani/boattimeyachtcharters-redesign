'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eyebrow, ItalicEm, Button } from './Shared';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const DESTS = {
  gc: [
    'Wave Break Island',
    'Sanctuary Cove',
    'Jumpinpin',
    'Scottish Prince Wreck',
    'Sovereign Islands',
  ],
  mb: ['Brisbane River', 'Tangalooma', 'Moreton Island', 'Stradbroke Island'],
};

export default function Destinations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(leftRef.current, {
        x: -40,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
          once: true,
        },
      });

      gsap.from(rightRef.current!.querySelectorAll('.dest-col'), {
        x: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: rightRef.current,
          start: 'top 82%',
          once: true,
        },
      });

      gsap.from(sectionRef.current!.querySelectorAll('.dest-place'), {
        x: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: rightRef.current,
          start: 'top 75%',
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ padding: '110px 48px', background: 'var(--navy)' }}
    >
      {/* Subtle gold radial */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 15% 30%, rgba(201,168,76,0.06), transparent 50%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="relative grid"
        style={{ maxWidth: 1200, margin: '0 auto', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start' }}
      >
        {/* Left */}
        <div ref={leftRef}>
          <Eyebrow>Destinations</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(38px, 4.5vw, 60px)',
              lineHeight: 1.02,
              letterSpacing: '-0.015em',
              marginBottom: 28,
            }}
          >
            Where we{' '}
            <ItalicEm>anchor</ItalicEm>.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              color: 'var(--text-muted)',
              lineHeight: 1.75,
              marginBottom: 36,
              maxWidth: 400,
            }}
          >
            We run the calm, protected waters of the Gold Coast Broadwater — and when
            conditions invite, we push north into Moreton Bay. Your skipper reads the day
            and writes the line.
          </p>
          <Button variant="outline" href="#inquiry">
            Plan a Route
          </Button>
        </div>

        {/* Right — two column destination lists */}
        <div ref={rightRef} className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 48 }}>
          {/* Gold Coast */}
          <div className="dest-col">
            <div
              className="flex items-center gap-3"
              style={{
                marginBottom: 24,
                paddingBottom: 16,
                borderBottom: '1px solid rgba(201,168,76,0.2)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 18,
                  color: 'var(--gold)',
                }}
              >
                i.
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 10,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  fontWeight: 500,
                }}
              >
                Gold Coast
              </span>
            </div>
            {DESTS.gc.map((p, i) => (
              <div
                key={p}
                className="dest-place flex items-center gap-3.5"
                style={{
                  padding: '13px 0',
                  borderBottom: '1px solid rgba(245,240,232,0.06)',
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  color: 'var(--cream)',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  cursor: 'default',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 10,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.15em',
                    fontWeight: 400,
                    minWidth: 26,
                  }}
                >
                  0{i + 1}
                </span>
                {p}
              </div>
            ))}
          </div>

          {/* Moreton Bay */}
          <div className="dest-col">
            <div
              className="flex items-center gap-3"
              style={{
                marginBottom: 24,
                paddingBottom: 16,
                borderBottom: '1px solid rgba(201,168,76,0.2)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  fontSize: 18,
                  color: 'var(--gold)',
                }}
              >
                ii.
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 10,
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  fontWeight: 500,
                }}
              >
                Moreton Bay
              </span>
            </div>
            {DESTS.mb.map((p, i) => (
              <div
                key={p}
                className="dest-place flex items-center gap-3.5"
                style={{
                  padding: '13px 0',
                  borderBottom: '1px solid rgba(245,240,232,0.06)',
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  color: 'var(--cream)',
                  fontWeight: 400,
                  letterSpacing: '-0.01em',
                  cursor: 'default',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 10,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.15em',
                    fontWeight: 400,
                    minWidth: 26,
                  }}
                >
                  0{i + 1}
                </span>
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
