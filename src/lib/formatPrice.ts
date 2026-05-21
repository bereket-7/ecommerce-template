import { siteConfig } from "./siteConfig";

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat(siteConfig.locale, {
    style: "currency",
    currency: siteConfig.currency.code,
    maximumFractionDigits: 0,
  }).format(amount);
}
