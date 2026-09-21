/**
 * JSON-LD structured data builders.
 *
 * One place for every schema.org object the site emits, so the business
 * details (name, phone, address, rating) are written down once and reused.
 *
 * Rule: only facts already published on the site go in here. No invented
 * ratings, prices, or review counts.
 */

export const BASE_URL = 'https://www.boattimeyachtcharters.com';

// Stable @id anchors so separate schema blocks can reference the same entity
export const ORG_ID = `${BASE_URL}/#organization`;
export const WEBSITE_ID = `${BASE_URL}/#website`;

const PHONE = '+61477667644';
const EMAIL = 'info@boattimeyachtcharters.com.au';
const LOGO = `${BASE_URL}/boattime-logo.png`;

const SAME_AS = [
  'https://www.facebook.com/boattimeyachtcharters/',
  'https://www.instagram.com/boattimeyachtcharters/',
];

const ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: 'Sea World Drive',
  addressLocality: 'Main Beach',
  addressRegion: 'QLD',
  postalCode: '4217',
  addressCountry: 'AU',
};

// Approximate departure point — Sea World Drive, Main Beach.
const GEO = {
  '@type': 'GeoCoordinates',
  latitude: -27.9689,
  longitude: 153.427,
};

// Published on the site (StatsBar): 1,341 verified reviews, 4.7 average.
const AGGREGATE_RATING = {
  '@type': 'AggregateRating',
  ratingValue: '4.7',
  reviewCount: '1341',
  bestRating: '5',
  worstRating: '1',
};

const AREA_SERVED = [
  { '@type': 'City', name: 'Gold Coast' },
  { '@type': 'City', name: 'Brisbane' },
  { '@type': 'State', name: 'Queensland' },
];

/** The business itself. Emitted once, in the root layout. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'TouristAttraction'],
    '@id': ORG_ID,
    name: 'Boattime Yacht Charters',
    alternateName: 'Boattime',
    description:
      "Gold Coast superyacht charter company operating the Sun Goddess and Mermaid Spirit for private, corporate, and wedding charters, whale watching, and dining cruises.",
    url: BASE_URL,
    logo: { '@type': 'ImageObject', url: LOGO },
    image: `${BASE_URL}/sun-goddess-main-upscale.png`,
    telephone: PHONE,
    email: EMAIL,
    address: ADDRESS,
    geo: GEO,
    areaServed: AREA_SERVED,
    priceRange: '$$$',
    currenciesAccepted: 'AUD',
    aggregateRating: AGGREGATE_RATING,
    sameAs: SAME_AS,
  };
}

/** Site-level entity, enables the sitelinks search box. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: BASE_URL,
    name: 'Boattime Yacht Charters',
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-AU',
  };
}

/** Breadcrumb trail. Pass the path segments below the homepage. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      ...trail.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: crumb.name,
        item: `${BASE_URL}${crumb.path}`,
      })),
    ],
  };
}

type OfferInput = {
  /** Lowest advertised price, as a plain number string, e.g. '99'. */
  price: string;
  /** What the price buys, e.g. 'Adult ticket'. */
  description?: string;
};

function buildOffer(offer: OfferInput) {
  return {
    '@type': 'Offer',
    price: offer.price,
    priceCurrency: 'AUD',
    availability: 'https://schema.org/InStock',
    url: `${BASE_URL}/tickets`,
    ...(offer.description ? { description: offer.description } : {}),
  };
}

type TripInput = {
  name: string;
  description: string;
  path: string;
  image: string;
  /** ISO 8601 duration, e.g. 'PT2H30M'. Omit when it varies. */
  duration?: string;
  offer?: OfferInput;
};

/** A bookable ticketed cruise (whale watching, dining, sunset, event nights). */
export function boatTripSchema(trip: TripInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BoatTrip',
    '@id': `${BASE_URL}${trip.path}/#trip`,
    name: trip.name,
    description: trip.description,
    url: `${BASE_URL}${trip.path}`,
    image: trip.image.startsWith('http') ? trip.image : `${BASE_URL}${trip.image}`,
    provider: { '@id': ORG_ID },
    departureBoatTerminal: {
      '@type': 'BoatTerminal',
      name: 'Sea World Drive, Main Beach',
      address: ADDRESS,
    },
    aggregateRating: AGGREGATE_RATING,
    ...(trip.duration ? { duration: trip.duration } : {}),
    ...(trip.offer ? { offers: buildOffer(trip.offer) } : {}),
  };
}

type ServiceInput = {
  name: string;
  description: string;
  path: string;
  image: string;
  serviceType: string;
};

/** A quote-based charter service (private, corporate, wedding, catering). */
export function serviceSchema(service: ServiceInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}${service.path}/#service`,
    name: service.name,
    description: service.description,
    url: `${BASE_URL}${service.path}`,
    image: service.image.startsWith('http')
      ? service.image
      : `${BASE_URL}${service.image}`,
    serviceType: service.serviceType,
    provider: { '@id': ORG_ID },
    areaServed: AREA_SERVED,
    aggregateRating: AGGREGATE_RATING,
  };
}

type VesselInput = {
  name: string;
  description: string;
  path: string;
  image: string;
  /** e.g. '114 ft' */
  length: string;
  /** Maximum guests aboard. */
  capacity: number;
  /** Additional photographs of the vessel. */
  gallery?: string[];
};

/** One of the two named vessels — the business's main entities. */
export function vesselSchema(vessel: VesselInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${BASE_URL}${vessel.path}/#vessel`,
    name: vessel.name,
    description: vessel.description,
    url: `${BASE_URL}${vessel.path}`,
    image: [vessel.image, ...(vessel.gallery ?? [])].map((src) =>
      src.startsWith('http') ? src : `${BASE_URL}${src}`,
    ),
    category: 'Yacht charter',
    brand: { '@id': ORG_ID },
    aggregateRating: AGGREGATE_RATING,
    additionalProperty: [
      { '@type': 'PropertyValue', name: 'Length', value: vessel.length },
      {
        '@type': 'PropertyValue',
        name: 'Guest capacity',
        value: String(vessel.capacity),
      },
    ],
  };
}

/** FAQ block. Only pass questions and answers already shown on the page. */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
