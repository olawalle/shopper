import { ChevronRight } from "lucide-react";
import React from "react";
import BestDeals from "./sections/BestDeals";
import Filters from "./sections/Filters";
import ListinProducts from "./sections/ListinProducts";

function Listingpage() {
  return (
    <div className="bg-[#ffffff] min-h-screen">
      <div className="container mx-auto flex items-center py-5 text-gray-600">
        <img src="/assets/home.svg" alt="Home" />{" "}
        <ChevronRight className="mx-1" size={14} />
        <span>Categories</span>
        <ChevronRight className="mx-1" size={14} />
        <span className="text-success">Vegetables</span>
      </div>
      <BestDeals />
      <Filters />
      <ListinProducts />
    </div>
  );
}

export default Listingpage;
