import Product from "@/components/Product";
import SpecialProduct from "@/components/SpecialProduct";
import { PRODUCTS } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HotDeals() {
  return (
    <section className="py-12 mt-12 px-4 bg-[#F7F7F7]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-[32px] font-semibold">Hot Deals</h3>
          <Link href="/listing" className="text-success font-medium flex">
            View all <ArrowRight className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-5 grid-rows-3 border border-gray-200 rounded-[8px] overflow-hidden gap-px bg-gray-200">
          {[...PRODUCTS, PRODUCTS[0], PRODUCTS[0]].map((product, index) => {
            return index === 0 ? (
              <div className="col-span-2 row-span-2">
                <SpecialProduct product={product} />
              </div>
            ) : (
              <div className="col-span-1 row-span-1">
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
