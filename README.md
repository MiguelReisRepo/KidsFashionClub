# Kids Fan Club

Bilingual (PT / EN) football jersey shop. WhatsApp-based checkout.
Static site, no auth, no cart.

## Stack

- Astro 5 (SSG)
- Tailwind v4 (Vite plugin)
- TypeScript
- Sanity CMS (planned, phase 1b)
- Vercel (planned)
- IfthenPay for MB WAY / Multibanco (planned, phase 3)

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
npm run preview
```

## Routes

- `/`              → redirects to `/pt`
- `/pt`, `/en`     → homepage
- `/{lang}/stock`         → in-stock catalog
- `/{lang}/order`         → pre-order catalog
- `/{lang}/jersey/{slug}` → product detail
- `/{lang}/about` `/faq` `/shipping` `/how-it-works`

## i18n

- `prefixDefaultLocale: true` (PT is default but always prefixed)
- Language switcher swaps the `/pt|en/` segment in place
- All UI strings in `src/lib/i18n.ts`
- Product strings live with the data (`{ pt, en }` shape)

## WhatsApp

Configured in `.env`:

```
PUBLIC_WHATSAPP_NUMBER=351924455685
```

Helpers in `src/lib/whatsapp.ts`:
- `buyLink(product, lang, size?)`
- `askLink(product, lang)` — for pre-order availability
- `customOrderLink(lang)` — generic "encomendar específica"

## Logo

Drop the brand logo at `public/logo.png` (the gold jersey + laurel artwork).
The header currently uses a text "K" placeholder.

## Data

Seed data lives in `src/data/seed.ts`. To add a product:

```ts
{
  id: '9',
  slug: 'team-kit-2025-26',
  name: { pt: '...', en: '...' },
  team: '...',
  season: '2025/26',
  kitType: 'home',
  version: 'adepto',
  price: 39.99,
  sizes: ['S', 'M', 'L'],
  availability: 'in_stock' | 'pre_order' | 'sold_out',
  shippingDays: 2,
  images: ['/products/<file>.jpg'],
  description: { pt: '...', en: '...' },
  isNew: true,
  isFeatured: true,
}
```

## Roadmap

- [x] Phase 1a — scaffold, base routes, WhatsApp buttons
- [ ] Phase 1b — Sanity CMS migration (replace seed)
- [ ] Phase 2 — filters, size guide, IG embed, OG images
- [ ] Phase 3 — IfthenPay (MB WAY / MB) + email confirmation
- [ ] Phase 4 — reviews, A/B, pre-order deposit
