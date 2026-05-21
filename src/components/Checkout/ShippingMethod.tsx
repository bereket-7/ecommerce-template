"use client";
import React, { useState } from "react";
import { formatPrice } from "@/lib/formatPrice";
import { siteConfig } from "@/lib/siteConfig";

const ShippingMethod = () => {
  const [shippingMethod, setShippingMethod] = useState("addis-standard");

  const options = [
    {
      id: "addis-standard",
      title: "Addis Ababa — Standard",
      price: 0,
      note: `Free on orders over ${siteConfig.shipping.freeThreshold.toLocaleString()} ETB`,
    },
    {
      id: "addis-express",
      title: "Addis Ababa — Express",
      price: 250,
      note: "Same-day in select areas",
    },
    {
      id: "other-cities",
      title: "Other cities",
      price: 450,
      note: "Adama, Hawassa, Bahir Dar, Dire Dawa & more",
    },
  ];

  return (
    <div className="bg-white shadow-1 rounded-[10px] mt-7.5">
      <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
        <h3 className="font-medium text-xl text-dark">Delivery</h3>
        <p className="text-custom-sm text-dark-4 mt-1">
          Shipping within {siteConfig.country}
        </p>
      </div>

      <div className="p-4 sm:p-8.5">
        <div className="flex flex-col gap-4">
          {options.map((option) => (
            <label
              key={option.id}
              htmlFor={option.id}
              className="flex cursor-pointer select-none items-start gap-3.5"
            >
              <div className="relative mt-1">
                <input
                  type="radio"
                  name="shipping"
                  id={option.id}
                  className="sr-only"
                  checked={shippingMethod === option.id}
                  onChange={() => setShippingMethod(option.id)}
                />
                <div
                  className={`flex h-4 w-4 items-center justify-center rounded-full ${
                    shippingMethod === option.id
                      ? "border-4 border-blue"
                      : "border border-gray-4"
                  }`}
                />
              </div>
              <div className="flex-1 rounded-md border border-gray-3 py-3.5 px-5">
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="font-semibold text-dark">{option.title}</p>
                    <p className="text-custom-xs text-dark-4">{option.note}</p>
                  </div>
                  <p className="font-semibold text-dark shrink-0">
                    {option.price === 0 ? "Free" : formatPrice(option.price)}
                  </p>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;
