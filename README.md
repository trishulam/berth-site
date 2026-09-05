# Berth

The Berth site: the firm's home page (`/`) and the Fix product page (`/fix`).
Built from Design Spec v2. Next.js 15, App Router, no UI framework; all styling is in `app/globals.css`.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Deploy on Vercel: import the repo, defaults are fine (framework preset: Next.js).

## Layout

- `app/layout.tsx` – fonts (Instrument Serif, Inter; self-hosted from `fonts/`), nav, shared effects
- `app/page.tsx` – Berth home: hero, desks row, thesis on paper, Fix teaser, FAQ, close
- `app/fix/page.tsx` – Fix: the cover unfolded, What Fix does, the ledger, trust, where it lives, FAQ, close
- `components/Hero.tsx` – hero media placement (zoomed on the Indian Ocean basin) and the live particle layer
- `components/Ledger.tsx` – the Monday-to-Thursday deal thread; the copy lives here
- `components/DeskCards.tsx` – the cover-card row
- `components/lanes.json` – lane geometry for the live layer (exported from the render pipeline)
- `public/assets/` – hero loop, still, cover images

## Swapping assets

- Hero render: replace `public/assets/hero.webp`, `hero-loop.mp4`, `hero-1200.jpg` (the frame is 6000 × 2160, Equal Earth centred on 60°E; keep that aspect or update `IMG_A` in `Hero.tsx`).
- Card photos: `card-fix.jpg`, `card-ops.jpg`, `card-claims.jpg`, `card-bunker.jpg` (640 × 580 at 1x) and `fix-cover.jpg` (wide) — grade per spec §8.
- Email addresses: `components/links.ts`.
