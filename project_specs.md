# Project Specs — Boattime Yacht Charters Website

## What the app does and who uses it

A luxury marketing website for Boattime Yacht Charters (Gold Coast & Brisbane, AU). Visitors browse cruise experiences, learn about the fleet, and submit booking enquiries. An admin dashboard lets the Boattime team publish and manage news articles without touching code.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3 + CSS custom properties (brand tokens)
- **Animations:** GSAP 3 + ScrollTrigger + @gsap/react
- **Fonts:** next/font/google — Cormorant Garamond, Montserrat
- **Deployment:** Vercel
- **Backend:** Supabase (Postgres + Auth + RLS)
- **Supabase packages:** `@supabase/supabase-js`, `@supabase/ssr`

## Pages & User Flows

### Public
1. `/` — Home page (all existing sections)
2. `/boattime-news` — News listing (fetches published posts from Supabase)

### Admin (requires login)
1. `/admin` — Login page (email + password via Supabase Auth)
2. `/admin/news` — Article list: see all posts, toggle published, delete
3. `/admin/news/new` — Create a new article
4. `/admin/news/[id]` — Edit an existing article

Admin routes are protected via middleware — unauthenticated users are redirected to `/admin`.

## Campaign Page — Sky to Sea (Boattime × Gold Coast Helitours)

### What it is & who uses it
A standalone partnership sales/landing page at **`/humpbackhelitours`** promoting a co-branded bundle between **Boattime Yacht Charters** and **Gold Coast Helitours** — witnessing humpback whales from both a luxury yacht (sea) and a helicopter (sky). Built for ad/social traffic; conversion-focused, premium, single-scroll.

### Tech & conventions (matches existing campaign pages)
- Route `app/humpbackhelitours/page.tsx` (metadata only) → renders client component `components/CampaignSkyToSea.tsx`.
- Same design system: `var(--navy)` / `var(--gold)` tokens, Cormorant + Montserrat, GSAP Ken-Burns + parallax hero, inline-styled sections, `Nav` + `Footer` wrappers, Rezdy `<Script>` + `<iframe>` booking widget.
- Co-brand touch: dual logo lockup (Boattime + Gold Coast Helitours), a gold "partnership" eyebrow, subtle heli/sea split motifs — Boattime navy/gold stays the dominant identity.

### Sections (top → bottom)
1. **Hero** — Ken-Burns bg (whale/ocean image as placeholder for a future heli-over-water shot), partnership eyebrow, headline *"Sky to Sea — The Ultimate Gold Coast Experience"* + sub *"Two ways to witness one of nature's greatest journeys."*, dual-brand lockup, primary CTA **Book Now** (→ `#book`), bottom info bar (season / duration / departs / price-from).
2. **The Partnership** — short intro: Boattime (sea) × Gold Coast Helitours (sky) co-present one bundle.
3. **The Experience** — the two halves as cards (Sky: ~scenic heli flight; Sea: luxury whale-watch cruise) + "How it works" 3–4 step timeline.
4. **What's Included** — gold-tick inclusion list (both operators).
5. **Pricing** — bundle price card(s) (dummy figures, clearly placeholder).
6. **Social Proof** — Facebook + Google star blocks (reused pattern) and 2–3 testimonials.
7. **Book Now** (`#book`) — Rezdy iframe (dummy `src` placeholder until the real product exists).

### Decisions / defaults (open to change)
- **Not added to the main nav** (standalone campaign page, like Riverfire/NYE landing patterns for ad traffic). Can be added on request.
- **Helicopter imagery**: none in `/public` yet → styled placeholder block + whale/ocean photos used now; swap in real heli shot when supplied.
- **Rezdy widget**: dummy iframe/placeholder — real product URL to be supplied.
- **Pricing & exact inclusions**: placeholder copy — to be confirmed with Gold Coast Helitours.

### What "done" looks like (this page)
- `npm run build` passes, no TS errors; page renders at `/humpbackhelitours` with no console errors.
- Hero, experience, inclusions, pricing, social proof, and a clearly-marked dummy booking section all present and responsive (mobile overrides via existing `globals.css` patterns).
- Visually consistent with existing premium Boattime pages; co-branding visible but Boattime-led.

## Data Model

### `posts` table (Supabase Postgres)

| Column       | Type        | Notes                          |
|--------------|-------------|--------------------------------|
| id           | uuid        | Primary key, auto-generated    |
| title        | text        | Article title                  |
| slug         | text        | URL-friendly, unique           |
| excerpt      | text        | Short description              |
| content      | text        | Full article body (plain text) |
| image_url    | text        | Image URL                      |
| categories   | text[]      | Array of category tags         |
| published    | boolean     | Default false (draft)          |
| published_at | timestamptz | Set when published = true      |
| created_at   | timestamptz | Auto                           |

