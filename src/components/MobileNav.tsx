"use client";
import { SUBMENU_ITEMS } from "@/constants";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AppSearch from "./AppSearch";
import AppButton from "./AppButton";
import { Menu, X } from "lucide-react";

function MobileNav() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className={clsx(
        "block md:hidden overflow-y-auto absolute left-0 w-full bg-white min-h-[50px]",
        {
          "h-screen": open,
        }
      )}
    >
      <div className="flex h-[50px] items-center justify-between w-full px-4 border-b border-gray-200">
        <Link href="/">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="h-[20px]"
          />
        </Link>
        <div className="flex gap-4">
          <Link href="/cart">
            <div className="relative">
              <Image
                src="/assets/bag.svg"
                alt="Cart"
                width={24}
                height={24}
                className="h-[24px] w-[24px]"
              />
              <div className="bg-[#2C742F] border-white text-[8px] border-2 rounded-full flex items-center justify-center w-[18px] h-[18px] absolute -top-1 -right-1 text-white">
                2
              </div>
            </div>
          </Link>
          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="w-full flex flex-col pb-[40px] flex-1 h-[calc(100%-50px)] justify-between pt-[20px] px-4 transition-all duration-300">
          <div>
            {
              <ul>
                {SUBMENU_ITEMS.map((item) => (
                  <li key={item} className="py-2 mb-4">
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            }
          </div>

          <div className="flex flex-col gap-2">
            <AppSearch />
            <AppButton variant="primary" data-testid="nav-login-btn">
              Login
            </AppButton>
            <AppButton variant="outline" data-testid="nav-signup-btn">
              Signup
            </AppButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileNav;
