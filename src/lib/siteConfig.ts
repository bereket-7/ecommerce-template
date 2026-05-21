export const siteConfig = {
  name: "KitchenEdge",
  tagline: "Professional kitchen tools for home cooks and chefs",
  description:
    "Shop knives, cookware, gadgets, and storage essentials. Quality kitchen tools with fast shipping and expert support.",
  url: "https://kitchenedge.example.com",
  logo: {
    src: "/images/logo/logo.svg",
    alt: "KitchenEdge",
    width: 219,
    height: 36,
  },
  contact: {
    name: "Sarah Mitchell",
    address: "284 Culinary Lane, Portland, OR 97201, United States",
    phone: "(503) 555-0142",
    email: "hello@kitchenedge.com",
  },
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
  shipping: {
    freeThreshold: 75,
    message: "Free shipping on orders over $75",
  },
  searchPlaceholder: "Search knives, pans, gadgets…",
} as const;

export function pageTitle(page: string): string {
  return `${page} | ${siteConfig.name}`;
}

export const defaultMetadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};
