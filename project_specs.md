# Project Specs — Boattime Yacht Charters Website

## What the app does and who uses it

A luxury marketing website for Boattime Yacht Charters (Gold Coast & Brisbane, AU). Visitors browse cruise experiences, learn about the fleet, and submit booking enquiries. No auth, no database — pure frontend with a static enquiry form.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3 + CSS custom properties (brand tokens)
- **Animations:** GSAP 3 + ScrollTrigger + @gsap/react
- **Fonts:** next/font/google — Cormorant Garamond, Montserrat
- **Deployment:** Vercel
- **Backend:** None (static site)

## Pages & User Flows

Single page (`/`) composed of sections in order:
1. Nav — fixed, scrolled state, dropdown menus
2. Hero — full-screen with parallax + load sequence
3. StatsBar — gold bar with animated counters
4. Cruises — mosaic grid of 7 cruise experiences
5. Fleet — two yacht showcase cards
6. Charters — 4 charter type cards (Private, Corporate, Wedding, Catering)
7. Reviews — 3 testimonial cards + platform ratings
8. CtaBand — full-bleed CTA with parallax background
9. Destinations — two-column list of charter destinations
10. FAQ — accordion with GSAP height animation
11. Inquiry — static booking enquiry form (shows success message on submit)
12. Footer — links, contact, socials

## Data

All content is hardcoded (cruise names, yacht specs, reviews, FAQs). No external API calls.

## GSAP Animations

### On page load (Hero):
- Background image: Ken Burns slow zoom
- Text lines: masked slide-up reveal, line by line
- Badge: slide in from right
- Scroll indicator: fade in + pulse loop

### On scroll (ScrollTrigger):
- All section headings: word/line reveal
- All grid cards: staggered fade+slide from bottom (stagger: 0.08s)
- Stats: count-up from zero
- Hero background: parallax (yPercent 30)
- CTA band background: parallax
- Destinations list: stagger slide from left
- FAQ items: stagger slide from right

### On hover:
- All image cards: smooth GSAP scale (1.06)
- Nav links: color transition
- Buttons: lift (translateY -2px)

### Nav:
- On scroll > 40px: background + blur + border animate in (GSAP)

## What "done" looks like

- `npm run build` succeeds with no TypeScript errors
- All 12 sections render correctly at localhost:3000
- GSAP animations work on scroll, hover, and page load
- Responsive at mobile (768px breakpoint)
- No console errors
