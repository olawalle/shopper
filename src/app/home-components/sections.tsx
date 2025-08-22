import AppButton from "@/components/AppButton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function SummerSale() {
  return (
    <section className="container mx-auto mt-12 h-[450px] md:h-[350px] overflow-hidden rounded-[16px]">
      <div className=" rounded-xl flex flex-col md:flex-row items-center justify-between text-white relative h-full">
        <Image
          src="/assets/banners/banner-7.jpg"
          alt="Banner"
          width={220}
          height={120}
          className="w-full h-full md:h-auto md:object-cover md:mt-0 absolute left-0 z-[1] -rotate-90 md:rotate-0"
        />
        <div className="absolute right-0 md:right-[100px] p-4 z-[2] h-full pt-[50px] md:max-w-[300px]">
          <h4 className="text-[16px] uppercase font-semibold mb-2">
            Summer Sale
          </h4>
          <p className="text-[56px] font-black">
            <span className="text-warning">37%</span> OFF
          </p>
          <p className="text-[16px] mb-4">
            Free on all your order, Free Shipping and 30 days money-back
            guarantee
          </p>
          <AppButton className="bg-success text-[#ffffffc8] font-medium px-6 py-2 rounded-full w-max flex items-center">
            Shop Now <ArrowRight className="ml-2" />
          </AppButton>
        </div>
      </div>
    </section>
  );
}

export default SummerSale;
