"use client";
import Pagination from "@/components/Pagination";
import Product from "@/components/Product";
import { PRODUCTS } from "@/constants";
import React from "react";

function ListinProducts() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 container mx-auto mt-6">
        {PRODUCTS.map((product, index) => (
          <Product product={product} small={false} key={index} bordered />
        ))}
      </div>
      <div className="flex justify-center mt-[40px]">
        <Pagination
          totalPages={21}
          currentPage={1}
          onPageChange={(e) => console.log(2)}
        />
      </div>
    </div>
  );
}

export default ListinProducts;
