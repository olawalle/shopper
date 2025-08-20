import { AppSelect } from "@/components/AppSelect";
import { X } from "lucide-react";
import React from "react";

function Filters() {
  const activeFilters = ["Wing Chair", "Min $300 - Max 500"];
  return (
    <section className="">
      <div className="container mx-auto flex items-center justify-between gap-4 pt-[30px]">
        <div className="flex gap-4">
          <AppSelect placeholder="Select Category" />
          <AppSelect placeholder="Select Price" />
          <AppSelect placeholder="Select Rating" />
        </div>
        <div className="flex gap-4">
          <AppSelect placeholder="Sort by: Latest" />
          <AppSelect placeholder="Show: 16" />
        </div>
      </div>
      <div className="border-b border-t border-gray-200 mt-6">
        <div className="container mx-auto py-4">
          <div className="flex items-center justify-between">
            <div className="flex">
              <h2 className="text-gray-500 mr-[30px]">Active Filters:</h2>

              {activeFilters.map((item) => (
                <button className="flex mr-4 text-gray-900" key={item}>
                  {item} <X className="ml-2 text-gray-400 cursor-pointer" />
                </button>
              ))}
            </div>

            <span>
              <span className="font-medium">2,547</span>{" "}
              <span className="text-gray-500">Results found.</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Filters;
