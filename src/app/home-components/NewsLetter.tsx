import AppInput from "@/components/AppInput";
import React from "react";
import Facebook from "../../../public/assets/facebook.svg";
import X from "../../../public/assets/x.svg";
import Pinterest from "../../../public/assets/pintrest.svg";
import IG from "../../../public/assets/ig.svg";

function NewsLetter() {
  const socials = [
    <Facebook className="" />,
    <X className="" />,
    <Pinterest className="" />,
    <IG className="" />,
  ];
  return (
    <section className="mt-12 py-12 bg-[#F7F7F7]">
      <div className="container mx-auto">
        <div className="rounded-xl flex flex-col md:flex-row items-center justify-between py-8 gap-4">
          <div className="md:w-[400px]">
            <h4 className="text-[24px] font-semibold mb-2">
              Subscribe our Newsletter
            </h4>
            <p className="text-gray-400">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-end gap-2 w-full md:w-auto shrink-0 flex-1">
            <AppInput
              className="rounded-full bg-white w-full md:w-[380px] overflow-hidden"
              inputClass="rounded-full"
              placeholder="Your email address"
              suffixElement={
                <button className="bg-success text-white px-6 h-full rounded-full font-medium">
                  Subscribe
                </button>
              }
            />

            <div className="flex gap-1 md:ml-[30px] w-full">
              {socials.map((Social, index) => (
                <button
                  key={index}
                  className="w-[40px] h-[40px] hover:bg-success socia-button flex items-center justify-center rounded-full group"
                >
                  {Social}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
