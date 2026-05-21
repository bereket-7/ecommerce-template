import type { Metadata } from "next";
import { defaultMetadata } from "@/lib/siteConfig";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
