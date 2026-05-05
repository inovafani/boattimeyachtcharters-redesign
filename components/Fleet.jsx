// Two-yacht showcase with real photography
const fleetStyles = {
  section: { padding: '120px 48px', background: 'var(--navy-mid)' },
  inner: { maxWidth: 1440, margin: '0 auto' },
  head: { textAlign: 'center', maxWidth: 780, margin: '0 auto 64px' },
  h: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 'clamp(44px, 5.5vw, 72px)',
    lineHeight: 1,
    letterSpacing: '-0.015em',
    color: 'var(--cream)',
    margin: 0,
  },
  sub: {
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    color: 'var(--text-muted)',
    marginTop: 22,
    lineHeight: 1.7,
  },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 },
  card: {
    position: 'relative',
    aspectRatio: '4/5',
    overflow: 'hidden',
    cursor: 'pointer',
    background: 'var(--ocean)',
  },
  img: (url) => ({
    position: 'absolute',
    inset: 0,
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'transform 0.8s cubic-bezier(.2,.6,.2,1)',
  }),
  ovl: {
    position: 'absolute',
    inset: 0,
    background:
      'linear-gradient(to top, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.35) 50%, rgba(10,22,40,0.1) 100%)',
  },
  copy: { position: 'absolute', left: 44, right: 44, bottom: 44 },
  e: {
    fontFamily: 'var(--font-body)',
    fontSize: 10,
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    color: 'var(--gold)',
    fontWeight: 500,
    marginBottom: 14,
  },
  t: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 54,
    color: 'var(--cream)',
    lineHeight: 1,
    marginBottom: 18,
    letterSpacing: '-0.015em',
  },
  em: { fontStyle: 'italic', color: 'var(--gold-light)' },
  body: {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    color: 'rgba(245,240,232,0.78)',
    lineHeight: 1.7,
    marginBottom: 28,
    maxWidth: 440,
  },
  specs: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, auto)',
    gap: 36,
    paddingTop: 22,
    borderTop: '1px solid rgba(201,168,76,0.28)',
    marginBottom: 28,
  },
  spec: { display: 'flex', flexDirection: 'column', gap: 6 },
  specKey: {
    fontFamily: 'var(--font-body)',
    fontSize: 9,
    letterSpacing: '0.28em',
    textTransform: 'uppercase',
    color: 'var(--gold)',
    fontWeight: 500,
  },
  specVal: {
    fontFamily: 'var(--font-display)',
    fontSize: 24,
    color: 'var(--cream)',
    fontWeight: 400,
  },
  link: {
    fontFamily: 'var(--font-body)',
    fontSize: 10,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: 'var(--gold)',
    fontWeight: 600,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 12,
    cursor: 'pointer',
  },
};

const YACHTS = [
  {
    eye: '34m · 114ft Superyacht',
    name: 'Sun Goddess',
    em: 'head-turner',
    body: 'Sleek, stylish, unmistakable on the Broadwater. Dual bars, two decks, a dual-level galley, and sound throughout — room to breathe without giving up a thing.',
    specs: [
      ['Guests', '150'],
      ['Length', '34m'],
      ['Decks', 'Two'],
    ],
    img: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1600&q=80',
  },
  {
    eye: '30m · 100ft Tri-Deck',
    name: 'Mermaid Spirit',
    em: 'spacious',
    body: 'A tri-deck catamaran built for functions and celebrations. Three decks, a chef&rsquo;s kitchen, sun lounge, dual bars — the ultimate entertaining venue on the coast.',
    specs: [
      ['Guests', '100'],
      ['Length', '30m'],
      ['Decks', 'Three'],
    ],
    img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&q=80',
  },
];

const YachtCard = ({ y }) => {
  const [h, setH] = React.useState(false);
  return (
    <div
      style={fleetStyles.card}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      <div
        style={{
          ...fleetStyles.img(y.img),
          transform: h ? 'scale(1.06)' : 'scale(1)',
        }}
      />
      <div style={fleetStyles.ovl} />
      <div style={fleetStyles.copy}>
        <div style={fleetStyles.e}>{y.eye}</div>
        <div style={fleetStyles.t}>
          {y.name.split(' ')[0]}{' '}
          <span style={fleetStyles.em}>
            {y.name.split(' ').slice(1).join(' ')}
          </span>
        </div>
        <p
          style={fleetStyles.body}
          dangerouslySetInnerHTML={{ __html: y.body }}
        />
        <div style={fleetStyles.specs}>
          {y.specs.map(([k, v]) => (
            <div key={k} style={fleetStyles.spec}>
              <div style={fleetStyles.specKey}>{k}</div>
              <div style={fleetStyles.specVal}>{v}</div>
            </div>
          ))}
        </div>
        <a style={fleetStyles.link}>
          Step aboard <Icon name="arrow" size={12} color="var(--gold)" />
        </a>
      </div>
    </div>
  );
};

const Fleet = () => (
  <section style={fleetStyles.section} id="fleet">
    <div style={fleetStyles.inner}>
      <div style={fleetStyles.head}>
        <Eyebrow>Our Yachts</Eyebrow>
        <h2 style={fleetStyles.h}>
          Two superyachts. <ItalicEm>One</ItalicEm> unhurried coastline.
        </h2>
        <p style={fleetStyles.sub}>
          Sun Goddess for head-turning arrivals. Mermaid Spirit for three decks
          of celebration. Both berthed at Marina Mirage, ready for your
          afternoon.
        </p>
      </div>
      <div style={fleetStyles.grid}>
        {YACHTS.map((y) => (
          <YachtCard key={y.name} y={y} />
        ))}
      </div>
    </div>
  </section>
);
window.Fleet = Fleet;
