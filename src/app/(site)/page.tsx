import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Tools Store",
  description:
    "Shop professional knives, cookware, gadgets, and storage at KitchenEdge.",
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
