import React from "react";
import Image from "next/image";

import { siteConfig } from "@/lib/siteConfig";

const featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Free Delivery",
    description: siteConfig.shipping.message,
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "Easy Returns",
    description: "30-day hassle-free returns",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "Secure Checkout",
    description: "Telebirr, CBE Birr, or cash on delivery",
  },
  {
    img: "/images/icons/icon-04.svg",
    title: "Kitchen Experts",
    description: "Product advice when you need it",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-[1060px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-wrap items-center gap-7.5 xl:gap-12.5 mt-10">
        {featureData.map((item, key) => (
          <div className="flex items-center gap-4" key={key}>
            <Image src={item.img} alt="icons" width={40} height={41} />

            <div>
              <h3 className="font-medium text-lg text-dark">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
