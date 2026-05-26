import Home from "@/components/Home";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/siteConfig";

export const metadata: Metadata = createPageMetadata({
  title: "Kitchen Tools Store — Ethiopia",
  description:
    "Shop professional knives, cookware, mitad tools, and coffee gear at KitchenEdge. Prices in ETB with delivery in Addis Ababa and major cities.",
});

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
