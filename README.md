# Marblediv Enterprises — Corporate Landing Page

Editorial-brutalist corporate landing page for **Marblediv Enterprises** (marblediv.com) — a vertically integrated agro-industrial estate raising a **₦50,000,000 capital round** to scale from 5 operating hectares to a **25-hectare total estate** (5 Ha existing + 20 Ha funded), in technical partnership with RayOils.ng. The framing is investor-neutral — NDDC, DFIs and private investors are all addressed identically.

## Stack

- **Vite 8** + **React 19** + **TypeScript** (strict)
- **Tailwind CSS v4** (via `@tailwindcss/vite`, `@theme` design tokens — no config file)
- **lucide-react** icons

## Commands

```bash
npm install
npm run dev      # dev server
npm run build    # tsc -b && vite build
npm run preview  # preview production build
```

## Structure

```
marblediv-landing/
├── public/
│   ├── img/                    # Generated photography (Flux via Comfy Cloud)
│   │   ├── plantation-aerial.png   — Hero estate aerial
│   │   ├── mill.png                — Hydraulic extraction plant
│   │   ├── fruit-bunches.png       — Fresh fruit bunches
│   │   ├── cassava.png             — TME 419 intercrop harvest
│   │   └── worker.png              — Field operations
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── PalmMotifs.tsx      # Hand-drawn SVG: frond, bunch, matrix, rows, sprout
│   │   ├── Header.tsx          # Ticker, nav, capital-round tag, ESTATE ONLINE status
│   │   ├── Hero.tsx            # Editorial headline, drop cap, aerial photo, spec sheet
│   │   ├── OperationsGrid.tsx  # Cards A/B/C, each with its own photo + specs
│   │   ├── ImpactMetrics.tsx   # Socio-economic counters (animated) + field photos
│   │   ├── Sustainability.tsx  # Agronomic practices + planting schedule
│   │   ├── ExecutiveTeam.tsx   # Epal Ofem Raymond (MD) & Divine Raymond (TD)
│   │   └── Footer.tsx          # Contact form, coordinates, corporate bar
│   ├── lib/
│   │   ├── site.ts             # Central metadata + photo paths (edit here)
│   │   └── utils.ts            # cn() class merge helper
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css               # Tailwind v4 @theme design system
│   └── vite-env.d.ts
└── index.html                  # Fonts: Bebas Neue, IBM Plex Serif, Space Grotesk, Space Mono
```

## Design System (v2 — editorial-brutalist)

Aligned with the RayOils house style, evolved with organic counterpoints:

| Token | Value | Usage |
|---|---|---|
| Paper | `#F5F4F0` | Warm off-white canvas (paper grain overlay) |
| Ink | `#1C1917` | Borders, text, hard shadows |
| Agri | `#064E3B` | Agricultural accent |
| Amber | `#EA580C` | Palm / industrial accent |

- Typography: Bebas Neue (display), **IBM Plex Serif** (editorial body, drop caps, pull quotes), Space Grotesk (UI), Space Mono (metadata labels)
- Photography: duotone treatment (`grayscale(35%) sepia(12%) saturate(1.15) contrast(1.08)`), pinned-print frames with slight rotation, `Fig. 0X` captions
- Palm motifs: hand-drawn SVG fronds, fruit bunches, and triangular planting matrices as low-opacity background elements — `PalmMotifs.tsx`
- Cards: 2px `#1C1917` borders, `rounded-none`, `shadow-[4px_4px_0px_0px_#1C1917]` with press-down hover states

## Before publishing

1. **RC number** — `site.rcNumber` in `src/lib/site.ts` is a `[ RC NUMBER ]` placeholder; replace with the real CAC registration number.
2. **Contact form** — submit handler in `Footer.tsx` is a local-state placeholder (no backend). Wire it to an email service or Supabase Edge Function before launch.
3. **Fonts** — Google Fonts linked in `index.html`; self-host for production if desired.
4. **Image credits** — photography is AI-generated for placeholder purposes. Replace with real estate photography when available for maximum credibility with investors.

## Deployment

Static build (`dist/`) — deploy to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
