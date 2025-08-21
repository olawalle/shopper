import clsx from "clsx";
import Image from "next/image";
import React from "react";

function Product({
  product,
  small = true,
  bordered = false,
}: {
  product: any;
  small?: boolean;
  bordered?: boolean;
}) {
  return (
    <div
      className={clsx(
        "h-fit w-full transition-all duration-500 ease-in-out cursor-pointer",
        {
          "hover:border-[#2C742F] group hover:shadow-md hover:shadow-[#20B52652] border border-gray-200 rounded-[6px] overflow-hidden":
            bordered,
        }
      )}
    >
      <div
        className={clsx(
          "bg-white flex flex-col items-center gap-2 transition overflow-hidden group",
          {
            "h-[280px]": small,
            "h-[400px]": !small,
          }
        )}
      >
        <div
          className={clsx(
            "w-full flex items-center justify-center overflow-hidden",
            {
              "h-[250px]": small,
              "h-[300px]": !small,
            }
          )}
        >
          <Image
            src={product.img}
            alt={product.name}
            width={80}
            height={80}
            className="w-[60%] md:w-[90%] object-contain"
          />
        </div>
        <div className="flex justify-between w-full p-4">
          <div className="flex flex-col">
            <span className="text-[14px] font-medium text-gray-700">
              {product.name}
            </span>
            <p className="text-[14px] text-[#1A1A1A] font-medium">
              ${product.price}{" "}
              <span className="line-through text-light font-light">
                ${product.oldPrice}
              </span>
            </p>
            <div className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <img
                  src="/assets/star.svg"
                  alt=""
                  key={index}
                  className="w-3"
                />
              ))}
            </div>
          </div>

          <button className="bg-[#F2F2F2] transition-all duration-500 ease-in-out group-hover:bg-success w-[40px] h-[40px] rounded-full flex items-center justify-center">
            <img
              src="/assets/bag.svg"
              alt=""
              className="w-[20px] block group-hover:hidden"
            />
            <img
              src="/assets/bag-white.svg"
              alt=""
              className="w-[20px] hidden group-hover:block"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
