import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { getAllProductSlugs } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/shop-with-sidebar",
    "/shop-without-sidebar",
    "/cart",
    "/checkout",
    "/wishlist",
    "/contact",
    "/blogs/blog-grid",
    "/blogs/blog-grid-with-sidebar",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
  }));

  const productRoutes = getAllProductSlugs().map((slug) => ({
    url: `${base}/products/${slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...productRoutes];
}
