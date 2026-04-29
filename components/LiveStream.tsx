'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from './Shared';

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ── Config — update these when going live ─────────────────────────────────────
// 1. Set IS_LIVE to true when Kirby starts the stream on YouTube.
// 2. Paste the YouTube video ID from YouTube Studio into YOUTUBE_VIDEO_ID.
//    (It's the part after ?v= in the YouTube URL, e.g. "dQw4w9WgXcQ")
// 3. Update NEXT_STREAM_DATE with the next planned broadcast date.
const IS_LIVE = false;
const YOUTUBE_VIDEO_ID = 'YOUR_VIDEO_ID_HERE';
const NEXT_STREAM_DATE = 'Sat 28 Jun · 08:00 AEST';
const POSTER_URL =
  'https://boattimeyachtcharters.com/wp-content/uploads/2026/03/EDI_3071-scaled.jpg';

export default function LiveStream() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const els = sectionRef.current?.querySelectorAll('.ls-animate');
      if (!els?.length) return;
      gsap.from(els, {
        y: 28,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          once: true,
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="live" className="ls-section">
      <div className="ls-container">

        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="ls-header ls-animate">
          <div className="section-eyebrow">Live from the Bow</div>
          <div className="ls-title-row">
            <h2 className="ls-title">
              Whale season,{' '}
              <em>live on camera.</em>
            </h2>
            {IS_LIVE ? (
              <div className="ls-live-pill">
                <span className="ls-live-dot" />
                Live Now
              </div>
            ) : (
              <div className="ls-offline-pill">
                Next broadcast · {NEXT_STREAM_DATE}
              </div>
            )}
          </div>
          <p className="ls-subtitle">
            Kirby has mounted a camera to the bow of Sun Goddess — streaming the
            Gold Coast humpback migration straight to your screen. Watch from
            anywhere during whale season.
          </p>
        </div>

        {/* ── Player ─────────────────────────────────────────────── */}
        <div className="ls-player-wrap ls-animate">
          {IS_LIVE ? (
            /* Live state — YouTube embed */
            <div className="ls-iframe-wrap">
              <iframe
                className="ls-iframe"
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&color=white`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="Boattime Whale Watching — Live Cam"
              />
              {/* Live badge — overlaid on top left of player */}
              <div className="ls-player-live-badge">
                <span className="ls-live-dot" />
                Live
              </div>
            </div>
          ) : (
            /* Offline / fallback state */
            <div className="ls-offline-wrap">
              {/* Background poster */}
              <div
                className="ls-offline-bg"
                style={{ backgroundImage: `url(${POSTER_URL})` }}
              />
              <div className="ls-offline-overlay" />
              <div className="ls-scanlines" />

              {/* Centre content */}
              <div className="ls-offline-content">
                <div className="ls-offline-badge">
                  <span className="ls-offline-dot" />
                  <span>Camera Offline</span>
                </div>

                <h3 className="ls-offline-heading">
                  We&apos;re preparing<br />the next broadcast
                </h3>

                <p className="ls-offline-body">
                  Our bow camera launches with whale season. During June&ndash;November
                  you&apos;ll be able to watch humpbacks breach in real time — streamed
                  live from fifty metres off Sun Goddess.
                </p>

                <div className="ls-next-stream">
                  <span className="ls-next-label">Next broadcast</span>
                  <span className="ls-next-date">{NEXT_STREAM_DATE}</span>
                </div>
              </div>

              {/* Gold corner brackets */}
              <span className="ls-corner ls-corner--tl" />
              <span className="ls-corner ls-corner--tr" />
              <span className="ls-corner ls-corner--bl" />
              <span className="ls-corner ls-corner--br" />
            </div>
          )}
        </div>

        {/* ── Info strip below player ─────────────────────────────── */}
        <div className="ls-info-strip ls-animate">
          <div className="ls-info-cell">
            <span className="ls-info-label">Camera position</span>
            <span className="ls-info-value">Bow · Sun Goddess (34 m)</span>
          </div>
          <div className="ls-info-cell">
            <span className="ls-info-label">Departure point</span>
            <span className="ls-info-value">Muriel Henchman · 08:30</span>
          </div>
          <div className="ls-info-cell">
            <span className="ls-info-label">Season</span>
            <span className="ls-info-value">June — November 2026</span>
          </div>
          <div className="ls-info-cell ls-info-cell--cta">
            <Button
              variant="primary"
              href="https://boattimeyachtcharters.com/cruise-tickets-luxury-whale-watching/"
            >
              Book Whale Watching
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
