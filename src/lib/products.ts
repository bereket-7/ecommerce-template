import shopData from "@/components/Shop/shopData";
import { Product } from "@/types/product";

export function getAllProducts(): Product[] {
  return shopData;
}

export function getProductBySlug(slug: string): Product | undefined {
  return shopData.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return shopData.map((p) => p.slug);
}

export function productPath(slug: string): string {
  return `/products/${slug}`;
}
