'use client';

import { useRef, useState, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eyebrow, ItalicEm, Button, Icon } from './Shared';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FAQS = [
  {
    q: 'Where do your boats depart from?',
    a: 'Our boats are berthed at Muriel Henchman Public Pontoon on the Gold Coast — about ten minutes from Surfers Paradise and fifteen from Broadbeach. Look for our signage next to the Heli Tours at Marina Mirage.',
  },
  {
    q: 'Do you offer pre-made charter packages?',
    a: "Three starting points: Beaches and BBQs — a midday run to the islands, watersports, and buffet. Sunset cocktails and canapés — five o'clock out of Marina Mirage into golden hour. Or a fully custom charter — tell us the occasion and we write the afternoon.",
  },
  {
    q: 'What about food and drinks?',
    a: "Each vessel has two bars with bar-tab or consumption options. Our culinary partners — Private Chefs of Brisbane — handle everything from grazing boards and canapés to gourmet BBQ, buffet, and fine dining.",
  },
  {
    q: 'What destinations can we visit?',
    a: 'Most charters run the calm Broadwater — Wave Break Island, Sanctuary Cove, Jumpinpin, the Scottish Prince wreck, the mansions at Sovereign Islands. When conditions invite, we push north into Moreton Bay for Tangalooma, Moreton Island and Stradbroke.',
  },
  {
    q: 'Will I get seasick?',
    a: 'We operate in the protected waters of the Gold Coast Broadwater, where swell is minimal. If we head offshore into open ocean there is a possibility of larger waves — your skipper reads the day and the route accordingly.',
  },
  {
    q: 'Are your charters accessible for guests with limited mobility?',
    a: 'We have welcomed many guests with limited mobility. Boarding requires a step up from the marina pontoon, and each guest is different — our team will walk you through the layout and accommodations before booking to make sure it is the right fit.',
  },
];

function FaqItem({ f, open, onToggle }: { f: typeof FAQS[0]; open: boolean; onToggle: () => void }) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const body = bodyRef.current;
      const inner = innerRef.current;
      if (!body || !inner) return;

      if (open) {
        gsap.fromTo(
          body,
          { height: 0 },
          { height: inner.scrollHeight, duration: 0.45, ease: 'power2.out' },
        );
        gsap.to(btnRef.current, {
          background: 'var(--gold)',
          borderColor: 'var(--gold)',
          duration: 0.3,
        });
      } else {
        gsap.to(body, { height: 0, duration: 0.35, ease: 'power2.in' });
        gsap.to(btnRef.current, {
          background: 'transparent',
          borderColor: 'rgba(201,168,76,0.35)',
          duration: 0.3,
        });
      }
    },
    { dependencies: [open] },
  );

  return (
    <div style={{ borderBottom: '1px solid rgba(201,168,76,0.14)' }}>
      <div
        className="flex justify-between items-center gap-6 cursor-pointer select-none"
        style={{ padding: '26px 0' }}
        onClick={onToggle}
      >
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            color: 'var(--cream)',
            lineHeight: 1.3,
            letterSpacing: '-0.005em',
            fontWeight: 400,
            flex: 1,
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--cream)')}
        >
          {f.q}
        </div>
        <div
          ref={btnRef}
          className="flex-shrink-0 flex items-center justify-center"
          style={{
            width: 36,
            height: 36,
            border: '1px solid rgba(201,168,76,0.35)',
            background: 'transparent',
          }}
        >
          <Icon
            name={open ? 'minus' : 'plus'}
            size={14}
            color={open ? 'var(--navy)' : 'var(--gold)'}
          />
        </div>
      </div>
      <div ref={bodyRef} style={{ overflow: 'hidden', height: 0 }}>
        <div ref={innerRef} style={{ paddingBottom: 28 }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              color: 'var(--text-muted)',
              lineHeight: 1.85,
              maxWidth: 600,
            }}
          >
            {f.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = useCallback(
    (i: number) => setOpenIndex((prev) => (prev === i ? -1 : i)),
    [],
  );

  useGSAP(
    () => {
      gsap.from(leftRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
          once: true,
        },
      });

      gsap.from(listRef.current!.querySelectorAll('.faq-item-wrap'), {
        x: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 82%',
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="faq-section"
      style={{ padding: '110px 48px', background: 'var(--navy)' }}
    >
      <div
        className="grid faq-layout"
        style={{ maxWidth: 1100, margin: '0 auto', gridTemplateColumns: '0.9fr 1.3fr', gap: 80, alignItems: 'start' }}
      >
        {/* Left column */}
        <div ref={leftRef}>
          <Eyebrow>Frequently Asked</Eyebrow>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 300,
              fontSize: 'clamp(36px, 4.5vw, 58px)',
              lineHeight: 1.02,
              letterSpacing: '-0.015em',
              marginBottom: 24,
            }}
          >
            Before you <ItalicEm>board</ItalicEm>.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 15,
              color: 'var(--text-muted)',
              lineHeight: 1.75,
              marginBottom: 36,
              maxWidth: 340,
            }}
          >
            Everything you need to know before a charter — parking, catering, destinations,
            mobility. Anything else, our concierge is at the other end of a phone.
          </p>
          <Button variant="outline" href="#inquiry">
            Contact Concierge
          </Button>
        </div>

        {/* Right — FAQ list */}
        <div
          ref={listRef}
          style={{ borderTop: '1px solid rgba(201,168,76,0.2)' }}
        >
          {FAQS.map((f, i) => (
            <div key={i} className="faq-item-wrap">
              <FaqItem f={f} open={openIndex === i} onToggle={() => toggle(i)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
