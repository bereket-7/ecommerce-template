import React from "react";
import { Wishlist } from "@/components/Wishlist";
import { Metadata } from "next";
import { createPageMetadata } from "@/lib/siteConfig";

export const metadata: Metadata = createPageMetadata({
  title: "Wishlist",
  description: "Save kitchen tools and cookware to your wishlist at KitchenEdge.",
});

const WishlistPage = () => {
  return (
    <main>
      <Wishlist />
    </main>
  );
};

export default WishlistPage;
