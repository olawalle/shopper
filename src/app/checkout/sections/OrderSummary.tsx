import Image from "next/image";
import React from "react";

function OrderSummary({
  cartItems,
  children,
}: {
  cartItems: any[];
  children: React.ReactNode;
}) {
  return (
    <div className="w-full md:w-1/3 border border-gray-200 rounded-[8px] p-4 h-fit">
      <h4 className="font-medium text-[20px]">Order Summary</h4>
      <div className="py-2 mt-[20px]">
        {cartItems.map((item, i) => (
          <div className="flex items-center justify-between" key={i}>
            <div className="flex items-center">
              <Image
                src={item.product}
                width={100}
                height={100}
                className="w-[60px]"
                alt="product item"
              />
              <p className="ml-2 text-gray-900 text-[14px]">
                {item.name} <span>x{item.quantity}</span>
              </p>
            </div>
            <p className="text-gray-900 font-medium">
              ${item.price.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between py-2 mt-[20px]">
        <p className="text-gray-700">Subtotal:</p>
        <p className="text-gray-900">$84.00</p>
      </div>
      <div className="flex items-center justify-between py-2 border-t border-b border-gray-200">
        <p className="text-gray-700">Shipping:</p>
        <p className="text-gray-900">Free</p>
      </div>
      <div className="flex items-center justify-between py-2 text-[16px]">
        <p className="text-gray-700">Total:</p>
        <p className="text-gray-900 font-semibold">$184.00</p>
      </div>

      {children}
    </div>
  );
}

export default OrderSummary;
