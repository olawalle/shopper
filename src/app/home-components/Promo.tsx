import AppButton from "@/components/AppButton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function Promo() {
  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
      <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[550px] bg-black">
        <div className="rounded-xl px-6 py-[40px] text-white flex flex-col items-center absolute top-0 left-0 w-full h-full z-[2]">
          <span className="leading-[3%] uppercase">Best Deals</span>
          <span className="font-semibold text-[24px] md:text-[40px] mt-4">
            Sale of the Month
          </span>
          <div className="flex gap-2 justify-center">
            <div className="W-[100px] flex flex-col items-center">
              <p className="font-medium text-[24px]">00</p>
              <p className="text-[#FFFFFFCC] text-[12px]">DAYS</p>
            </div>
            <span className="text-[30px] text-[#FFFFFF99] -mt-[6px] mx-2">
              :
            </span>
            <div className="W-[100px] flex flex-col items-center">
              <p className="font-medium text-[24px]">02</p>
              <p className="text-[#FFFFFFCC] text-[12px]">HOURS</p>
            </div>
            <span className="text-[30px] text-[#FFFFFF99] -mt-[6px] mx-2">
              :
            </span>
            <div className="W-[100px] flex flex-col items-center">
              <p className="font-medium text-[24px]">18</p>
              <p className="text-[#FFFFFFCC] text-[12px]">MIN</p>
            </div>
            <span className="text-[30px] text-[#FFFFFF99] -mt-[6px] mx-2">
              :
            </span>
            <div className="W-[100px] flex flex-col items-center">
              <p className="font-medium text-[24px]">30</p>
              <p className="text-[#FFFFFFCC] text-[12px]">SEC</p>
            </div>
          </div>
          <AppButton variant="white" className="w-fit gap-2 mt-4">
            Shop now <ArrowRight />
          </AppButton>
        </div>
        <Image
          src="/assets/banners/banner-4.jpg"
          alt="Promo"
          layout="fill"
          className="absolute top-0 z-[1] h-[550px]"
        />
      </div>
      <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[550px] bg-black">
        <div className="rounded-xl px-6 py-[40px] text-white flex flex-col items-center absolute top-0 left-0 w-full h-full z-[2]">
          <span className="leading-[3%] uppercase">85% Fat Free</span>
          <span className="font-semibold text-[24px] md:text-[40px] mt-4">
            Low-Fat Meat
          </span>
          <div className="flex">
            <p className="text-[20px] font-medium">
              Started at <div className="text-warning">$79.99</div>
            </p>
          </div>
          <AppButton variant="white" className="w-fit gap-2 mt-4">
            Shop now <ArrowRight />
          </AppButton>
        </div>
        <Image
          src="/assets/banners/banner-5.jpg"
          alt="Promo"
          layout="fill"
          className="absolute top-0 z-[1] h-[550px] mt-[100px]"
        />
      </div>
      <div className="relative rounded-2xl overflow-hidden h-[400px] md:h-[550px] bg-[#FCC900]">
        <div className="rounded-xl px-6 py-[40px] text-black flex flex-col items-center absolute top-0 left-0 w-full h-full z-[2]">
          <span className="leading-[3%] uppercase">Best Deals</span>
          <span className="font-semibold text-[24px] md:text-[40px] mt-4">
            Sale of the Month
          </span>
          <div className="flex">
            <p className="text-20px">
              Up to{" "}
              <div className="text-[#FCC900] bg-black px-2 py-1 rounded-[5px]">
                64% OFF
              </div>
            </p>
          </div>
          <AppButton variant="white" className="w-fit gap-2 mt-4">
            Shop now <ArrowRight />
          </AppButton>
        </div>
        <Image
          src="/assets/banners/banner-6.jpg"
          alt="Promo"
          layout="fill"
          className="absolute top-0 z-[1] h-[750px] mt-[100px]"
        />
      </div>
    </section>
  );
}

export default Promo;
