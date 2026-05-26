import { Product } from "@/types/product";

export type ProductFilters = {
  search?: string;
  categories: string[];
  brands: string[];
  materials: string[];
  colors: string[];
  priceMin?: number;
  priceMax?: number;
  sort?: "latest" | "best-selling" | "price-low" | "price-high";
};

export type FilterOption = {
  name: string;
  count: number;
};

export function getFilterOptions(products: Product[]) {
  const countBy = (key: keyof Product) => {
    const map = new Map<string, number>();
    products.forEach((p) => {
      const value = p[key];
      if (typeof value === "string" && value) {
        map.set(value, (map.get(value) ?? 0) + 1);
      }
    });
    return Array.from(map.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name.localeCompare(b.name));
  };

  const colors = new Map<string, number>();
  products.forEach((p) => {
    p.colors?.forEach((c) => {
      colors.set(c, (colors.get(c) ?? 0) + 1);
    });
  });

  return {
    categories: countBy("category"),
    brands: countBy("brand"),
    materials: countBy("material"),
    colors: Array.from(colors.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => a.name.localeCompare(b.name)),
    priceMin: Math.min(...products.map((p) => p.discountedPrice)),
    priceMax: Math.max(...products.map((p) => p.discountedPrice)),
  };
}

export function filterProducts(
  products: Product[],
  filters: ProductFilters
): Product[] {
  let result = [...products];

  if (filters.search?.trim()) {
    const q = filters.search.trim().toLowerCase();
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.slug.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.brand?.toLowerCase().includes(q) ?? false) ||
        (p.material?.toLowerCase().includes(q) ?? false)
    );
  }

  if (filters.categories.length > 0) {
    result = result.filter((p) => filters.categories.includes(p.category));
  }

  if (filters.brands.length > 0) {
    result = result.filter((p) => p.brand && filters.brands.includes(p.brand));
  }

  if (filters.materials.length > 0) {
    result = result.filter(
      (p) => p.material && filters.materials.includes(p.material)
    );
  }

  if (filters.colors.length > 0) {
    result = result.filter((p) =>
      p.colors?.some((c) => filters.colors.includes(c))
    );
  }

  if (filters.priceMin !== undefined) {
    result = result.filter((p) => p.discountedPrice >= filters.priceMin!);
  }

  if (filters.priceMax !== undefined) {
    result = result.filter((p) => p.discountedPrice <= filters.priceMax!);
  }

  switch (filters.sort) {
    case "best-selling":
      result.sort((a, b) => b.reviews - a.reviews);
      break;
    case "price-low":
      result.sort((a, b) => a.discountedPrice - b.discountedPrice);
      break;
    case "price-high":
      result.sort((a, b) => b.discountedPrice - a.discountedPrice);
      break;
    case "latest":
    default:
      result.sort((a, b) => b.id - a.id);
      break;
  }

  return result;
}

export const emptyFilters: ProductFilters = {
  categories: [],
  brands: [],
  materials: [],
  colors: [],
  sort: "latest",
};
