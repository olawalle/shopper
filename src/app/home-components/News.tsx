import Image from "next/image";
import React from "react";

function News() {
  return (
    <section className="container mx-auto mt-12">
      <h3 className="text-[32px] text-center font-semibold mb-4">
        Latest News
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((news, i) => (
          <div
            key={i}
            className="bg-white rounded-lg flex flex-col overflow-hidden border border-gray-200 hover:shadow-md hover:shadow-[#ececec97]"
          >
            <div className="h-[260px] overflow-hidden bg-[url('/assets/banners/banner-1.jpg')] bg-cover bg-no-repeat p-6 flex items-end">
              <div className="h-[58px] w-[58px] flex flex-col items-center justify-center bg-white rounded-[6px]">
                <p className="font-medium text-[20px]">18</p>
                <p className="text-gray-500 text-[12px]">Aug</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex gap-3">
                <div className="flex items-center gap-1 text-gray-700">
                  <img src="/assets/tag.svg" alt="User Icon" />
                  <p>Food</p>
                </div>
                <div className="flex items-center gap-1 text-gray-700">
                  <img src="/assets/user.svg" alt="User Icon" />
                  <p>John Doe</p>
                </div>
                <div className="flex items-center gap-1 text-gray-700">
                  <img src="/assets/comment.svg" alt="User Icon" />
                  <p>5 Comments</p>
                </div>
              </div>
              <p className="text-sm text-[#2C742F] mb-3">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Nunc
                fermentum.
              </p>
              <a href="#" className="text-success font-medium">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default News;