### RLS rules
- Public: SELECT where published = true only
- Admin (authenticated): full SELECT, INSERT, UPDATE, DELETE

## Feature — Blog viewer location tracking

### What it is & who uses it
Right now each article only stores a single `views` counter (via the `increment_post_views` RPC) — no information about *who* viewed or *from where*. This feature starts recording each individual view together with the visitor's approximate location (country / region / city), so the admin can see where their blog readers come from.

### How location is detected (no third-party API)
The site is deployed on Vercel, which automatically attaches the visitor's approximate location to every request via headers (`x-vercel-ip-country`, `x-vercel-ip-country-region`, `x-vercel-ip-city`). We read those server-side. **No raw IP address is stored** — only country/region/city. This keeps it privacy-friendly and free (no external geolocation service).
- Note: these headers only exist in production on Vercel. In local dev they're empty → location saved as `Unknown`. That's expected.

### Data model — new `post_views` table (Supabase Postgres)
| Column     | Type        | Notes                                  |
|------------|-------------|----------------------------------------|
| id         | uuid        | Primary key, auto-generated            |
| post_slug  | text        | Which article was viewed               |
| country    | text        | e.g. "AU" (nullable / "Unknown")       |
| region     | text        | State/region (nullable)                |
| city       | text        | City (nullable)                        |
| viewed_at  | timestamptz | Default now()                          |

**RLS rules**
- Public/anon: **cannot** read or write this table directly.
- Inserts happen only through a server API route using the service-role key (bypasses RLS safely on the server).
- Admin (authenticated): SELECT only (to read the breakdown).

The existing `posts.views` counter stays as-is (kept in sync) so nothing else breaks.

### How it works (flow)
1. A visitor opens an article → `ArticlePage` sends a POST to a new route `app/api/track-view/route.ts` with the article slug (replaces the current direct `increment_post_views` RPC call).
2. The route reads the Vercel location headers, then (a) inserts one row into `post_views` and (b) increments `posts.views` — both server-side with the service-role client. `console.log` at start and end per project rules.
3. Admin opens `/admin/news` → each post shows its total views plus a small location breakdown (e.g. top countries: "AU 30 · US 8 · UK 4"). Fetched by querying `post_views` grouped by country.

### Files touched
- `supabase/schema.sql` — add `post_views` table + RLS policies (admin SELECT only).
- `app/api/track-view/route.ts` — **new** API route (insert view + read geo headers + increment counter).
- `components/ArticlePage.tsx` — swap the direct RPC call for a `fetch('/api/track-view')`.
- `components/admin/AdminNewsList.tsx` — show per-post location breakdown.

### Privacy note
Country/region/city are personal-ish data under Australian Privacy Principles / GDPR. We store only coarse location (no raw IP, no names, no tracking cookie), which is the low-risk approach. If you later want a "we collect anonymous location analytics" line in a privacy policy, that's a separate copy task.

### What "done" looks like (this feature)
- `npm run build` passes, no TS errors.
- Opening an article inserts a `post_views` row (verifiable in Supabase) and still bumps `posts.views`.
- Admin list shows total views + a country breakdown per article.
- Anon users cannot read `post_views` directly (RLS verified).
- No console errors.

## Feature — "Kai" AI booking assistant chat widget

### What it is & who uses it
A floating chat widget on the public site. A visitor clicks the launcher, types a question ("do you do sunset cruises for 12 people on 14 March?"), and Kai — an AI booking assistant — answers, checks live availability against our Rezdy account, and shows matching Boattime products as cards inside the chat.

Kai is a **separate, already-deployed service** (`https://kai-six-virid.vercel.app`) that already has a tenant record for us (slug `boattime`, wired to our real Rezdy products). We do not touch Kai's codebase or database. Its JSON API is the entire contract.

Users: public website visitors. No login, no Supabase involvement in this feature at all.

### Why a server-side proxy (not a direct browser call)
Kai's widget API does not send CORS headers, so a browser on `boattimeyachtcharters.com` is not allowed to call it directly. So:

`Browser (our chat component) → our /api/kai/* routes (our server) → Kai's /api/widget/* (their server)`

Our own routes are same-origin, so the browser is happy. Our server-to-server `fetch` isn't subject to CORS at all. Same pattern the sister project `bluepass-redesign` already uses against this backend (`lib/services/kai-core/client.ts`).

### Third-party services
- **Kai** (external AI booking service) — the only new service. No new Supabase tables, no Stripe in this phase.
- Kai internally talks to **Rezdy** (our existing booking system) for live availability/pricing. We never call Rezdy ourselves here.

