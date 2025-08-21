import clsx from "clsx";
import React, { JSX } from "react";

interface CustomInputProps {
  prefixElement?: JSX.Element;
  suffixElement?: JSX.Element;
  className?: string;
  inputClass?: string;
  label?: string;
  error?: string;
}

const AppInput: React.FC<
  CustomInputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  prefixElement,
  suffixElement,
  className,
  inputClass,
  label,
  error,
  ...props
}) => {
  return (
    <div className="flex flex-col w-full h-fit">
      {label && <p className="text-gray-900 mb-2">{label}</p>}
      <div
        className={`flex items-center h-[45px] relative overflow-hidden w-full ${className}`}
      >
        {prefixElement && (
          <div className="absolute top-0 left-0 z-10 h-full">
            {prefixElement}
          </div>
        )}
        <input
          className={clsx(
            `w-full shrink-0 px-4 py-2 focus:outline-none border border-gray-200 rounded-[8px] absolute left-0 right-0 h-[45px] ${inputClass}`
          )}
          {...props}
        />
        {suffixElement && (
          <div className="absolute top-0 right-0 z-10 h-full">
            {suffixElement}
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default AppInput;
