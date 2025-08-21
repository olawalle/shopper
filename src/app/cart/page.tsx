import AppInput from "@/components/AppInput";
import clsx from "clsx";
import { ChevronRight, Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
      <div className="flex flex-row items-center justify-between text-white relative h-[120px] overflow-hidden">
        <Image
          src="/assets/banners/banner-7.jpg"
          alt="Banner"
          width={220}
          height={120}
          className="w-full object-cover mt-4 md:mt-0 absolute right-0 z-[1] rotate-180"
        />
        <div className="absolute left-0 w-full z-[2]">
          <div className="flex items-center py-5 text-gray-500 p-4 h-full container mx-auto">
            <img src="/assets/home.svg" alt="Home" />{" "}
            <ChevronRight className="mx-2" size={18} />
            <span className="text-success">Shopping cart</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-[60px]">
        <h3 className="text-[24px] md:text-[32px] font-semibold text-center">
          My Shopping Cart
        </h3>
        <div className="mt-6 md:flex gap-6">
          <div className="w-full md:w-2/3">
            <div className="border border-gray-200 rounded-[8px]">
              <div className="px-4 border-b border-gray-200 text-gray-500 uppercase py-3 hidden md:flex">
                <div className="w-[40%] flex items-center">
                  <p>Product</p>
                </div>
                <div className="w-[15%]">
                  <p>price</p>
                </div>
                <div className="w-[25%]">Quantity</div>
                <div className="w-[20%] flex justify-between items-center">
                  <p>Subtotal</p>
                </div>
              </div>
              <div className="px-4">
                {cartItems.map((item, i) => (
                  <div
                    className={clsx(
                      "px-2 md:h-[100px] flex flex-col md:flex-row gap-4 md:gap-0 pb-6 md:pb-0",
                      {
                        "border-b border-gray-200": i < cartItems.length - 1,
                      }
                    )}
                    key={i}
                  >
                    <div className="w-full md:w-[40%] flex md:flex-row flex-col md:items-center">
                      <Image
                        src={item.product}
                        width={100}
                        height={100}
                        alt="product image"
                      />
                      <p className="ml-2">{item.name}</p>
                    </div>
                    <div className="w-full md:w-[15%] flex items-center h-full">
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                    <div className="w-full md:w-[25%] flex items-center h-full">
                      <div className="border border-gray-200 rounded-full flex justify-between h-[50px] p-[8px] min-w-[150px]">
                        <button className="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#F2F2F2]">
                          <Minus size={16} />
                        </button>
                        <div className="mx-4 h-full flex items-center">
                          {item.quantity}
                        </div>
                        <button className="h-[32px] w-[32px] rounded-full flex items-center justify-center bg-[#F2F2F2]">
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="w-full md:w-[20%] flex justify-between items-center pr-4">
                      <p className="font-medium">
                        ${Number(item.price) * Number(item.quantity)}
                      </p>
                      <button className="w-[22px] h-[22px] rounded-full flex items-center justify-center border border-gray-200">
                        <X size={12} color="#666666" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row gap-2 md:gap-0 justify-between border-t border-gray-200 p-4">
                <button className="px-6 font-medium h-[45px] bg-[#F2F2F2] text-[#4D4D4D] rounded-full">
                  Return to shop
                </button>
                <button className="px-6 font-medium h-[45px] bg-[#F2F2F2] text-[#4D4D4D] rounded-full">
                  Update Cart
                </button>
              </div>
            </div>
            <div className="border border-gray-200 rounded-[8px] mt-4 md:flex justify-between items-center p-4 gap-4">
              <h4 className="w-[200px] mb-2 md:mb-0">Coupon Code</h4>
              <AppInput
                className="rounded-full bg-white w-full overflow-hidden"
                inputClass="rounded-full"
                placeholder="Enter code"
                suffixElement={
                  <button className="bg-gray-800 text-white px-6 h-full rounded-full font-medium">
                    Apply Coupon
                  </button>
                }
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0 border border-gray-200 rounded-[8px] p-4 h-fit">
            <h4 className="font-medium text-[20px]">Cart Total</h4>

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

            <Link
              href="/checkout"
              className="bg-success text-white w-full rounded-full mt-6 h-[50px] flex items-center justify-center"
            >
              Link to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