### Environment variables (add to `.env.local`, and to Vercel for production)
| Key | Value | What it does |
|-----|-------|--------------|
| `KAI_API_BASE_URL` | `https://kai-six-virid.vercel.app` | Where Kai lives |
| `KAI_WIDGET_KEY` | `pk_test_boattime` | Identifies us as the `boattime` tenant |
| `KAI_ORIGIN` | `https://boattimeyachtcharters.com` | Sent as the `origin` header; must match Kai's allowlist for our tenant |

All three are **server-only** (no `NEXT_PUBLIC_` prefix) so the widget key never reaches the browser.

**Allowlist status — verified live, no action needed.** I probed Kai's config endpoint with both origins and both returned `200` with our real tenant payload:
- `https://boattimeyachtcharters.com` → OK
- `http://localhost:3000` → OK

So local dev works as-is; nothing needs adding on the Kai side. If a `403 ORIGIN_NOT_ALLOWED` ever appears later, that's a Kai-side config change, not a bug here.

### Data models
No database. State is per-browser-session and lives in React state only:

| Thing | Where it lives | Notes |
|-------|----------------|-------|
| `conversationId` | React state in the widget | Returned by `/api/kai/session`, sent on every message |
| Message list | React state | Not persisted — closing the tab loses history (acceptable for v1) |
| Config (title, welcome message) | React state, fetched once on open | |

Kai is stateless from our side beyond the `conversationId`. No cookies, no session storage on their end that we manage.

### Our API routes (thin proxies — forward, shape, return; no business logic)

**1. `GET /api/kai/config`** → Kai's `GET /api/widget/config?key=…`
Returns tenant branding + capabilities. Used for the widget title and welcome message.

**2. `POST /api/kai/session`** → Kai's `POST /api/widget/session`, body `{ key }`
Returns `{ conversationId }`. Called once when the widget first opens, or on "start new conversation".

**3. `POST /api/kai/messages`** → Kai's `POST /api/widget/messages`, body `{ key, conversationId, content }`
The main chat turn. Returns the assistant reply plus optional `productCards`, `contactRequest`, `paymentRequest`, `manualInquiry`.

Each route: `console.log` at start and end (project rule), never leaks the widget key to the client, and maps Kai failures to a clean `{ error }` + status.

Shared fetch/config/type code goes in **`lib/kai.ts`** so the routes stay thin.

#### ⚠️ Contract correction — `capabilities` shape
The brief typed `capabilities` as `{ supportedLocales: string[]; pmsProvider: string; enabledFeatures: string[] }`. The **live response has no `supportedLocales` field.** Actual shape returned today:

```
capabilities: {
  supportedChannels: ["WEB_WIDGET"],
  enabledFeatures: ["widget_config", "mock_pms", "boattime_local_demo", "bluepass_stripe_pms_checkout"],
  bookingMode: "MANUAL_INQUIRY",
  pmsProvider: "REZDY"
}
```
There is also a top-level `businessPack` object not mentioned in the brief. Our types will match what the API actually returns, and every field the UI reads will be treated as optional so a Kai-side shape change degrades rather than crashes. **Flagging, not fixing** — if `supportedLocales` is meant to exist, that's a Kai-side change.

### Product cards (the whole point of a custom widget)
Rendered as our own styled cards in the chat stream, directly under the assistant message that produced them.

Price line logic:
| Condition | Shown |
|-----------|-------|
| `priceLabel` present | the label as-is (e.g. `A$159`) |
| `priceLabel` null **and** `dateChecked` true | "Not available on this date" |
| `priceLabel` null **and** `dateChecked` false/absent | "Share your date for pricing" |

`productUrl` present → card is a link (new tab). `productUrl` null → plain non-link card.

**⚠️ Known data issue — flagged, not fixed:** the `productUrl` values Kai has on file for our products point at a demo/localhost URL, not our real product pages. Cards will link wherever Kai says until that's corrected on the Kai side. Nothing in this repo will paper over it.

**⚠️ Also worth a look:** our tenant's `enabledFeatures` currently includes `mock_pms` and `boattime_local_demo`. If those flags mean availability/pricing is coming from mock data rather than the real Rezdy account, live prices in the cards may not be real yet. Kai-side question, not something to fix here.

### Contact capture
If `contactRequest` comes back non-null, show a small inline name / email / phone form.
Validation: name ≥ 2 chars · basic email regex · phone digits ≥ 6.
On submit, it is sent as a **normal chat message** in natural language — `My name is X, email is Y, phone number is Z` — because Kai has no structured contact endpoint and expects it this way.

