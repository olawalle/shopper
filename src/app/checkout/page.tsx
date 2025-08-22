"use client";
import { ChevronRight, Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import BillingForm from "./sections/BillingForm";
import OrderSummary from "./sections/OrderSummary";
import { useForm } from "react-hook-form";
import BreadCrumbs from "@/components/BreadCrumbs";
import AppButton from "@/components/AppButton";
import { iCart } from "@/types/product.types";

export interface BillingFormValues {
  firstName: string;
  lastName: string;
  company?: string;
  street: string;
  country: string;
  state: string;
  zip: string;
  email: string;
  phone: string;
  shipToDifferent: boolean;
}

function CheckoutPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<BillingFormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      street: "",
      country: "",
      state: "",
      zip: "",
      email: "",
      phone: "",
      shipToDifferent: false,
    },
  });
  const cartItems: iCart[] = [
    {
      product: "/assets/products/p-2.jpg",
      price: 14.0,
      quantity: 5,
      name: "Green Capsicum",
    },
    {
      product: "/assets/products/p-3.jpg",
      price: 10.0,
      quantity: 2,
      name: "Red Bell Pepper",
    },
  ];

  const handleFormSubmit = (data: BillingFormValues) => {
    alert("Order placed!" + JSON.stringify(data));
  };

  return (
    <div className="bg-[#ffffff]">
      <div className="flex flex-row items-center justify-between text-white relative h-[120px] overflow-hidden">
        <Image
          src="/assets/banners/banner-7.jpg"
          alt="Banner"
          width={220}
          height={120}
          className="w-full object-cover mt-4 md:mt-0 absolute right-0 z-[1] rotate-180"
        />
        <div className="absolute left-0 w-full z-[2]">
          <BreadCrumbs
            crumbs={[
              { title: "Shopping cart", url: "/cart" },
              { title: "Checkout", url: "/checkout" },
            ]}
          />
        </div>
      </div>
      <form
        className="container mx-auto mt-[60px]"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className="mt-6 flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/3">
            <h4 className="text-[20px] font-medium">Billing Information</h4>
            <BillingForm
              onSubmit={handleFormSubmit}
              register={register}
              errors={errors}
              setValue={setValue}
            />
          </div>
          <OrderSummary cartItems={cartItems}>
            <AppButton type="submit" className="w-full mt-6">
              Proceed to checkout
            </AppButton>
          </OrderSummary>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
