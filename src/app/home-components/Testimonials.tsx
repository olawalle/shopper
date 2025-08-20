import Image from "next/image";
import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Robert Fox",
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      img: "/public/assets/brand-1.svg",
    },
    {
      name: "Darlene Russell",
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      img: "/public/assets/brand-2.svg",
    },
    {
      name: "Eleanor Pena",
      text: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
      img: "/public/assets/brand-3.svg",
    },
  ];

  return (
    <section className="mt-12 px-4 bg-[#F2F2F2]">
      <div className="container mx-auto py-12">
        <h3 className="text-xl font-semibold mb-4">Client Testimonials</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6 flex flex-col gap-2 light-shadow"
            >
              <Image
                src="/assets/quotes.svg"
                width={48}
                height={48}
                alt="quotes"
                className="w-[30px]"
              />
              <div className="text-left">
                <p className="text-gray-600">{t.text}</p>

                <div className="flex justify-between items-center mt-6">
                  <div className="flex">
                    <Image
                      src="https://randomuser.me/api/portraits/men/1.jpg"
                      alt={t.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div className="ml-2">
                      <p className="font-medium text-[16px]">{t.name}</p>
                      <p className=" text-gray-400">Customer</p>
                    </div>
                  </div>

                  <span className="text-warning">★★★★★</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
