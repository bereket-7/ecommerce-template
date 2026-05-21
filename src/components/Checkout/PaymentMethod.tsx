import React, { useState } from "react";
import Image from "next/image";

const PaymentMethod = () => {
  const [payment, setPayment] = useState("telebirr");
  return (
    <div className="bg-white shadow-1 rounded-[10px] mt-7.5">
      <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
        <h3 className="font-medium text-xl text-dark">Payment Method</h3>
      </div>

      <div className="p-4 sm:p-8.5">
        <div className="flex flex-col gap-3">
          <label
            htmlFor="telebirr"
            className="flex cursor-pointer select-none items-center gap-4"
          >
            <div className="relative">
              <input
                type="radio"
                name="payment"
                id="telebirr"
                className="sr-only"
                checked={payment === "telebirr"}
                onChange={() => setPayment("telebirr")}
              />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full ${
                  payment === "telebirr"
                    ? "border-4 border-blue"
                    : "border border-gray-4"
                }`}
              />
            </div>
            <div
              className={`rounded-md border-[0.5px] py-3.5 px-5 w-full ease-out duration-200 ${
                payment === "telebirr"
                  ? "border-transparent bg-gray-2"
                  : "border-gray-4 shadow-1"
              }`}
            >
              <p className="font-medium text-dark">Telebirr</p>
              <p className="text-custom-xs text-dark-4">Pay with mobile money</p>
            </div>
          </label>

          <label
            htmlFor="cbe"
            className="flex cursor-pointer select-none items-center gap-4"
          >
            <div className="relative">
              <input
                type="radio"
                name="payment"
                id="cbe"
                className="sr-only"
                checked={payment === "cbe"}
                onChange={() => setPayment("cbe")}
              />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full ${
                  payment === "cbe"
                    ? "border-4 border-blue"
                    : "border border-gray-4"
                }`}
              />
            </div>
            <div
              className={`rounded-md border-[0.5px] py-3.5 px-5 w-full ease-out duration-200 ${
                payment === "cbe"
                  ? "border-transparent bg-gray-2"
                  : "border-gray-4 shadow-1"
              }`}
            >
              <div className="flex items-center">
                <div className="pr-2.5">
                  <Image src="/images/checkout/bank.svg" alt="bank" width={29} height={12} />
                </div>
                <div className="border-l border-gray-4 pl-2.5">
                  <p className="font-medium text-dark">CBE Birr</p>
                  <p className="text-custom-xs text-dark-4">Bank transfer</p>
                </div>
              </div>
            </div>
          </label>

          <label
            htmlFor="cash"
            className="flex cursor-pointer select-none items-center gap-4"
          >
            <div className="relative">
              <input
                type="radio"
                name="payment"
                id="cash"
                className="sr-only"
                checked={payment === "cash"}
                onChange={() => setPayment("cash")}
              />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-full ${
                  payment === "cash"
                    ? "border-4 border-blue"
                    : "border border-gray-4"
                }`}
              />
            </div>
            <div
              className={`rounded-md border-[0.5px] py-3.5 px-5 w-full ease-out duration-200 ${
                payment === "cash"
                  ? "border-transparent bg-gray-2"
                  : "border-gray-4 shadow-1"
              }`}
            >
              <div className="flex items-center">
                <div className="pr-2.5">
                  <Image src="/images/checkout/cash.svg" alt="cash" width={21} height={21} />
                </div>
                <div className="border-l border-gray-4 pl-2.5">
                  <p className="font-medium text-dark">Cash on delivery</p>
                  <p className="text-custom-xs text-dark-4">Pay when your order arrives</p>
                </div>
              </div>
            </div>
          </label>
        </div>
        <p className="text-custom-sm text-dark-4 mt-4">
          Demo storefront only — no real payments are processed.
        </p>
      </div>
    </div>
  );
};

export default PaymentMethod;
