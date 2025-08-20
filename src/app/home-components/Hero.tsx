import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-6 mt-8 md:px-0 px-4 h-[600px]">
      <div className="rounded-xl text-white overflow-hidden h-[600px] relative w-full md:w-2/3">
        <div className="absolute top-0 left-0 w-full z-[2] h-full flex flex-col justify-center pl-[40px] bg-gradient-to-r from-[#00000099] to-[#00000000]">
          <h2 className="text-[48px] leading-[52px] mb-6 font-bold">
            Fresh & Healthy <span className="block"> Organic Food</span>
          </h2>
          <div className="border-l border-[#84D187] pl-4 mb-6">
            <p className="mb-1 text-[20px] font-medium">
              Sale up to{" "}
              <span className="font-bold bg-warning px-2 py-1 rounded-[4px]">
                35% OFF
              </span>
            </p>
            <p className="text-[14px] font-light">
              Free shipping on all your order.
            </p>
          </div>
          <button className="bg-white text-success font-semibold px-6 py-2 rounded-full w-fit flex gap-2">
            Shop now <ArrowRight />
          </button>
        </div>
        <Image
          src="/assets/banners/banner-1.jpg"
          alt="Banner"
          width={220}
          height={220}
          className="absolute left-0 top-0 rounded-xl h-full w-full object-cover hidden md:block z-[1]"
        />
      </div>
      <div className="flex flex-col gap-4 w-full md:w-1/3">
        <div className="bg-white rounded-xl flex flex-col items-center justify-center h-[290px] shrink-0 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pl-[40px] pt-[40px] flex flex-col rounded-xl z-[2]">
            <p className="text-[14px] font-medium tracking-[3%] uppercase">
              Summer Sale
            </p>
            <p className="text-[32px] font-bold">75% OFF</p>
            <p className="text-light font-light mt-2">Only Fruit & Vegetable</p>

            <button className="text-success font-semibold mt-4 w-fit flex gap-2">
              Shop Now <ArrowRight />
            </button>
          </div>
          <Image
            src="/assets/banners/banner-2.jpg"
            alt="Sale"
            width={120}
            height={80}
            className="rounded-lg w-full h-full object-cover z-[1] -scale-x-100"
          />
        </div>

        <div className="bg-white rounded-xl flex flex-col items-center justify-center h-[290px] shrink-0 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[#002603CC] flex flex-col items-center justify-center text-white rounded-xl z-[2]">
            <span className="uppercase font-medium">Best Deal</span>
            <span className="text-[32px] font-bold max-w-[300px] text-center">
              Special Products Deal of the Month
            </span>
            <button className="text-success font-semibold mt-4 w-fit flex gap-2">
              Shop Now <ArrowRight />
            </button>
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
