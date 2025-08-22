import { Eye } from "lucide-react";
import Image from "next/image";
import React from "react";
import AppButton from "./AppButton";
import { IProduct } from "@/types/product.types";

function SpecialProduct({ product }: { product: IProduct }) {
  return (
    <div className="bg-white flex flex-col items-center gap-2 transition h-[561px]">
      <div className="h-[294px] w-full flex items-center justify-center overflow-hidden">
        <Image
          src={product.img}
          alt={product.name}
          width={80}
          height={80}
          className="w-[70%] object-contain"
        />
      </div>
      <div className="flex items-center justify-between gap-2 w-full px-4">
        <button className="w-[46px] h-[46px] bg-[#F2F2F2] rounded-full flex items-center justify-center">
          <img src="/assets/fav.svg" alt="" className="w-[18px]" />
        </button>

        <AppButton className="w-full">Add to Cart</AppButton>

        <button className="w-[46px] h-[46px] bg-[#F2F2F2] rounded-full flex items-center justify-center">
          <Eye size={18} />
        </button>
      </div>
      <div className="flex flex-col text-center">
        <p className="text-[18px] font-medium text-[#2C742F]">{product.name}</p>
        <p className="text-[24px] text-[#1A1A1A] font-medium my-2">
          ${product.price}{" "}
          <span className="line-through text-light font-light">
            ${product.oldPrice}
          </span>
        </p>
        <div className="flex items-center justify-center">
          {Array.from({ length: 5 }, (_, index) => (
            <img src="/assets/star.svg" alt="" key={index} className="w-3" />
          ))}

          <span className="text-gray-500">(524 Feedback)</span>
        </div>

        <p className="mt-3 text-gray-400">Hurry up! Offer ends In:</p>

        <div className="rounded-xl px-6 pt-2 pb-4 text-[#1A1A1A] flex flex-col items-center">
          <div className="flex gap-2 justify-center">
            <div className="W-[100px] flex flex-col items-center">
              <p className="font-medium text-[18px]">00</p>
              <p className="text-[#999999] text-[10px]">DAYS</p>
            </div>
            <span className="text-[30px] text-[#FFFFFF99] -mt-[6px] mx-2">
              :
            </span>
            <div className="W-[100px] flex flex-col items-center">
              <p className="font-medium text-[18px]">02</p>
              <p className="text-[#999999] text-[10px]">HOURS</p>
            </div>
            <span className="text-[30px] text-[#FFFFFF99] -mt-[6px] mx-2">
              :
            </span>
            <div className="W-[100px] flex flex-col items-center">
              <p className="font-medium text-[18px]">18</p>
              <p className="text-[#999999] text-[10px]">MIN</p>
            </div>
            <span className="text-[30px] text-[#FFFFFF99] -mt-[6px] mx-2">
              :
            </span>
            <div className="W-[100px] flex flex-col items-center">
              <p className="font-medium text-[18px]">30</p>
              <p className="text-[#999999] text-[10px]">SEC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialProduct;
