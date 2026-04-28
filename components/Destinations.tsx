'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const GC = [
  { name: 'Wave Break', em: 'Island', time: '35 MIN' },
  { name: 'Sovereign', em: 'Islands', time: '45 MIN' },
  { name: 'Sanctuary', em: 'Cove', time: '1 HR' },
  { name: 'Jumpinpin', em: null, time: '1.5 HR' },
  { name: 'Scottish Prince', em: 'Wreck', time: 'HISTORIC' },
  { name: 'South', em: 'Stradbroke', time: 'SCENIC' },
];

const MB = [
  { name: 'Brisbane', em: 'River', time: '2 HR' },
  { name: 'Tangalooma', em: 'Wrecks', time: 'FULL DAY' },
  { name: 'Moreton', em: 'Island', time: 'FULL DAY' },
  { name: 'North', em: 'Stradbroke', time: 'FULL DAY' },
];

export default function Destinations() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(leftRef.current!.children, {
        x: -30,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', once: true },
      });

      gsap.from(rightRef.current!.children, {
        x: 30,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', once: true },
      });

      gsap.from(sectionRef.current!.querySelectorAll('.dest-item'), {
        x: -16,
        opacity: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: { trigger: rightRef.current, start: 'top 75%', once: true },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="horizons" className="horizons">
      <div className="horizons-inner">

        {/* Left column */}
        <div ref={leftRef} className="horizons-left" style={{ position: 'sticky', top: 120 }}>
          <span className="section-eyebrow horizons-eyebrow">Where We Sail</span>

          <h2 className="horizons-title">
            Calm waters.<br />
            <em>Unhurried routes.</em>
          </h2>

          <p className="horizons-body">
            We operate in the sheltered, stable waters of the Broadwater and Moreton Bay
            — genuinely protected sailing that suits everyone from first-timers to the
            seasoned. Your skipper tailors the route on the day, reading conditions and
            guests alike.
          </p>

          <p className="horizons-body">
            Anchor off Wave Break for a swim. Cruise the Sovereign Islands for the
            mansions. Set course for the Scottish Prince wreck. Nose up to Moreton for a
            full-day exploration. We&apos;ve probably done it this week.
          </p>

          {/* Compass */}
          <div className="horizons-compass">
            <div className="compass">
              <div className="compass-arc" />
              <div className="compass-marks">
                <span className="compass-mark mark-n">N</span>
                <span className="compass-mark mark-s">S</span>
                <span className="compass-mark mark-e">E</span>
                <span className="compass-mark mark-w">W</span>
              </div>
              <div className="compass-needle" />
              <div className="compass-dot" />
            </div>
            <div
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 10,
                letterSpacing: '0.14em',
                color: 'rgba(201,168,76,0.55)',
                fontWeight: 500,
              }}
            >
              HOME PORT · 27°56&apos;34&quot;S 153°25&apos;E
            </div>
          </div>
        </div>

        {/* Right column */}
        <div ref={rightRef} className="horizons-right">

          {/* SVG Route Map */}
          <div className="route-map-wrap">
            <div className="route-map-header">
              <div className="route-map-title">
                The <em>Broadwater</em> · Operating Area
              </div>
              <span className="route-map-live">Live Tracking</span>
            </div>

            <div className="route-map">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet">
                <rect x="0" y="0" width="500" height="400" className="rm-water" />

                {/* Depth contours */}
                <path d="M 180 30 Q 230 100 220 180 Q 210 260 250 330" className="rm-depth" />
                <path d="M 250 50 Q 290 130 280 220 Q 270 300 310 370" className="rm-depth" />
                <path d="M 330 60 Q 360 140 350 240 Q 340 310 370 380" className="rm-depth" />

                {/* Mainland (left) */}
                <path d="M 0,0 L 160,0 Q 175,25 170,55 Q 165,95 145,130 Q 135,175 150,220 Q 160,265 140,310 Q 120,360 135,400 L 0,400 Z" className="rm-land" />

                {/* South Stradbroke (right barrier) */}
                <path d="M 430,0 Q 445,30 440,80 Q 435,150 445,220 Q 450,290 445,370 L 500,400 L 500,0 Z" className="rm-land" />

                {/* Wave Break Island */}
                <ellipse cx="270" cy="295" rx="20" ry="12" className="rm-island" />

                {/* Sovereign Islands */}
                <ellipse cx="195" cy="210" rx="13" ry="9" className="rm-island" />
                <ellipse cx="213" cy="197" rx="9" ry="6" className="rm-island" />

                {/* Route path */}
                <path id="rmRoute" className="rm-route" d="M 155 375 Q 200 345 250 310 T 270 285 Q 300 260 320 225 T 280 155 Q 240 110 260 60" />

                {/* Home port */}
                <g className="rm-home-group">
                  <circle cx="155" cy="375" r="6" className="rm-home-pulse" />
                  <circle cx="155" cy="375" r="7" className="rm-home" />
                </g>
                <text x="170" y="373" className="rm-pin-label">Muriel Henchman</text>
                <text x="170" y="384" className="rm-pin-label-sub">Home Port · 27°56&apos;S</text>

                {/* Animated yacht */}
                <g>
                  <circle r="8" className="rm-yacht" opacity="0.35">
                    <animate attributeName="r" from="5" to="22" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.35" to="0" dur="2s" repeatCount="indefinite" />
                    <animateMotion dur="28s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#rmRoute" />
                    </animateMotion>
                  </circle>
                  <circle r="5" className="rm-yacht">
                    <animateMotion dur="28s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#rmRoute" />
                    </animateMotion>
                  </circle>
                </g>

                {/* Wave Break */}
                <g className="rm-pin-group">
                  <circle cx="270" cy="295" r="4" className="rm-pin-bg" />
                  <circle cx="270" cy="295" r="2" className="rm-pin-dot" />
                  <text x="282" y="293" className="rm-pin-label">Wave Break Island</text>
                  <text x="282" y="303" className="rm-pin-label-sub">35 min · swim stop</text>
                </g>

                {/* Sovereign Islands */}
                <g className="rm-pin-group">
                  <circle cx="200" cy="210" r="4" className="rm-pin-bg" />
                  <circle cx="200" cy="210" r="2" className="rm-pin-dot" />
                  <text x="212" y="208" className="rm-pin-label">Sovereign Islands</text>
                  <text x="212" y="218" className="rm-pin-label-sub">45 min · mansions</text>
                </g>

                {/* Sanctuary Cove */}
                <g className="rm-pin-group">
                  <circle cx="125" cy="155" r="4" className="rm-pin-bg" />
                  <circle cx="125" cy="155" r="2" className="rm-pin-dot" />
                  <text x="135" y="153" className="rm-pin-label">Sanctuary Cove</text>
                  <text x="135" y="163" className="rm-pin-label-sub">1 hr · dining</text>
                </g>

                {/* Scottish Prince */}
                <g className="rm-pin-group">
                  <circle cx="330" cy="255" r="4" className="rm-pin-bg" />
                  <circle cx="330" cy="255" r="2" className="rm-pin-dot" />
                  <text x="342" y="253" className="rm-pin-label">Scottish Prince</text>
                  <text x="342" y="263" className="rm-pin-label-sub">Shipwreck · 1887</text>
                </g>

                {/* Jumpinpin */}
                <g className="rm-pin-group">
                  <circle cx="260" cy="60" r="4" className="rm-pin-bg" />
                  <circle cx="260" cy="60" r="2" className="rm-pin-dot" />
                  <text x="272" y="58" className="rm-pin-label">Jumpinpin</text>
                  <text x="272" y="68" className="rm-pin-label-sub">1.5 hr · scenic</text>
                </g>

                {/* Compass rose */}
                <g transform="translate(455, 355)" className="rm-compass">
                  <circle cx="0" cy="0" r="22" className="rm-compass-ring" />
                  <circle cx="0" cy="0" r="15" className="rm-compass-ring" opacity="0.5" />
                  <polygon points="0,-17 -3.5,0 0,-3 3.5,0" className="rm-compass-needle-n" />
                  <polygon points="0,17 -3.5,0 0,3 3.5,0" className="rm-compass-needle-s" />
                  <circle cx="0" cy="0" r="2" fill="#0a1e3a" />
                  <text x="-3" y="-23" className="rm-compass-label">N</text>
                </g>

                {/* Coordinates */}
                <text x="10" y="18" className="rm-coord">27°50&apos;S</text>
                <text x="10" y="210" className="rm-coord">27°55&apos;S</text>
                <text x="10" y="395" className="rm-coord">28°00&apos;S</text>
                <text x="490" y="395" className="rm-coord" textAnchor="end">153°25&apos;E</text>
              </svg>
            </div>

            <div className="route-map-legend">
              <span className="route-map-legend-item">
                <span className="route-map-legend-dot home" />
                Home Port
              </span>
              <span className="route-map-legend-item">
                <span className="route-map-legend-dot" style={{ background: 'var(--gold)' }} />
                Sun Goddess · Live
              </span>
              <span className="route-map-legend-item">
                <span className="route-map-legend-dot" />
                Destination
              </span>
              <span className="route-map-legend-item">
                <span className="route-map-legend-dot route" />
                Typical Route
              </span>
            </div>
          </div>

          {/* Gold Coast region card */}
          <div className="dest-region-card">
            <div className="dest-region-header">
              <div>
                <div className="dest-region-name">Gold Coast <em>Home Waters</em></div>
                <div className="dest-region-sub">Protected Broadwater · Year-round</div>
              </div>
              <div className="dest-region-num">01 / 02</div>
            </div>
            <div className="dest-list">
              {GC.map((d) => (
                <div key={d.name} className="dest-item">
                  <div className="dest-name">
                    {d.name}{d.em ? <> <em>{d.em}</em></> : null}
                  </div>
                  <div className="dest-time">{d.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Moreton Bay region card */}
          <div className="dest-region-card">
            <div className="dest-region-header">
              <div>
                <div className="dest-region-name">Moreton Bay <em>Further Afield</em></div>
                <div className="dest-region-sub">Full-day · Seasonal extensions</div>
              </div>
              <div className="dest-region-num">02 / 02</div>
            </div>
            <div className="dest-list">
              {MB.map((d) => (
                <div key={d.name} className="dest-item">
                  <div className="dest-name">
                    {d.name}{d.em ? <> <em>{d.em}</em></> : null}
                  </div>
                  <div className="dest-time">{d.time}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
