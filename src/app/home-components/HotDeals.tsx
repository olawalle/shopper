import Product from "@/components/Product";
import SpecialProduct from "@/components/SpecialProduct";
import { PRODUCTS } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HotDeals() {
  return (
    <section className="py-12 mt-12 md:px-4 bg-[#F7F7F7]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[24px] md:text-[32px] font-semibold">
            Hot Deals
          </h3>
          <Link href="/listing" className="text-success font-medium flex">
            View all <ArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-3 border border-gray-200 rounded-[8px] overflow-hidden gap-px bg-gray-200">
          {[...PRODUCTS, PRODUCTS[0], PRODUCTS[0]].map((product, index) => {
            return index === 0 ? (
              <div className="md:col-span-2 md:row-span-2 h-fit">
                <SpecialProduct product={product} />
              </div>
            ) : (
              <div className="md:col-span-1 md:row-span-1 h-fit">
                <Product key={index} product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HotDeals;
