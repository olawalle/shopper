import React from "react";
import clsx from "clsx";

type AppButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "grey" | "white";
  children: React.ReactNode;
};

const AppButton: React.FC<AppButtonProps> = ({
  variant = "primary",
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "h-[45px] rounded-full px-6 font-medium transition flex items-center justify-center",
        {
          "bg-success text-white hover:bg-green-800": variant === "primary",
          "border border-gray-300 text-gray-900 bg-white hover:bg-gray-100":
            variant === "outline",
          "bg-[#F2F2F2] text-[#4D4D4D]": variant === "grey",
          "bg-white text-success": variant === "white",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default AppButton;
