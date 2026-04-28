'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function CtaBand() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const lines = sectionRef.current!.querySelectorAll<HTMLElement>('.kinetic-line');

      lines.forEach((line, i) => {
        gsap.fromTo(
          line,
          { scale: 0.88, opacity: 0, y: 40 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            delay: i * 0.14,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 72%',
              once: true,
            },
          },
        );
      });

      gsap.fromTo(
        sectionRef.current!.querySelector('.kinetic-caption'),
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
            once: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      style={{
        background: 'var(--navy)',
        padding: '140px 64px 160px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1440, margin: '0 auto', position: 'relative' }}>

        {/* Line 1 — left */}
        <div
          className="kinetic-line"
          style={{ transformOrigin: 'left center' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(64px, 11vw, 200px)',
              lineHeight: 0.92,
              letterSpacing: '-0.025em',
              color: 'var(--cream)',
              margin: 0,
              textAlign: 'left',
            }}
          >
            This is not
          </h2>
        </div>

        {/* Line 2 — right, italic gold */}
        <div
          className="kinetic-line"
          style={{ transformOrigin: 'right center', marginTop: '0.08em' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontStyle: 'italic',
              fontSize: 'clamp(52px, 8.5vw, 160px)',
              lineHeight: 0.94,
              letterSpacing: '-0.02em',
              color: 'var(--gold-light)',
              margin: 0,
              textAlign: 'right',
            }}
          >
            a tourist cruise.
          </h2>
        </div>

        {/* Line 3 — centered */}
        <div
          className="kinetic-line"
          style={{ transformOrigin: 'center center', marginTop: '0.1em' }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(58px, 10vw, 190px)',
              lineHeight: 0.92,
              letterSpacing: '-0.025em',
              color: 'var(--cream)',
              margin: 0,
              textAlign: 'center',
            }}
          >
            It&apos;s{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>your</em>
            {' '}day.
          </h2>
        </div>

        {/* Caption */}
        <div
          className="kinetic-caption"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
            marginTop: 72,
          }}
        >
          <div
            style={{
              height: 1,
              width: 56,
              background: 'rgba(201,168,76,0.28)',
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 9,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.45)',
              fontWeight: 500,
            }}
          >
            Boattime · Designed, never generic
          </span>
          <div
            style={{
              height: 1,
              width: 56,
              background: 'rgba(201,168,76,0.28)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
