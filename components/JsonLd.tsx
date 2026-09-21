/**
 * Renders one or more schema.org objects as <script type="application/ld+json">.
 * Server component — the markup ships in the initial HTML so crawlers see it.
 */
export default function JsonLd({ schemas }: { schemas: object[] }) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
