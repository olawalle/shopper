import clsx from "clsx";
import React, { JSX } from "react";

interface CustomInputProps {
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  className?: string;
  inputClass?: string;
}

const AppInput: React.FC<
  CustomInputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ prefix, suffix, className, inputClass, ...props }) => {
  return (
    <div
      className={`flex items-center h-[45px] relative overflow-hidden ${className}`}
    >
      {prefix && (
        <div className="absolute top-0 left-0 z-10 h-full">{prefix}</div>
      )}
      <input
        className={clsx(
          `w-full shrink-0 px-4 py-2 focus:outline-none border border-gray-200 rounded-[8px] absolute left-0 right-0 h-[45px] ${inputClass}`
        )}
        {...props}
      />
      {suffix && (
        <div className="absolute top-0 right-0 z-10 h-full">{suffix}</div>
      )}
    </div>
  );
};

export default AppInput;
