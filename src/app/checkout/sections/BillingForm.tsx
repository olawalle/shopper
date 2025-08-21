import React from "react";
import {
  FieldErrors,
  useForm,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import AppInput from "@/components/AppInput";
import { AppSelect } from "@/components/AppSelect";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { BillingFormValues } from "../page";

const BillingForm: React.FC<{
  onSubmit: any;
  register: UseFormRegister<BillingFormValues>;
  errors: FieldErrors<BillingFormValues>;
  setValue: UseFormSetValue<BillingFormValues>;
}> = ({ onSubmit, register, errors, setValue }) => {
  return (
    <div className="mt-6 flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AppInput
          label="First name"
          placeholder="Your first name"
          className="w-full"
          {...register("firstName", { required: "First name is required" })}
          error={errors.firstName?.message}
        />
        <AppInput
          label="Last name"
          placeholder="Your last name"
          className="w-full"
          {...register("lastName", { required: "Last name is required" })}
          error={errors.lastName?.message}
        />
        <AppInput
          label="Company Name (optional)"
          placeholder="Company name"
          className="w-full"
          {...register("company")}
        />
      </div>
      <AppInput
        label="Street Address"
        placeholder="Your street address"
        className="w-full"
        {...register("street", { required: "Street address is required" })}
        error={errors.street?.message}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AppSelect
          label="Country / Region"
          placeholder="Country"
          className="w-full"
          onChange={(value) => setValue("country", value)}
          error={errors.country?.message}
        />
        <AppSelect
          label="State"
          placeholder="State"
          className="w-full"
          onChange={(value) => setValue("state", value)}
          error={errors.state?.message}
        />
        <AppInput
          label="Zip Code"
          placeholder="Zip Code"
          className="w-full"
          {...register("zip", { required: "Zip code is required" })}
          error={errors.zip?.message}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AppInput
          label="Email"
          className="w-full"
          placeholder="Email"
          {...register("email", { required: "Email is required" })}
          error={errors.email?.message}
        />
        <AppInput
          label="Phone"
          className="w-full"
          placeholder="Phone"
          {...register("phone", { required: "Phone is required" })}
          error={errors.phone?.message}
        />
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-3">
          <Checkbox id="terms" {...register("shipToDifferent")} />
          <Label htmlFor="terms" className="text-gray-700">
            Ship to a different address
          </Label>
        </div>
      </div>
      <button type="submit" />
    </div>
  );
};

export default BillingForm;