### Payments — in-chat card form still out of scope
Kai has `POST /api/widget/payments/intent` and `/confirm` for an **in-chat Stripe card form**. That is still **not built** and remains Phase 2.

Live testing showed Kai already returns a working `paymentRequest.checkoutUrl` (a hosted Stripe checkout page). Leaving the traveller to select and copy a 300-character URL by hand was not acceptable, so the booking summary now renders a **"Complete secure payment"** button linking to that URL, opening in a new tab (the chat only lives in memory — navigating away would lose it). When `checkoutUrl` is null we fall back to the original "we'll be in touch to complete payment" note.

This uses only the `checkoutUrl` already present in the Phase 1 response. It does **not** call `payments/intent` or `payments/confirm`.

### Message rendering
- URLs inside Kai's replies are rendered as real links. Long ones display as `hostname/…` (full URL preserved in the `href`) so a checkout link doesn't fill ten lines.
- All message text, card text and payment rows use `overflow-wrap: anywhere`, and `.kai-stream` sets `overflow-x: hidden`. The chat must never scroll sideways.

### Design
Our design system only — **not** Kai's default teal. `branding.primaryColor` from Kai (`#0b4f6c`) is deliberately ignored; it's a fallback for tenants with no site of their own.

- Colours via existing CSS tokens (`var(--navy)`, `var(--navy-mid)`, `var(--gold)`, `var(--cream)`, `var(--text-muted)`, `var(--border-subtle)`). Because these tokens already flip in `[data-theme='light']`, the widget **automatically works in both light and dark mode** with no extra work.
- Cormorant Garamond for the widget title, Montserrat for messages and UI.
- Sharp corners (`--radius: 0`), hairline gold borders, uppercase letterspaced labels — consistent with `Nav`, `Inquiry`, and the cruise pages.
- Launcher: fixed bottom-right, gold, discreet; subtle scale/fade transitions using `--ease-brand`. No emoji icons — a minimal inline SVG mark.
- Panel: ~380px wide desktop, near-fullscreen on mobile, `--glass-bg` backdrop.

### Behaviour
- **On first open:** call `/api/kai/session` and `/api/kai/config` in parallel → show the welcome message.
- **On send:** optimistically append the traveller's message → call `/api/kai/messages` → append the assistant reply → render any `productCards` beneath it.
- **Loading:** a typing indicator while waiting. Kai can legitimately take several seconds (live Rezdy availability checks), so no aggressive timeout.
- **Errors:** inline, human-readable ("Kai isn't responding right now — please try again"), with a retry. Never a blank panel, never a raw stack trace.
- Input disabled while a turn is in flight; Enter sends, Shift+Enter newlines.

### Files touched
| File | New? | Purpose |
|------|------|---------|
| `.env.local` | edit | 3 new keys |
| `lib/kai.ts` | **new** | Types + server-side Kai fetch helper (base URL, key, origin header) |
| `app/api/kai/config/route.ts` | **new** | Proxy → Kai widget config |
| `app/api/kai/session/route.ts` | **new** | Proxy → start conversation |
| `app/api/kai/messages/route.ts` | **new** | Proxy → chat turn |
| `components/kai/KaiWidget.tsx` | **new** | Launcher + panel + message stream (client component) |
| `components/kai/KaiProductCard.tsx` | **new** | One product card |
| `components/kai/KaiContactForm.tsx` | **new** | Inline name/email/phone form |
| `app/globals.css` | edit | `.kai-*` styles, appended at the end (existing convention) |
| `app/layout.tsx` | edit | Mount `<KaiWidget />` inside `ThemeProvider` so it's on every page |

No new top-level folders. No changes to any existing component, page, or Supabase code.

### What "done" looks like (this feature)
- `npm run build` passes with no TypeScript errors.
- Widget launcher visible on every public page; opens and closes cleanly.
- Opening it starts a real conversation and shows Kai's welcome message.
- Sending a message returns a real assistant reply from the live Kai service.
- A product-oriented question renders real Boattime product cards, styled in our navy/gold system, with the correct price line for all three cases.
- `contactRequest` renders the form; submitting it sends the natural-language message and Kai acknowledges.
- `paymentRequest` shows details as text + "we'll be in touch" (no payment UI).
- Errors and slow replies are handled visibly, no console errors.
- Widget looks correct in **both** light and dark theme.
- Widget key never appears in any browser network request or page source.

## What "done" looks like

- `npm run build` succeeds with no TypeScript errors
- Admin can log in at `/admin` and is redirected to `/admin/news`
- Admin can create, edit, delete, and publish/unpublish articles
- `/boattime-news` shows only published articles, fetched from Supabase
- Category filter and pagination work with live data
- Unauthenticated users hitting `/admin/*` are redirected to `/admin`
- No console errors
