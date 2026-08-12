/**
 * Kai — AI booking assistant.
 *
 * Kai is a separate, already-deployed service. It does NOT send CORS headers, so the browser
 * cannot call it directly. Everything here runs on our server only: our /api/kai/* routes call
 * these helpers, and our chat widget calls those routes same-origin.
 *
 * The widget key never leaves the server.
 */

/* ── Config ──────────────────────────────────────────────────────────────── */

type KaiConfig = {
  baseUrl: string;
  widgetKey: string;
  origin: string;
};

export function resolveKaiConfig(): KaiConfig {
  const baseUrl = process.env.KAI_API_BASE_URL;
  const widgetKey = process.env.KAI_WIDGET_KEY;
  const origin = process.env.KAI_ORIGIN;

  if (!baseUrl || !widgetKey || !origin) {
    throw new Error(
      'Kai is not configured — set KAI_API_BASE_URL, KAI_WIDGET_KEY and KAI_ORIGIN.',
    );
  }

  return { baseUrl: baseUrl.replace(/\/$/, ''), widgetKey, origin };
}

/* ── Types ───────────────────────────────────────────────────────────────── */

/**
 * Shape of Kai's GET /api/widget/config as it actually responds today.
 *
 * Note: the integration brief listed `capabilities.supportedLocales`, but the live API does not
 * return that field — it returns `supportedChannels` plus `bookingMode`. Flagged to the Kai side.
 * Everything the UI reads is optional so a shape change on their end degrades instead of crashing.
 */
export type KaiWidgetConfig = {
  tenant: { slug: string; name: string; defaultLocale: string };
  branding: {
    widgetTitle: string;
    welcomeMessage: string;
    // Deliberately unused — we style the widget with our own navy/gold tokens. Kai's branding
    // fields are a fallback for tenants without their own site.
    primaryColor?: string;
    logoUrl?: string | null;
  };
  capabilities?: {
    supportedChannels?: string[];
    enabledFeatures?: string[];
    bookingMode?: string;
    pmsProvider?: string;
  };
};

export type KaiProductCard = {
  slug: string;
  title: string;
  description: string;
  bookingMode?: 'MANUAL_INQUIRY' | 'AUTO_BOOKING';
  productUrl?: string | null;
  priceLabel?: string | null;
  dateChecked?: boolean;
};

export type KaiPaymentRequest = {
  conversationId: string;
  productTitle: string | null;
  dateText: string | null;
  guests: number | null;
  checkoutUrl: string | null;
  status: 'PAYMENT_PENDING';
};

export type KaiContactRequest = {
  conversationId: string;
  fields: ['name', 'email', 'phone'];
  status: 'CONTACT_DETAILS_REQUIRED';
};

export type KaiMessageResponse = {
  message?: { id: string; role: 'TRAVELLER'; content: string; conversationId: string };
  assistantMessage?: { id: string; role: 'ASSISTANT'; content: string; conversationId: string };
  manualInquiry?: unknown | null;
  paymentRequest?: KaiPaymentRequest | null;
  contactRequest?: KaiContactRequest | null;
  productCards?: KaiProductCard[] | null;
};

/** What our own /api/kai/messages route hands back to the widget. */
export type KaiChatTurn = {
  reply: string;
  productCards: KaiProductCard[];
  contactRequest: KaiContactRequest | null;
  paymentRequest: KaiPaymentRequest | null;
};

/* ── Fetch helper ────────────────────────────────────────────────────────── */

/**
 * One server-to-server call to Kai. The `origin` header is what Kai checks against its per-tenant
 * allowlist — a 403 with code ORIGIN_NOT_ALLOWED means KAI_ORIGIN isn't allowlisted on their side.
 */
async function kaiFetch(path: string, init: RequestInit, config: KaiConfig) {
  const response = await fetch(`${config.baseUrl}${path}`, {
    ...init,
    headers: { 'Content-Type': 'application/json', origin: config.origin },
    cache: 'no-store',
  });

  if (!response.ok) {
    const body = await response.text().catch(() => '');
    throw new Error(`Kai returned ${response.status} for ${path}. ${body.slice(0, 300)}`);
  }

  return response.json();
}

export async function fetchKaiConfig(): Promise<KaiWidgetConfig> {
  const config = resolveKaiConfig();

  return (await kaiFetch(
    `/api/widget/config?key=${encodeURIComponent(config.widgetKey)}`,
    { method: 'GET' },
    config,
  )) as KaiWidgetConfig;
}

export async function createKaiConversation(): Promise<string> {
  const config = resolveKaiConfig();
  const data = (await kaiFetch(
    '/api/widget/session',
    { method: 'POST', body: JSON.stringify({ key: config.widgetKey }) },
    config,
  )) as { conversation?: { id?: string } };

  const conversationId = data.conversation?.id;
  if (!conversationId) {
    throw new Error('Kai session response did not include a conversation id.');
  }

  return conversationId;
}

export async function sendKaiMessage(input: {
  conversationId: string;
  content: string;
}): Promise<KaiChatTurn> {
  const config = resolveKaiConfig();
  const data = (await kaiFetch(
    '/api/widget/messages',
    {
      method: 'POST',
      body: JSON.stringify({
        key: config.widgetKey,
        conversationId: input.conversationId,
        content: input.content,
      }),
    },
    config,
  )) as KaiMessageResponse;

  return {
    reply: data.assistantMessage?.content ?? 'Sorry, I did not catch that. Could you try again?',
    productCards: data.productCards ?? [],
    contactRequest: data.contactRequest ?? null,
    paymentRequest: data.paymentRequest ?? null,
  };
}
