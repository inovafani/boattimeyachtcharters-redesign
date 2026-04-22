// Real testimonials adapted from Boattime reviews — no emoji, no exclamation points
const reviewStyles = {
  section: { padding: '120px 48px', background: 'var(--navy-mid)', position: 'relative', overflow: 'hidden' },
  bg: { position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 90% 20%, rgba(201,168,76,0.08), transparent 55%)' },
  inner: { maxWidth: 1200, margin: '0 auto', position: 'relative' },
  head: { textAlign: 'center', maxWidth: 720, margin: '0 auto 72px' },
  h: { fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(40px, 5vw, 60px)', lineHeight: 1.05, letterSpacing: '-0.015em', color: 'var(--cream)', margin: 0 },
  ratings: { display: 'flex', justifyContent: 'center', gap: 60, marginTop: 36, paddingTop: 36, borderTop: '1px solid rgba(201,168,76,0.18)' },
  rating: { textAlign: 'center' },
  rn: { fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 300, color: 'var(--gold)', lineHeight: 1 },
  rl: { fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 500, marginTop: 8 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.1)' },
  card: { padding: '48px 36px', background: 'var(--navy-mid)', display: 'flex', flexDirection: 'column', minHeight: 340 },
  stars: { display: 'flex', gap: 4, marginBottom: 24 },
  quote: { fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 300, color: 'var(--cream)', lineHeight: 1.45, letterSpacing: '-0.005em', marginBottom: 28, flex: 1 },
  em: { fontStyle: 'italic', color: 'var(--gold-light)' },
  meta: { display: 'flex', alignItems: 'center', gap: 14, paddingTop: 24, borderTop: '1px solid rgba(201,168,76,0.15)' },
  avatar: { width: 38, height: 38, background: 'var(--ocean)', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 16, border: '1px solid rgba(201,168,76,0.3)' },
  name: { fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--cream)', fontWeight: 500, letterSpacing: '0.04em' },
  source: { fontFamily: 'var(--font-body)', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: 2, fontWeight: 500 },
};

const REVIEWS = [
  { quote: <>Hands down the best whale watching in south east Queensland. Informative without overwhelming — we watched them <ItalicEm>breach</ItalicEm> several times. Unforgettable.</>, name: 'Gleyn Hernandez', source: 'Google · Whale Watching' },
  { quote: <>An amazing experience visiting from England. Never imagined I&rsquo;d see so many whales and a pod of <ItalicEm>dolphins</ItalicEm>. The crew made us feel genuinely welcome.</>, name: 'Alex', source: 'Google · Whale Watching' },
  { quote: <>My first time on the Gold Coast. Booking was simple, staff responsive, and the humpbacks came <ItalicEm>close</ItalicEm>. Well worth the trip.</>, name: 'Sherwin N', source: 'Google · Day Charter' },
];

const Stars = () => (
  <div style={reviewStyles.stars}>
    {[0,1,2,3,4].map(i => <Icon key={i} name="star" size={12} color="var(--gold)"/>)}
  </div>
);

const Reviews = () => (
  <section style={reviewStyles.section}>
    <div style={reviewStyles.bg}/>
    <div style={reviewStyles.inner}>
      <div style={reviewStyles.head}>
        <Eyebrow>Guest Book</Eyebrow>
        <h2 style={reviewStyles.h}>Most reviews <ItalicEm>in the</ItalicEm> industry.</h2>
        <div style={reviewStyles.ratings}>
          <div style={reviewStyles.rating}><div style={reviewStyles.rn}>5.0</div><div style={reviewStyles.rl}>Facebook · 2,047 reviews</div></div>
          <div style={reviewStyles.rating}><div style={reviewStyles.rn}>4.7</div><div style={reviewStyles.rl}>Google · 1,863 reviews</div></div>
          <div style={reviewStyles.rating}><div style={reviewStyles.rn}>12<span style={{fontStyle:'italic',fontSize:22}}>yr</span></div><div style={reviewStyles.rl}>On the water</div></div>
        </div>
      </div>
      <div style={reviewStyles.grid}>
        {REVIEWS.map((r, i) => (
          <div key={i} style={reviewStyles.card}>
            <Stars/>
            <div style={reviewStyles.quote}>{r.quote}</div>
            <div style={reviewStyles.meta}>
              <div style={reviewStyles.avatar}>{r.name[0]}</div>
              <div>
                <div style={reviewStyles.name}>{r.name}</div>
                <div style={reviewStyles.source}>{r.source}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
window.Reviews = Reviews;
