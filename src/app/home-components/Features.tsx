import Image from "next/image";
import React from "react";

function Features() {
  const featurelist = [
    {
      icon: (
        <Image
          src="/assets/delivery.svg"
          alt="Shipping"
          width={32}
          height={32}
        />
      ),
      title: "Free Shipping",
      description: "Free shipping on all your order",
    },
    {
      icon: (
        <Image src="/assets/support.svg" alt="Support" width={32} height={32} />
      ),
      title: "Customer Support 24/7",
      description: "Instant access to Support",
    },
    {
      icon: (
        <Image
          src="/assets/bag-check.svg"
          alt="Payment"
          width={32}
          height={32}
        />
      ),
      title: "100% Secure Payment",
      description: "We ensure your money is save",
    },
    {
      icon: (
        <Image src="/assets/box.svg" alt="Guarantee" width={32} height={32} />
      ),
      title: "Money Back Guarantee",
      description: "30 Days Money-Back Guarantee",
    },
  ];
  return (
    <section
      data-testid="features-section"
      className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8 px-4 bg-white light-shadow-2 rounded-[8px]"
    >
      {featurelist.map((feature, index) => (
        <div
          className="flex items-center gap-2 rounded-lg p-4 feature-item"
          key={index}
        >
          {feature.icon}
          <div>
            <p className="text-[16px] font-semibold text-[#1A1A1A]">
              {feature.title}
            </p>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Features;
