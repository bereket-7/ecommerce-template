export const siteConfig = {
  name: "KitchenEdge",
  tagline: "Quality kitchen tools for Ethiopian homes",
  description:
    "Shop knives, cookware, gadgets, and storage essentials. Delivery across Addis Ababa and major Ethiopian cities.",
  url: "https://kitchenedge.et",
  locale: "en-ET",
  country: "Ethiopia",
  currency: {
    code: "ETB",
    symbol: "Br",
  },
  logo: {
    src: "/images/logo/logo.svg",
    alt: "KitchenEdge",
    width: 219,
    height: 36,
  },
  contact: {
    name: "Hanna Bekele",
    address: "Bole Road, near Edna Mall, Addis Ababa, Ethiopia",
    phone: "+251 911 234 567",
    email: "hello@kitchenedge.et",
  },
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    linkedin: "#",
  },
  shipping: {
    freeThreshold: 4000,
    message: "Free delivery in Addis Ababa on orders over 4,000 ETB",
    regions: [
      "Addis Ababa",
      "Adama",
      "Hawassa",
      "Bahir Dar",
      "Dire Dawa",
    ],
  },
  payments: ["Telebirr", "CBE Birr", "Cash on delivery"],
  searchPlaceholder: "Search knives, mitad, coffee tools…",
  promoCode: "ADDIS25",
} as const;

export function pageTitle(page: string): string {
  return `${page} | ${siteConfig.name}`;
}

export const defaultMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: siteConfig.locale.replace("-", "_"),
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
  },
};

export function createPageMetadata({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  const desc = description ?? siteConfig.description;
  return {
    title,
    description: desc,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description: desc,
    },
  };
}
