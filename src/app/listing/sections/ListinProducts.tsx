import Product from "@/components/Product";
import { PRODUCTS } from "@/constants";
import React from "react";

function ListinProducts() {
  return (
    <div>
      <div
        data-testid="listing-products"
        className="grid grid-cols-1 md:grid-cols-4 gap-4 container mx-auto mt-6"
      >
        {PRODUCTS.map((product, index) => (
          <Product product={product} small={false} key={index} bordered />
        ))}
      </div>
    </div>
  );
}

export default ListinProducts;
