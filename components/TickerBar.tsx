'use client';

import { useEffect, useState } from 'react';

function getSunsetTime() {
  // Approximate Gold Coast sunset — varies ~17:20–18:45 through the year
  const month = new Date().getMonth(); // 0–11
  const sunsets = [18, 18, 18, 17, 17, 17, 17, 17, 17, 18, 18, 18];
  const mins = [45, 30, 5, 45, 30, 20, 25, 40, 55, 10, 25, 40];
  const h = sunsets[month];
  const m = mins[month];
  return `${h}:${String(m).padStart(2, '0')}`;
}

const ITEMS = [
  { label: "Today's Sunset", value: getSunsetTime(), accent: true },
  { label: 'Sea State', value: 'Calm · 0.4m' },
  { label: 'Next Whale', value: 'Sat 08:30 · Sun Goddess' },
  { label: 'Availability', value: '3 dates this week' },
];

export default function TickerBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="ticker-bar-wrap"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: 'rgba(10,22,40,0.97)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderTop: '1px solid rgba(201,168,76,0.14)',
        transform: visible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.4s cubic-bezier(0.2,0.6,0.2,1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 48px',
        height: 52,
        gap: 24,
      }}
    >
      {/* Status items */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexShrink: 0 }}>
        {ITEMS.map((item) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 9,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'rgba(245,240,232,0.45)',
              }}
            >
              {item.label}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 11,
                letterSpacing: '0.1em',
                color: item.accent ? 'var(--gold)' : 'rgba(245,240,232,0.9)',
                fontWeight: item.accent ? 600 : 400,
              }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Reserve CTA */}
      <a
        href="/#inquiry"
        style={{
          flexShrink: 0,
          fontFamily: 'var(--font-body)',
          fontSize: 9,
          letterSpacing: '0.26em',
          textTransform: 'uppercase',
          fontWeight: 600,
          color: '#0A1628',
          background: '#C9A84C',
          padding: '10px 24px',
          textDecoration: 'none',
          transition: 'background 0.2s',
          whiteSpace: 'nowrap',
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#E8C97A')}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#C9A84C')}
      >
        Reserve
      </a>
    </div>
  );
}
