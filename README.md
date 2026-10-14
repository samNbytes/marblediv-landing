# Marblediv Enterprises — Corporate Landing Page

Industrial brutalist corporate landing page for **Marblediv Enterprises** (marblediv.com), the parent agro-industrial entity behind the ₦50M NDDC Agricultural Enterprise Development Facility application, in technical partnership with RayOils.ng.

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
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Ticker marquee, nav, NDDC tag, ESTATE ONLINE status
│   │   ├── Hero.tsx            # Headline, CTAs, estate spec sheet, stat strip
│   │   ├── OperationsGrid.tsx  # Cards A/B/C: estate, milling, RayOils supply chain
│   │   ├── ImpactMetrics.tsx   # NDDC impact counters (animated on scroll) + financials
│   │   ├── Sustainability.tsx  # Agronomic practices + planting schedule
│   │   ├── ExecutiveTeam.tsx   # Epal Ofem Raymond (MD) & Divine Raymond (TD)
│   │   └── Footer.tsx          # Contact form, coordinates, corporate bar
│   ├── lib/
│   │   ├── site.ts             # Central corporate metadata (edit values here)
│   │   └── utils.ts            # cn() class merge helper
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css               # Tailwind v4 @theme design system
│   └── vite-env.d.ts
├── index.html                  # Fonts: Bebas Neue, Space Grotesk, Space Mono
└── public/favicon.svg
```

## Design System

Aligned with the RayOils house style (tokens in `src/index.css`):

| Token | Value | Usage |
|---|---|---|
| Paper | `#F5F5F4` | Page canvas |
| Ink | `#1C1917` | Borders, text, hard shadows |
| Agri | `#064E3B` | Agricultural accent |
| Amber | `#EA580C` | Palm / industrial accent |

- Typography: Bebas Neue (display), Space Grotesk (body), Space Mono (metadata)
- Cards: 2px `#1C1917` borders, `rounded-none`, `shadow-[4px_4px_0px_0px_#1C1917]` with press-down hover states

## Before publishing

1. **RC number** — `site.rcNumber` in `src/lib/site.ts` is a `[ RC NUMBER ]` placeholder; replace with the real CAC registration number.
2. **Contact form** — submit handler in `Footer.tsx` is a local-state placeholder (no backend). Wire it to an email service or Supabase Edge Function before launch.
3. **Fonts** — Google Fonts is linked in `index.html`; self-host for production if desired.

## Deployment

Static build (`dist/`) — deploy to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
