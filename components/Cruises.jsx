// Cruise mosaic — asymmetric grid with real photography, inspired by reference layout
const cruiseStyles = {
  section: { padding: '120px 48px', background: 'var(--navy)' },
  inner: { maxWidth: 1440, margin: '0 auto' },
  head: { textAlign: 'center', maxWidth: 780, margin: '0 auto 72px' },
  h: { fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(44px, 5.5vw, 72px)', lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--cream)', margin: 0 },
  sub: { fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-muted)', marginTop: 22, lineHeight: 1.7 },
  mosaic: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridAutoRows: '200px',
    gap: 2,
  },
  card: { position: 'relative', overflow: 'hidden', cursor: 'pointer', background: 'var(--ocean)' },
  img: (url) => ({
    position: 'absolute', inset: 0,
    backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'center',
    transition: 'transform 0.8s cubic-bezier(.2,.6,.2,1)',
  }),
  ovl: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.2) 55%, rgba(10,22,40,0.05) 100%)' },
  ovlLight: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,22,40,0.75) 0%, rgba(10,22,40,0.1) 60%)' },
  copy: { position: 'absolute', left: 28, right: 28, bottom: 28 },
  copyLg: { left: 40, right: 40, bottom: 36 },
  cat: { fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: 12 },
  t: { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 26, color: 'var(--cream)', lineHeight: 1.15, marginBottom: 10, letterSpacing: '-0.01em' },
  tLg: { fontSize: 42, marginBottom: 14 },
  em: { fontStyle: 'italic', color: 'var(--gold-light)' },
  body: { fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(245,240,232,0.75)', lineHeight: 1.65, marginBottom: 16, maxWidth: 380 },
  meta: { display: 'flex', gap: 16, flexWrap: 'wrap', fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 },
  metaItem: { display: 'inline-flex', alignItems: 'center', gap: 6 },
};

// Each card: col span, row span, lg (expanded copy), image url
const CRUISES = [
  {
    cat: 'Whale Season', t: 'Luxury whale', em: 'watching',
    body: 'Meet the humpbacks from the foredeck of Sun Goddess. Breach season June through October.',
    dur: '4 hrs', vessel: 'Sun Goddess', lg: true,
    col: 'span 7', row: 'span 2',
    img: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=1600&q=80',
  },
  {
    cat: 'Sunset', t: 'Broadwater', em: 'sunset cruise',
    body: null, dur: '2.5 hrs', vessel: 'Sun Goddess',
    col: 'span 5', row: 'span 2',
    img: 'https://images.unsplash.com/photo-1506016476100-de90e7547c05?w=1400&q=80',
  },
  {
    cat: 'Galley', t: 'Relaxed', em: 'lunch cruise',
    body: null, dur: '3 hrs', vessel: 'Mermaid Spirit',
    col: 'span 4', row: 'span 2',
    img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
  },
  {
    cat: 'Event', t: 'Riverfire', em: '2026',
    body: null, dur: '4 hrs', vessel: 'Mermaid Spirit',
    col: 'span 5', row: 'span 2',
    img: 'https://images.unsplash.com/photo-1498354178607-a79df2916198?w=1400&q=80',
  },
  {
    cat: 'Celebration', t: 'New Year&rsquo;s', em: 'Eve 2026',
    body: null, dur: '5 hrs', vessel: 'Mermaid Spirit',
    col: 'span 3', row: 'span 2',
    img: 'https://images.unsplash.com/photo-1546271876-af6caec5fae4?w=1200&q=80',
  },
  {
    cat: 'Romance', t: 'Valentine&rsquo;s', em: 'evening',
    body: null, dur: '3 hrs', vessel: 'Mermaid Spirit',
    col: 'span 4', row: 'span 2',
    img: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1200&q=80',
  },
  {
    cat: 'Dining', t: 'Sunset twilight', em: 'buffet',
    body: null, dur: '3.5 hrs', vessel: 'Mermaid Spirit',
    col: 'span 8', row: 'span 2',
    img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1800&q=80',
  },
];

const CruiseCard = ({ c }) => {
  const [h, setH] = React.useState(false);
  return (
    <div style={{ ...cruiseStyles.card, gridColumn: c.col, gridRow: c.row }}
         onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      <div style={{ ...cruiseStyles.img(c.img), transform: h ? 'scale(1.06)' : 'scale(1)' }}/>
      <div style={c.lg ? cruiseStyles.ovl : cruiseStyles.ovl}/>
      <div style={{ ...cruiseStyles.copy, ...(c.lg ? cruiseStyles.copyLg : {}) }}>
        <div style={cruiseStyles.cat}>{c.cat}</div>
        <div style={{ ...cruiseStyles.t, ...(c.lg ? cruiseStyles.tLg : {}) }}>
          <span dangerouslySetInnerHTML={{__html: c.t}}/> <span style={cruiseStyles.em}>{c.em}</span>
        </div>
        {c.body && <p style={cruiseStyles.body}>{c.body}</p>}
        <div style={cruiseStyles.meta}>
          <span style={cruiseStyles.metaItem}><Icon name="clock" size={10} color="var(--gold)"/> {c.dur}</span>
          <span style={cruiseStyles.metaItem}><Icon name="anchor" size={10} color="var(--gold)"/> {c.vessel}</span>
        </div>
      </div>
    </div>
  );
};

const Cruises = () => (
  <section style={cruiseStyles.section} id="cruises">
    <div style={cruiseStyles.inner}>
      <div style={cruiseStyles.head}>
        <Eyebrow>Cruise Tickets</Eyebrow>
        <h2 style={cruiseStyles.h}>Choose your <ItalicEm>afternoon</ItalicEm>.</h2>
        <p style={cruiseStyles.sub}>Seven scheduled cruises running year-round from Marina Mirage — from whale season mornings to New Year&rsquo;s Eve on three decks.</p>
      </div>
      <div style={cruiseStyles.mosaic}>
        {CRUISES.map(c => <CruiseCard key={c.t + c.em} c={c}/>)}
      </div>
    </div>
  </section>
);
window.Cruises = Cruises;
