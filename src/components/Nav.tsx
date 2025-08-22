"use client";
import AppInput from "@/components/AppInput";
import { AppSelect } from "@/components/AppSelect";
import { Select } from "@/components/ui/select";
import clsx from "clsx";
import { ChevronDown, Menu, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import AppButton from "./AppButton";

const AppSearch = () => {
  return (
    <AppInput
      inputClass="!pl-[40px]"
      prefixElement={
        <div className="flex items-center justify-center px-2 h-full">
          <Search color="#666666" />
        </div>
      }
      suffixElement={
        <button className="bg-success text-white h-full px-6 rounded-r-[8px]">
          Search
        </button>
      }
      placeholder="Search"
    />
  );
};

function Nav() {
  const [open, setOpen] = useState<boolean>(false);
  const submenuItems = [
    "Home",
    "Shop",
    "Pages",
    "Blog",
    "About Us",
    "Contact Us",
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 w-full min-h-[50px]">
      <div className="hidden md:block">
        <div className="border-b border-gray-200 hidden md:block">
          <div className="container mx-auto flex items-center justify-between py-4">
            <div className="flex text-light gap-2">
              <Image
                src="/assets/location.svg"
                alt="Location"
                width={20}
                height={20}
              />{" "}
              <span>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
            </div>

            <div className="flex">
              <AppSelect
                className="!border-0 !text-light"
                options={[
                  { label: "Eng", value: "English" },
                  {
                    label: "Fr",
                    value: "French",
                  },
                ]}
                value="English"
              />
              <AppSelect
                className="!border-0 !text-light"
                options={[
                  { label: "USD", value: "USD" },
                  {
                    label: "NGN",
                    value: "NGN",
                  },
                ]}
                value="USD"
              />
              <div className="shrink-0 flex items-center border-l border-gray-200 pl-4 ml-4 text-light">
                <Link href="/auth">
                  Sign In <span className="mx-1">/</span> Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto hidden md:flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/assets/logo.svg"
                alt="Logo"
                width={200}
                height={200}
                className="h-[40px]"
              />
            </Link>
          </div>
          <div className="w-[500px] mx-8">
            <AppSearch />
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2">
              <Image
                src="/assets/fav.svg"
                alt="Phone"
                width={100}
                height={100}
                className="h-[32px] w-[32px]"
              />
            </button>
            <div className="border-l border-gray-200 h-[20px]" />
            <Link href="/cart" className="p-2 flex items-center gap-2">
              <div className="relative">
                <Image
                  src="/assets/bag.svg"
                  alt="Cart"
                  width={24}
                  height={24}
                  className="h-[32px] w-[32px]"
                />
                <div className="bg-[#2C742F] border-white text-[12px] border-2 rounded-full flex items-center justify-center w-[24px] h-[24px] absolute -top-1 -right-2 text-white">
                  2
                </div>
              </div>
              <div className="text-left pl-2">
                <p className="text-gray-700 text-[11px]">Shopping cart:</p>
                <p className="text-[#1A1A1A] font-medium">$57.00</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-[#333333] h-[60px] hidden md:block">
          <div className="container mx-auto h-full flex items-center justify-between">
            <div className="flex items-center h-full">
              {submenuItems.map((item) => (
                <div
                  key={item}
                  className="text-white mr-4 py-2 hover:bg-[#444444] flex items-center text-[14px] gap-1"
                >
                  {item} <ChevronDown size={14} />
                </div>
              ))}
            </div>

            <div className="flex items-center text-white">
              <img src="/assets/phone.svg" alt="Language" />{" "}
              <span className="ml-2">(219) 555-0114</span>
            </div>
          </div>
        </div>
      </div>

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
                  {submenuItems.map((item) => (
                    <li key={item} className="py-2 mb-4">
                      <Link href="#">{item}</Link>
                    </li>
                  ))}
                </ul>
              }
            </div>

            <div className="flex flex-col gap-2">
              <AppSearch />
              <AppButton variant="primary">Login</AppButton>
              <AppButton variant="outline">Signup</AppButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Nav;
