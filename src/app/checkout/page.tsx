import AppInput from "@/components/AppInput";
import { AppSelect } from "@/components/AppSelect";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ChevronRight, Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import React from "react";

function CartPage() {
  const cartItems = [
    {
      product: "/assets/products/p-2.jpg",
      price: 14.0,
      quantity: 5,
      name: "Green Capsicum",
    },
    {
      product: "/assets/products/p-3.jpg",
      price: 10.0,
      quantity: 2,
      name: "Red Bell Pepper",
    },
  ];
  return (
    <div className="bg-[#ffffff]">
      <div className="flex flex-col md:flex-row items-center justify-between text-white relative h-[120px] overflow-hidden">
        <Image
          src="/assets/banners/banner-7.jpg"
          alt="Banner"
          width={220}
          height={120}
          className="w-full object-cover mt-4 md:mt-0 absolute right-0 z-[1] rotate-180"
        />
        <div className="absolute left-0 w-full z-[2]">
          <div className="flex items-center py-5 text-gray-400 h-full container mx-auto">
            <img src="/assets/home.svg" alt="Home" />{" "}
            <ChevronRight className="mx-2" size={18} />
            <p>Shopping Cart</p>
            <ChevronRight />
            <span className="text-success">Shopping cart</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-[60px]">
        <div className="mt-6 flex gap-6">
          <div className="w-2/3">
            <h4>Billing Information</h4>
            <form className="mt-6 flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-4">
                <AppInput
                  label="First name"
                  placeholder="Your first name"
                  className="w-full"
                />
                <AppInput
                  label="Last name"
                  placeholder="Your last name"
                  className="w-full"
                />
                <AppInput
                  label="Company Name (optional)"
                  placeholder="Company name"
                  className="w-full"
                />
              </div>
              <AppInput
                label="Street Address"
                placeholder="Your street address"
                className="w-full"
              />
              <div className="grid grid-cols-3 gap-4">
                <AppSelect
                  label="Country / Region"
                  placeholder="Country"
                  className="w-full"
                />
                <AppSelect
                  label="State"
                  placeholder="State"
                  className="w-full"
                />
                <AppInput
                  label="Zip Code"
                  placeholder="Zip Code"
                  className="w-full"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <AppInput
                  label="Email"
                  className="w-full"
                  placeholder="Email"
                />
                <AppInput
                  label="Phone"
                  className="w-full"
                  placeholder="Phone"
                />
              </div>
              <div className="flex items-center">
                <div className="flex items-center gap-3">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-gray-700">
                    Ship to a different address
                  </Label>
                </div>
              </div>
            </form>
          </div>
          <div className="w-1/3 border border-gray-200 rounded-[8px] p-4 h-fit">
            <h4 className="font-medium text-[20px]">Order Summary</h4>

            <div className="py-2 mt-[20px]">
              {cartItems.map((item, i) => (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={item.product}
                      width={100}
                      height={100}
                      className="w-[60px]"
                      alt="product item"
                    />
                    <p className="ml-2 text-gray-900 text-[14px]">
                      {item.name} <span>x{item.quantity}</span>
                    </p>
                  </div>
                  <p className="text-gray-900 font-medium">
                    ${item.price.toFixed(2)}{" "}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between py-2 mt-[20px]">
              <p className="text-gray-700">Subtotal:</p>
              <p className="text-gray-900">$84.00</p>
            </div>
            <div className="flex items-center justify-between py-2 border-t border-b border-gray-200">
              <p className="text-gray-700">Shipping:</p>
              <p className="text-gray-900">Free</p>
            </div>
            <div className="flex items-center justify-between py-2 text-[16px]">
              <p className="text-gray-700">Total:</p>
              <p className="text-gray-900 font-semibold">$184.00</p>
            </div>

            <button className="bg-success text-white w-full rounded-full mt-6 h-[50px]">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
