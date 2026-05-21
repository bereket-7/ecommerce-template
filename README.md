# KitchenEdge — Kitchen Tools E-commerce (Ethiopia)

A Next.js storefront customized from the NextMerce lite template for **kitchen tools and cookware**, localized for **Ethiopian customers**: English UI, **ETB** pricing, **+251** contact, Addis Ababa addresses, and local payment/delivery context.

## Features

- 15 kitchen products across 6 categories (knives, cookware, utensils, storage, appliances, bakeware)
- Working shop filters (category, brand, material, color, price range, sort)
- Product detail pages driven by catalog data (variants, specs, description)
- Ethiopian-focused blog content (injera, coffee ceremony, Addis kitchen tips)
- Centralized branding and locale via `src/lib/siteConfig.ts`
- ETB price formatting via `src/lib/formatPrice.ts`

## Locale

| Setting | Value |
|---------|--------|
| Currency | ETB (displayed as `Br` via `Intl.NumberFormat`) |
| Locale | `en-ET` |
| Contact | Bole Road, Addis Ababa · `+251 911 234 567` |
| Payments (demo) | Telebirr, CBE Birr, Cash on delivery |
| Delivery | Addis Ababa (standard/express) and other major cities |

## Stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS, Redux Toolkit
- Static mock data (no backend in this fork)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Key files

| Path | Purpose |
|------|---------|
| `src/lib/siteConfig.ts` | Brand, contact, shipping, currency, payments |
| `src/lib/formatPrice.ts` | ETB formatting for all displayed prices |
| `src/lib/ethiopia.ts` | Cities, phone placeholder, sample addresses |
| `src/lib/categories.ts` | Shop categories |
| `src/components/Shop/shopData.ts` | Product catalog (prices in ETB) |
| `src/lib/filterProducts.ts` | Shop filter logic |
| `src/components/Header/menuData.ts` | Navigation |

## Customize branding and locale

1. Edit `src/lib/siteConfig.ts` for name, tagline, contact, shipping threshold, and payment labels.
2. Adjust product prices in `src/components/Shop/shopData.ts` (numbers are ETB; display uses `formatPrice`).
3. Update `src/lib/ethiopia.ts` for city lists and form placeholders.
4. Replace images under `public/images/`.

## Build

```bash
npm run build
```
