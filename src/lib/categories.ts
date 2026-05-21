export type ShopCategory = {
  id: number;
  title: string;
  slug: string;
  img: string;
};

export const shopCategories: ShopCategory[] = [
  {
    id: 1,
    title: "Knives & Cutting",
    slug: "knives-cutting",
    img: "/images/categories/categories-01.png",
  },
  {
    id: 2,
    title: "Cookware",
    slug: "cookware",
    img: "/images/categories/categories-02.png",
  },
  {
    id: 3,
    title: "Utensils & Gadgets",
    slug: "utensils-gadgets",
    img: "/images/categories/categories-03.png",
  },
  {
    id: 4,
    title: "Storage",
    slug: "storage",
    img: "/images/categories/categories-04.png",
  },
  {
    id: 5,
    title: "Small Appliances",
    slug: "small-appliances",
    img: "/images/categories/categories-05.png",
  },
  {
    id: 6,
    title: "Bakeware",
    slug: "bakeware",
    img: "/images/categories/categories-06.png",
  },
];

export function categorySlugToName(slug: string): string | undefined {
  return shopCategories.find((c) => c.slug === slug)?.title;
}

export function categoryNameToSlug(name: string): string | undefined {
  return shopCategories.find((c) => c.title === name)?.slug;
}
