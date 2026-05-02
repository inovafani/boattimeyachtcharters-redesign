'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ACTS = [
  {
    time: '17:00 · BOARDING',
    title: 'Champagne ',
    em: 'welcome',
    desc: 'Relaxed boarding at Muriel Henchman pontoon. Welcome glass in hand before we slip the lines.',
    img: '/EDI_2932.jpg',
    alt: 'Champagne welcome aboard',
  },
  {
    time: '17:30 · DEPARTURE',
    title: 'Into the ',
    em: 'Broadwater',
    desc: 'Gentle cruise out past Surfers Paradise, the skyline shifting to gold as we head north.',
    img: '/EDI_2954.jpg',
    alt: 'Sailing the Broadwater',
  },
  {
    time: '18:45 · GOLDEN HOUR',
    title: 'Sunset ',
    em: 'spectacle',
    desc: 'Anchored at the ideal vantage. Platters, cocktails, and the moment everyone stops talking.',
    img: '/EDI_3057.jpg',
    alt: 'Golden hour sunset over water',
  },
  {
    time: '20:00 · CITY LIGHTS',
    title: 'Homeward, ',
    em: 'aglow',
    desc: 'Cruise back under the Gold Coast skyline. Somehow always the best part of the night.',
    img: '/EDI_3026.jpg',
    alt: 'Gold Coast city lights',
  },
];

export default function DayTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(headerRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: headerRef.current, start: 'top 85%', once: true },
      });

      gsap.from(sectionRef.current!.querySelectorAll('.timeline-step'), {
        y: 40,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', once: true },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} className="day-aboard">
      <div ref={headerRef} className="day-aboard-header">
        <span className="section-eyebrow day-aboard-eyebrow">A Day Aboard</span>
        <h2 className="day-aboard-title">
          From boarding<br />
          to <em>final toast.</em>
        </h2>
      </div>

      <div className="timeline">
        {ACTS.map((act) => (
          <div key={act.time} className="timeline-step">
            <div className="timeline-time">
              <span className="timeline-dot" />
              <span>{act.time}</span>
            </div>
            <div className="timeline-img">
              <img src={act.img} alt={act.alt} loading="lazy" />
            </div>
            <h4 className="timeline-title">
              {act.title}<em>{act.em}</em>
            </h4>
            <p className="timeline-desc">{act.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
