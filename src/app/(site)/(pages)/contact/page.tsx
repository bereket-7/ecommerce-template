import Contact from "@/components/Contact";

import { Metadata } from "next";
import { createPageMetadata } from "@/lib/siteConfig";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us",
  description:
    "Contact KitchenEdge in Addis Ababa. Phone +251, email, and store address.",
});

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;
