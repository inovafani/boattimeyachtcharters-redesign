// Charter types — photo-backed cards
const charterStyles = {
  section: { padding: '120px 48px', maxWidth: 1440, margin: '0 auto' },
  head: { textAlign: 'center', maxWidth: 780, margin: '0 auto 64px' },
  h: { fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(44px, 5.5vw, 72px)', lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--cream)', margin: 0 },
  sub: { fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-muted)', marginTop: 22, lineHeight: 1.7 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 2 },
  card: { position: 'relative', minHeight: 440, aspectRatio: '3/4', overflow: 'hidden', cursor: 'pointer', background: 'var(--ocean)' },
  img: (url) => ({
    position: 'absolute', inset: 0,
    backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'center',
    transition: 'transform 0.8s cubic-bezier(.2,.6,.2,1)',
  }),
  ovl: { position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.4) 55%, rgba(10,22,40,0.15) 100%)' },
  corner: { position: 'absolute', top: 22, right: 26, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 18, color: 'var(--gold)', fontWeight: 300, letterSpacing: '0.08em', opacity: 0.9 },
  copy: { position: 'absolute', left: 28, right: 28, bottom: 32 },
  e: { fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, marginBottom: 14 },
  t: { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 30, color: 'var(--cream)', lineHeight: 1.1, marginBottom: 14, letterSpacing: '-0.01em' },
  em: { fontStyle: 'italic', color: 'var(--gold-light)' },
  body: { fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(245,240,232,0.78)', lineHeight: 1.65, marginBottom: 22 },
  link: { fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 10 },
};

const CHARTERS = [
  { i: '01', e: 'Private', t: 'Your', em: 'afternoon', body: 'Up to 135 guests. Half-day or full-day on the Broadwater. BBQ, watersports, a swim stop at Wavebreak.', img: 'https://images.unsplash.com/photo-1605281317010-fe5ffe798166?w=1200&q=80' },
  { i: '02', e: 'Corporate', t: 'Your', em: 'function', body: 'Client events, team offsites, product launches. Dual bars, sound throughout, curated catering.', img: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&q=80' },
  { i: '03', e: 'Weddings', t: 'Your', em: 'ceremony', body: 'Ceremony on the foredeck, reception across three decks. Florals, celebrant, and the line the captain reads.', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80' },
  { i: '04', e: 'Galley', t: 'Your', em: 'menu', body: 'Grazing boards, canapés, gourmet BBQ, fine dining. Curated with Private Chefs of Brisbane.', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80' },
];

const CharterCard = ({ c }) => {
  const [h, setH] = React.useState(false);
  return (
    <div style={charterStyles.card} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      <div style={{ ...charterStyles.img(c.img), transform: h ? 'scale(1.06)' : 'scale(1)' }}/>
      <div style={charterStyles.ovl}/>
      <div style={charterStyles.corner}>{c.i}</div>
      <div style={charterStyles.copy}>
        <div style={charterStyles.e}>{c.e}</div>
        <div style={charterStyles.t}>{c.t} <span style={charterStyles.em}>{c.em}</span></div>
        <p style={charterStyles.body}>{c.body}</p>
        <a style={charterStyles.link}>Enquire <Icon name="arrow" size={11} color="var(--gold)"/></a>
      </div>
    </div>
  );
};

const Charters = () => (
  <section style={charterStyles.section}>
    <div style={charterStyles.head}>
      <Eyebrow>Yacht Charters</Eyebrow>
      <h2 style={charterStyles.h}>Tailored for <ItalicEm>every occasion</ItalicEm>.</h2>
      <p style={charterStyles.sub}>From intimate sunset proposals to full-vessel corporate events — every charter is bespoke, every afternoon written to your brief.</p>
    </div>
    <div style={charterStyles.grid}>
      {CHARTERS.map(c => <CharterCard key={c.i} c={c}/>)}
    </div>
  </section>
);
window.Charters = Charters;
