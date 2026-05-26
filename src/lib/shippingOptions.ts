import { siteConfig } from "@/lib/siteConfig";

export type ShippingMethodId =
  | "addis-standard"
  | "addis-express"
  | "other-cities";

export const shippingOptions = [
  {
    id: "addis-standard" as const,
    title: "Addis Ababa — Standard",
    price: 0,
    note: `Free on orders over ${siteConfig.shipping.freeThreshold.toLocaleString()} ETB`,
  },
  {
    id: "addis-express" as const,
    title: "Addis Ababa — Express",
    price: 250,
    note: "Same-day in select areas",
  },
  {
    id: "other-cities" as const,
    title: "Other cities",
    price: 450,
    note: "Adama, Hawassa, Bahir Dar, Dire Dawa & more",
  },
];

export function getShippingPrice(
  methodId: ShippingMethodId,
  subtotal: number
): number {
  const option = shippingOptions.find((o) => o.id === methodId);
  if (!option) return 0;
  if (
    methodId === "addis-standard" &&
    subtotal >= siteConfig.shipping.freeThreshold
  ) {
    return 0;
  }
  return option.price;
}

export function getShippingLabel(methodId: ShippingMethodId): string {
  return shippingOptions.find((o) => o.id === methodId)?.title ?? "Delivery";
}
