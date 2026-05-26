import React from "react";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";

import { Metadata } from "next";
import { createPageMetadata } from "@/lib/siteConfig";

export const metadata: Metadata = createPageMetadata({
  title: "Shop — Grid View",
  description: "Browse all kitchen tools in ETB at KitchenEdge Ethiopia.",
});

const ShopWithoutSidebarPage = () => {
  return (
    <main>
      <ShopWithoutSidebar />
    </main>
  );
};

export default ShopWithoutSidebarPage;
