import React from "react";
import Cart from "@/components/Cart";

import { Metadata } from "next";
import { createPageMetadata } from "@/lib/siteConfig";

export const metadata: Metadata = createPageMetadata({
  title: "Shopping Cart",
  description: "Review your kitchen tools order in ETB before checkout.",
});

const CartPage = () => {
  return (
    <>
      <Cart />
    </>
  );
};

export default CartPage;
