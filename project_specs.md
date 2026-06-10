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
A standalone partnership sales/landing page at **`/helitours-campaign`** promoting a co-branded bundle between **Boattime Yacht Charters** and **Gold Coast Helitours** — witnessing humpback whales from both a luxury yacht (sea) and a helicopter (sky). Built for ad/social traffic; conversion-focused, premium, single-scroll.

### Tech & conventions (matches existing campaign pages)
- Route `app/helitours-campaign/page.tsx` (metadata only) → renders client component `components/CampaignSkyToSea.tsx`.
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
- `npm run build` passes, no TS errors; page renders at `/helitours-campaign` with no console errors.
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

## What "done" looks like

- `npm run build` succeeds with no TypeScript errors
- Admin can log in at `/admin` and is redirected to `/admin/news`
- Admin can create, edit, delete, and publish/unpublish articles
- `/boattime-news` shows only published articles, fetched from Supabase
- Category filter and pagination work with live data
- Unauthenticated users hitting `/admin/*` are redirected to `/admin`
- No console errors
