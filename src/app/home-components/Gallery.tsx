import clsx from "clsx";
import { Instagram } from "lucide-react";
import Image from "next/image";
import React from "react";

function Gallery() {
  const brands = [
    "/assets/brand-1.svg",
    "/assets/brand-2.svg",
    "/assets/brand-3.svg",
    "/assets/brand-4.svg",
    "/assets/brand-5.svg",
    "/assets/brand-6.svg",
  ];
  return (
    <section className="container mx-auto mt-12">
      <div className="grid grid-cols-2 md:grid-cols-6 mb-12">
        {brands.map((brand, i) => (
          <div
            className={clsx(
              "w-full flex items-center justify-center h-[30px]",
              {
                "border-[#E5E5E5] border-l": i < brands.length && i !== 0,
              }
            )}
          >
            <Image
              width={100}
              height={100}
              src={brand}
              alt=""
              className="h-[30px]"
            />
          </div>
        ))}
      </div>
      <h3 className="text-[24px] md:text-[32px] text-center font-semibold mb-4">
        Follow us on Instagram
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 pb-2">
        {[
          "/assets/banners/banner-8.jpg",
          "/assets/banners/banner-8.jpg",
          "/assets/banners/banner-8.jpg",
          "/assets/banners/banner-8.jpg",
          "/assets/banners/banner-8.jpg",
          "/assets/banners/banner-8.jpg",
        ].map((img, i) => (
          <div className="h-[200px] overflow-hidden rounded-2xl group relative">
            <div className="absolute w-full h-full hidden items-center justify-center text-white z-[2] group-hover:flex">
              <Instagram />
            </div>
            <Image
              key={i}
              src={img}
              alt="Instagram"
              width={80}
              height={80}
              className="w-full absolute top-0 left-0 z-[1]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
