"use client";
import React, { useState } from "react";
import Link from "next/link";
import Breadcrumb from "../Common/Breadcrumb";
import Login from "./Login";
import Shipping from "./Shipping";
import ShippingMethod from "./ShippingMethod";
import PaymentMethod from "./PaymentMethod";
import Coupon from "./Coupon";
import Billing from "./Billing";
import { formatPrice } from "@/lib/formatPrice";
import { useAppSelector } from "@/redux/store";
import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useSelector } from "react-redux";
import {
  getShippingLabel,
  getShippingPrice,
  ShippingMethodId,
} from "@/lib/shippingOptions";

const Checkout = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const subtotal = useSelector(selectTotalPrice);
  const [shippingMethod, setShippingMethod] =
    useState<ShippingMethodId>("addis-standard");

  const shippingFee = getShippingPrice(shippingMethod, subtotal);
  const orderTotal = subtotal + shippingFee;
  const cartEmpty = cartItems.length === 0;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartEmpty) return;
    window.location.href = "/mail-success";
  };

  return (
    <>
      <Breadcrumb title={"Checkout"} pages={["checkout"]} />
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          {cartEmpty ? (
            <div className="bg-white shadow-1 rounded-[10px] p-8 text-center">
              <p className="text-dark mb-4">Your cart is empty.</p>
              <Link
                href="/shop-with-sidebar"
                className="inline-flex font-medium text-white bg-blue py-3 px-6 rounded-md hover:bg-blue-dark"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <form onSubmit={handlePlaceOrder}>
              <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11">
                <div className="lg:max-w-[670px] w-full">
                  <Login />
                  <Billing />
                  <Shipping />

                  <div className="bg-white shadow-1 rounded-[10px] p-4 sm:p-8.5 mt-7.5">
                    <div>
                      <label htmlFor="notes" className="block mb-2.5">
                        Other Notes (optional)
                      </label>

                      <textarea
                        name="notes"
                        id="notes"
                        rows={5}
                        placeholder="Notes about your order, e.g. delivery instructions for Addis Ababa."
                        className="rounded-md border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full p-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="max-w-[455px] w-full">
                  <div className="bg-white shadow-1 rounded-[10px]">
                    <div className="border-b border-gray-3 py-5 px-4 sm:px-8.5">
                      <h3 className="font-medium text-xl text-dark">
                        Your Order
                      </h3>
                    </div>

                    <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
                      <div className="flex items-center justify-between py-5 border-b border-gray-3">
                        <div>
                          <h4 className="font-medium text-dark">Product</h4>
                        </div>
                        <div>
                          <h4 className="font-medium text-dark text-right">
                            Subtotal
                          </h4>
                        </div>
                      </div>

                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between py-5 border-b border-gray-3"
                        >
                          <div>
                            <p className="text-dark">
                              {item.title}
                              {item.quantity > 1
                                ? ` × ${item.quantity}`
                                : ""}
                            </p>
                          </div>
                          <div>
                            <p className="text-dark text-right">
                              {formatPrice(
                                item.discountedPrice * item.quantity
                              )}
                            </p>
                          </div>
                        </div>
                      ))}

                      <div className="flex items-center justify-between py-5 border-b border-gray-3">
                        <div>
                          <p className="text-dark">
                            {getShippingLabel(shippingMethod)}
                          </p>
                        </div>
                        <div>
                          <p className="text-dark text-right">
                            {shippingFee === 0
                              ? "Free"
                              : formatPrice(shippingFee)}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-5">
                        <div>
                          <p className="font-medium text-lg text-dark">Total</p>
                        </div>
                        <div>
                          <p className="font-medium text-lg text-dark text-right">
                            {formatPrice(orderTotal)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Coupon />
                  <ShippingMethod
                    value={shippingMethod}
                    onChange={setShippingMethod}
                    subtotal={subtotal}
                  />
                  <PaymentMethod />

                  <button
                    type="submit"
                    className="w-full flex justify-center font-medium text-white bg-blue py-3 px-6 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
                  >
                    Place Order
                  </button>
                  <p className="text-custom-xs text-dark-4 text-center mt-3">
                    Demo only — no real payment is processed.
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
};

export default Checkout;
