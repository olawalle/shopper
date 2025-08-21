import { AppSelect } from "@/components/AppSelect";
import { X } from "lucide-react";
import React from "react";

function Filters() {
  const activeFilters = ["Wing Chair", "Min $300 - Max 500"];
  return (
    <section className="">
      <div className="container mx-auto md:flex items-center justify-between gap-4 pt-[30px]">
        <div className="flex md:flex-row flex-col gap-4">
          <AppSelect placeholder="Select Category" className="mb-2 md:mb-0" />
          <AppSelect placeholder="Select Price" className="mb-2 md:mb-0" />
          <AppSelect placeholder="Select Rating" className="mb-2 md:mb-0" />
        </div>
        <div className="flex md:flex-row flex-col gap-4">
          <AppSelect placeholder="Sort by: Latest" className="mb-2 md:mb-0" />
          <AppSelect placeholder="Show: 16" />
        </div>
      </div>
      <div className="border-b border-t border-gray-200 mt-6">
        <div className="container mx-auto py-4">
          <div className="flex md:items-center justify-between">
            <div className="md:flex w-2/3">
              <h2 className="text-gray-500 mr-[30px]">Active Filters:</h2>

              <div className="flex">
                {activeFilters.map((item) => (
                  <button
                    className="flex items-center mr-1 md:mr-4 text-gray-900 text-[12px] md:text-[14px]"
                    key={item}
                  >
                    {item}{" "}
                    <X
                      size={14}
                      className="ml-2 text-gray-400 cursor-pointer"
                    />
                  </button>
                ))}
              </div>
            </div>

            <span className="text-[12px] md:text-[14px]">
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
