# KitchenEdge — Kitchen Tools E-commerce

A Next.js storefront customized from the NextMerce lite template for **kitchen tools and cookware**.

## Features

- 15 kitchen products across 6 categories (knives, cookware, utensils, storage, appliances, bakeware)
- Working shop filters (category, brand, material, color, price range, sort)
- Product detail pages driven by catalog data (variants, specs, description)
- Kitchen tips blog content
- Centralized branding via `src/lib/siteConfig.ts`

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
| `src/lib/siteConfig.ts` | Brand name, contact, SEO defaults |
| `src/lib/categories.ts` | Shop categories |
| `src/components/Shop/shopData.ts` | Product catalog |
| `src/lib/filterProducts.ts` | Shop filter logic |
| `src/components/Header/menuData.ts` | Navigation |

## Customize branding

Edit `src/lib/siteConfig.ts` and replace images under `public/images/`.
