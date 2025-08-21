import Product from "@/components/Product";
import { PRODUCTS } from "@/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function FeaturedProducts() {
  return (
    <section className="container mx-auto mt-12">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[20px] md:text-[32px] text-[#1A1A1A] font-semibold">
          Featured Products
        </h3>
        <Link href="/listing" className="text-success font-medium flex">
          View all <ArrowRight className="ml-2" />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border border-gray-200 gap-px bg-gray-200">
        {PRODUCTS.slice(0, 5).map((prod, i) => (
          <Product product={prod} key={i} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
