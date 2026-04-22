// Ready to set sail — full-bleed CTA band with real photo
const ctaStyles = {
  section: { position: 'relative', minHeight: 520, overflow: 'hidden', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '120px 48px' },
  img: {
    position: 'absolute', inset: 0,
    backgroundImage: 'url(https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=2400&q=80)',
    backgroundSize: 'cover', backgroundPosition: 'center',
  },
  ovl: { position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,22,40,0.7) 0%, rgba(10,22,40,0.55) 50%, rgba(10,22,40,0.85) 100%)' },
  inner: { position: 'relative', maxWidth: 780, textAlign: 'center' },
  h: { fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(48px, 6vw, 88px)', lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--cream)', margin: '20px 0 28px' },
  em: { fontStyle: 'italic', color: 'var(--gold-light)', fontWeight: 400 },
  body: { fontFamily: 'var(--font-body)', fontSize: 17, color: 'rgba(245,240,232,0.85)', lineHeight: 1.7, marginBottom: 40, maxWidth: 540, marginLeft: 'auto', marginRight: 'auto' },
  btns: { display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' },
};

const CtaBand = ({ onInquiry, onCruises }) => (
  <section style={ctaStyles.section}>
    <div style={ctaStyles.img}/>
    <div style={ctaStyles.ovl}/>
    <div style={ctaStyles.inner}>
      <Eyebrow>Ready when you are</Eyebrow>
      <h2 style={ctaStyles.h}>Ready to <ItalicEm>set sail</ItalicEm>?</h2>
      <p style={ctaStyles.body}>
        Every charter begins with a conversation. Share the afternoon you have in mind —
        our concierge replies within the hour.
      </p>
      <div style={ctaStyles.btns}>
        <Button variant="primary" onClick={onInquiry}>Booking Enquiry</Button>
        <Button variant="ghost" onClick={onCruises}>Browse Cruise Tickets</Button>
      </div>
    </div>
  </section>
);
window.CtaBand = CtaBand;
