// Destinations — Gold Coast + Moreton Bay landing spots
const destStyles = {
  section: { padding: '120px 48px', background: 'var(--navy)', position: 'relative', overflow: 'hidden' },
  bg: { position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 15% 30%, rgba(201,168,76,0.06), transparent 50%)' },
  inner: { maxWidth: 1200, margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start' },
  h: { fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(40px, 4.5vw, 60px)', lineHeight: 1, letterSpacing: '-0.015em', color: 'var(--cream)', margin: '0 0 28px' },
  em: { fontStyle: 'italic', color: 'var(--gold-light)', fontWeight: 400 },
  body: { fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 32, maxWidth: 440 },
  twoCol: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 },
  colHead: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid rgba(201,168,76,0.2)' },
  colNum: { fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 18, color: 'var(--gold)' },
  colTitle: { fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 },
  place: {
    display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0',
    borderBottom: '1px solid rgba(245,240,232,0.06)',
    fontFamily: 'var(--font-display)', fontSize: 22, color: 'var(--cream)', fontWeight: 400, letterSpacing: '-0.01em',
  },
  placeNum: { fontFamily: 'var(--font-body)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.15em', fontWeight: 400, minWidth: 26 },
};

const DESTS = {
  gc: ['Wave Break Island', 'Sanctuary Cove', 'Jumpinpin', 'Scottish Prince Wreck', 'Sovereign Islands'],
  mb: ['Brisbane River', 'Tangalooma', 'Moreton Island', 'Stradbroke Island'],
};

const Destinations = () => (
  <section style={destStyles.section}>
    <div style={destStyles.bg}/>
    <div style={destStyles.inner}>
      <div>
        <Eyebrow>Destinations</Eyebrow>
        <h2 style={destStyles.h}>Where<br/>we <ItalicEm>anchor</ItalicEm>.</h2>
        <p style={destStyles.body}>
          We run the calm, protected waters of the Gold Coast Broadwater — and when conditions invite,
          we push north into Moreton Bay. Your skipper reads the day and writes the line.
        </p>
        <Button variant="outline">Plan a Route</Button>
      </div>
      <div style={destStyles.twoCol}>
        <div>
          <div style={destStyles.colHead}>
            <span style={destStyles.colNum}>i.</span>
            <span style={destStyles.colTitle}>Gold Coast</span>
          </div>
          {DESTS.gc.map((p, i) => (
            <div key={p} style={destStyles.place}>
              <span style={destStyles.placeNum}>0{i + 1}</span>{p}
            </div>
          ))}
        </div>
        <div>
          <div style={destStyles.colHead}>
            <span style={destStyles.colNum}>ii.</span>
            <span style={destStyles.colTitle}>Moreton Bay</span>
          </div>
          {DESTS.mb.map((p, i) => (
            <div key={p} style={destStyles.place}>
              <span style={destStyles.placeNum}>0{i + 1}</span>{p}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
window.Destinations = Destinations;
