import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function PopularCategories() {
  const categories = [
    { name: "Fresh Fruit", img: "/assets/categories/ct-1.png" },
    { name: "Fresh Vegetables", img: "/assets/categories/ct-2.jpg" },
    { name: "Meat & Fish", img: "/assets/categories/ct-3.png" },
    { name: "Snacks", img: "/assets/categories/ct-4.png" },
    { name: "Beverages", img: "/assets/categories/ct-5.png" },
    { name: "Beauty & Health", img: "/assets/categories/ct-8.png" },
    { name: "Bread & Bakery", img: "/assets/categories/ct-2.jpg" },
    { name: "Baking", img: "/assets/categories/ct-6.png" },
    { name: "Cooking Needs", img: "/assets/categories/ct-3.png" },
    { name: "Diabetic Food", img: "/assets/categories/ct-4.png" },
    { name: "Dish Detergents", img: "/assets/categories/ct-5.png" },
    { name: "Oil", img: "/assets/categories/ct-1.png" },
  ];

  return (
    <section className="container mx-auto mt-12">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[32px] text-[#1A1A1A] font-semibold">
          Popular Categories
        </h3>
        <Link href="/listing" className="text-success font-medium flex">
          View all <ArrowRight className="ml-2" />
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="bg-white rounded-[5px] flex flex-col items-center p-4 gap-2 border border-gray-200 transition hover:border-[#2C742F] group hover:shadow-md hover:shadow-[#20B52652]"
          >
            <div className="h-[150px] flex items-center justify-center overflow-hidden">
              <Image
                src={cat.img.replace("/public", "")}
                alt={cat.name}
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            <span className="text-[18px] group-hover:text-[#2C742F] font-medium text-gray-700">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularCategories;
