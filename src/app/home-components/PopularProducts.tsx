import Product from "@/components/Product";
import { PRODUCTS } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function PopularProducts() {
  return (
    <section className="container mx-auto mt-12">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[32px] text-[#1A1A1A] font-semibold">
          Popular Products
        </h3>
        <Link href="/listing" className="text-success font-medium flex">
          View all <ArrowRight className="ml-2" />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-gray-200 border border-gray-200 rounded-[5px] overflow-hidden">
        {PRODUCTS.map((prod, i) => (
          <Product key={i} product={prod} />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
