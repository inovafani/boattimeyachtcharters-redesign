/** Meeting point address + map. Shared by every cruise page so guests can find the marina. */
export default function DepartureLocation() {
  return (
    <div
      className="light-adapt-section"
      style={{
        background: "var(--navy)",
        borderBottom: "1px solid rgba(201,168,76,0.08)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 48px" }}>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(245,240,232,0.35)",
            marginBottom: 14,
          }}
        >
          Departure Location
        </div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 14,
            lineHeight: 1.6,
            color: "rgba(245,240,232,0.75)",
            margin: "0 0 18px",
          }}
        >
          Marina Mirage Seaworld Drive, Main Beach,
          Gold Coast
        </p>
        <div
          style={{
            position: "relative",
            width: "100%",
            borderRadius: 4,
            overflow: "hidden",
            border: "1px solid rgba(201,168,76,0.12)",
          }}
        >
          <iframe
            src="https://maps.google.com/maps?q=-27.9695146,153.4236605&z=17&output=embed"
            width="100%"
            height="300"
            style={{
              display: "block",
              border: "none",
              filter: "grayscale(30%) contrast(1.05)",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Departure point — Marina Mirage Seaworld Drive, Main Beach, Gold Coast"
          />
        </div>
        <div style={{ marginTop: 12, textAlign: "right" }}>
          <a
            href="https://maps.app.goo.gl/YfFtWCqNqBe8wKYv9"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--gold)",
              textDecoration: "none",
            }}
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
}
