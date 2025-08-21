import Image from "next/image";
import React from "react";

function Footer() {
  const paymentOptions = [
    "/assets/apple-pay.svg",
    "/assets/visa.svg",
    "/assets/discover.svg",
    "/assets/master-card.svg",
    "/assets/secure-payment.svg",
  ];
  return (
    <footer className="bg-[#222] text-white py-8">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap gap-8">
        <div className="w-full md:w-[300px]">
          <div className="flex items-center gap-2 mb-2">
            <Image
              src="/assets/logo-white.svg"
              alt="Logo"
              width={200}
              height={200}
              className="h-[50px]"
            />
          </div>
          <p className="text-sm text-gray-500 mb-2">
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
            dui, eget bibendum magna congue nec.
          </p>
          <div className="flex text-white mt-2">
            <p className="border-b-2 pb-1 border-success">(219) 555-0114</p>
            <span className="mx-4 text-gray-500">or</span>
            <p className="border-b-2 pb-1 border-success">Proxy@gmail.com</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 flex-1 shrink-0">
          <div className="mt-4 md:mt-0">
            <h5 className="font-medium mb-2">My Account</h5>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="hover:text-white">
                <a href="#">Orders</a>
              </li>
              <li className="hover:text-white">
                <a href="#">Wishlist</a>
              </li>
              <li className="hover:text-white">
                <a href="#">Track Order</a>
              </li>
              <li className="hover:text-white">
                <a href="#">Manage Account</a>
              </li>
            </ul>
          </div>
          <div className="mt-4 md:mt-0">
            <h5 className="font-medium mb-2">Help</h5>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="hover:text-white">
                <a href="#">Customer Support</a>
              </li>
              <li className="hover:text-white">
                <a href="#">Shipping</a>
              </li>
              <li className="hover:text-white">
                <a href="#">Returns</a>
              </li>
              <li className="hover:text-white">
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="mt-4 md:mt-0">
            <h5 className="font-medium mb-2">Proxy</h5>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="hover:text-white">
                <a href="#">About</a>
              </li>
              <li className="hover:text-white">
                <a href="#">Shop</a>
              </li>
              <li className="hover:text-white">
                <a href="#">Product</a>
              </li>
              <li className="hover:text-white">
                <a href="#">Track Order</a>
              </li>
            </ul>
          </div>
          <div className="mt-4 md:mt-0">
            <h5 className="font-medium mb-2">Categories</h5>
            <ul className="text-sm text-gray-400 space-y-2">
              <li className="hover:text-white">
                <a href="#">Fresh Fruit</a>
              </li>
              <li className="hover:text-white">
                <a href="#">Vegetables</a>
              </li>
              <li className="hover:text-white">
                <a href="#">Meat & Fish</a>
              </li>
              <li className="hover:text-white">
                <a href="#">Snacks</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container border-t border-[#323232] flex flex-wrap md:flex-nowrap items-center justify-between mx-auto pt-6 mt-6">
        <p className="text-gray-500 text-sm w-full md:w-fit">
          Ecobazar eCommerce © 2021. All Rights Reserved
        </p>

        <div className="flex gap-2 w-full md:w-fit">
          {paymentOptions.map((option, i) => (
            <button
              key={i}
              className="border border-[#333333] bg-[#1A1A1A] w-[45px] h-[30px] rounded-[8px] flex items-center justify-center"
            >
              <img src={option} alt="" />
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
