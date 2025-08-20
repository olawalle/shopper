import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function BestDeals() {
  return (
    <section className="container mx-auto h-[350px] overflow-hidden rounded-[16px]">
      <div className=" rounded-xl flex flex-col md:flex-row items-center justify-between text-white relative min-h-[180px]">
        <Image
          src="/assets/banners/banner-7.jpg"
          alt="Banner"
          width={220}
          height={120}
          className="w-full object-cover mt-4 md:mt-0 absolute right-0 z-[1] rotate-180"
        />
        <div className="absolute left-[60px] p-4 z-[2] h-full pt-[50px]">
          <h4 className="text-[16px] uppercase font-semibold mb-2">
            Best Deals
          </h4>
          <p className="text-[40px] font-semibold text-white">
            Sale of the Month
          </p>

          <div className="flex gap-2 mt-4">
            <div className="W-[100px] flex flex-col items-center">
              <p className="text-success text-[24px]">00</p>
              <p className="text-[#FFFFFFCC] text-[12px]">DAYS</p>
            </div>
            <span className="text-[20px] text-[#FFFFFF99] -mt-[1px] mx-2">
              :
            </span>
            <div className="W-[100px] flex flex-col items-center">
              <p className="text-success text-[24px]">02</p>
              <p className="text-[#FFFFFFCC] text-[12px]">HOURS</p>
            </div>
            <span className="text-[20px] text-[#FFFFFF99] -mt-[1px] mx-2">
              :
            </span>
            <div className="W-[100px] flex flex-col items-center">
              <p className="text-success text-[24px]">18</p>
              <p className="text-[#FFFFFFCC] text-[12px]">MIN</p>
            </div>
            <span className="text-[20px] text-[#FFFFFF99] -mt-[1px] mx-2">
              :
            </span>
            <div className="W-[100px] flex flex-col items-center">
              <p className="text-success text-[24px]">30</p>
              <p className="text-[#FFFFFFCC] text-[12px]">SEC</p>
            </div>
          </div>
          <button className="bg-success text-[#ffffffc8] font-medium px-6 py-2 rounded-full w-max flex items-center mt-4">
            Shop Now <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default BestDeals;
