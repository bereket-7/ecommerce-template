import React from "react";
import Checkout from "@/components/Checkout";

import { Metadata } from "next";
import { createPageMetadata } from "@/lib/siteConfig";

export const metadata: Metadata = createPageMetadata({
  title: "Checkout",
  description:
    "Checkout with Telebirr, CBE Birr, or cash on delivery. Shipping within Ethiopia.",
});

const CheckoutPage = () => {
  return (
    <main>
      <Checkout />
    </main>
  );
};

export default CheckoutPage;
