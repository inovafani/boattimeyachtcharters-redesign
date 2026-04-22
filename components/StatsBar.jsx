const statsStyles = {
  bar: {
    background: 'var(--gold)', padding: '64px 48px',
    display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40,
    position: 'relative',
  },
  divider: {
    position: 'absolute', left: '25%', top: 40, bottom: 40, width: 1,
    background: 'rgba(10,22,40,0.15)',
  },
  stat: { display: 'flex', flexDirection: 'column', gap: 12, position: 'relative' },
  e: { fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--navy)', opacity: 0.55, fontWeight: 500 },
  n: {
    fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 76,
    color: 'var(--navy)', lineHeight: 1, letterSpacing: '-0.02em',
  },
  suffix: { fontStyle: 'italic', fontSize: 38, marginLeft: 2, color: 'var(--navy)', opacity: 0.85 },
  l: {
    fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.25em',
    textTransform: 'uppercase', color: 'var(--navy)', opacity: 0.7, fontWeight: 500,
  },
};

const STATS = [
  { e: 'Est. 2014', n: '12', s: 'yr', l: 'On the water' },
  { e: 'The fleet', n: '02', s: null, l: 'Superyachts' },
  { e: 'Guest capacity', n: '135', s: null, l: 'Maximum pax' },
  { e: 'Rating', n: '4.9', s: null, l: 'From 3,900 reviews' },
];

const StatsBar = () => (
  <section style={statsStyles.bar}>
    {STATS.map((s, i) => (
      <div key={i} style={statsStyles.stat}>
        <div style={statsStyles.e}>{s.e}</div>
        <div style={statsStyles.n}>{s.n}{s.s && <span style={statsStyles.suffix}>{s.s}</span>}</div>
        <div style={statsStyles.l}>{s.l}</div>
      </div>
    ))}
  </section>
);
window.StatsBar = StatsBar;
