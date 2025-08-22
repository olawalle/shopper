import AppButton from "@/components/AppButton";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="container mx-auto flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-6 mt-8 md:px-0 px-4 min-h-[600px]">
      <div
        data-testid="hero-banner-1"
        className="rounded-xl text-white overflow-hidden min-h-[320px] md:h-[600px] relative w-full md:w-2/3"
      >
        <div className="absolute top-0 left-0 w-full z-[2] h-full flex flex-col justify-center pl-4 md:pl-[40px] bg-gradient-to-r from-[#00000099] to-[#00000000]">
          <h2 className="text-[32px] md:text-[48px] leading-[36px] md:leading-[52px] mb-4 md:mb-6 font-semibold">
            Fresh & Healthy <span className="block"> Organic Food</span>
          </h2>
          <div className="border-l border-[#84D187] pl-3 md:pl-4 mb-4 md:mb-6">
            <p className="mb-1 text-[16px] md:text-[20px] font-medium">
              Sale up to{" "}
              <span className="font-semibold bg-warning px-2 py-1 rounded-[4px]">
                35% OFF
              </span>
            </p>
            <p className="text-[12px] md:text-[14px] font-light">
              Free shipping on all your order.
            </p>
          </div>
          <AppButton variant="white" className="w-fit gap-2">
            Shop now <ArrowRight />
          </AppButton>
        </div>
        <Image
          src="/assets/banners/banner-1.jpg"
          alt="Banner"
          width={220}
          height={220}
          className="absolute left-0 top-0 rounded-xl h-full w-full object-cover block z-[1]"
        />
      </div>
      <div className="flex flex-col gap-4 w-full md:w-1/3 min-h-[320px]">
        <div
          data-testid="hero-banner-2"
          className="bg-white rounded-xl flex flex-col items-center justify-center h-[180px] md:h-[290px] shrink-0 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full pl-4 md:pl-[40px] pt-4 md:pt-[40px] flex flex-col rounded-xl z-[2]">
            <p className="text-[12px] md:text-[14px] font-medium tracking-[3%] uppercase">
              Summer Sale
            </p>
            <p className="text-[20px] md:text-[32px] font-semibold">75% OFF</p>
            <p className="text-light font-light mt-2 text-xs md:text-base">
              Only Fruit & Vegetable
            </p>

            <AppButton variant="white" className="w-fit gap-2">
              Shop Now <ArrowRight />
            </AppButton>
          </div>
          <Image
            src="/assets/banners/banner-2.jpg"
            alt="Sale"
            width={120}
            height={80}
            className="rounded-lg w-full h-full object-cover z-[1] -scale-x-100"
          />
        </div>

        <div
          data-testid="hero-banner-3"
          className="bg-white rounded-xl flex flex-col items-center justify-center h-[180px] md:h-[290px] shrink-0 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[#002603CC] flex flex-col items-center justify-center text-white rounded-xl z-[2] px-2 md:px-0">
            <span className="uppercase font-medium text-xs md:text-base">
              Best Deal
            </span>
            <span className="text-[16px] md:text-[32px] font-semibold max-w-[180px] md:max-w-[300px] text-center">
              Special Products Deal of the Month
            </span>
            <AppButton variant="white" className="w-fit gap-2">
              Shop Now <ArrowRight />
            </AppButton>
          </div>
          <Image
            src="/assets/banners/banner-3.jpg"
            alt="Sale"
            width={120}
            height={80}
            className="rounded-lg w-full h-full object-cover z-[1] -scale-x-100"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
