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
