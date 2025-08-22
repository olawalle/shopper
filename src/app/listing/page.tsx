import { ChevronRight } from "lucide-react";
import React from "react";
import BestDeals from "./sections/BestDeals";
import Filters from "./sections/Filters";
import ListinProducts from "./sections/ListinProducts";
import Pagination from "@/components/Pagination";

interface ListingPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

function Listingpage({ searchParams }: ListingPageProps) {
  const pageParam = searchParams?.page;
  const currentPage = pageParam
    ? parseInt(Array.isArray(pageParam) ? pageParam[0] : pageParam, 10)
    : 1;
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
      <div className="flex justify-center mt-[40px]">
        <Pagination
          totalPages={21}
          currentPage={currentPage}
          basePath="/listing"
        />
      </div>
    </div>
  );
}

export default Listingpage;
