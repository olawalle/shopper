import clsx from "clsx";
import React, { JSX } from "react";

interface CustomInputProps {
  prefixElement?: JSX.Element;
  suffixElement?: JSX.Element;
  className?: string;
  inputClass?: string;
  label?: string;
  error?: string;
  textarea?: boolean;
}

type AppInputProps =
  | (CustomInputProps & {
      textarea?: false;
    } & React.InputHTMLAttributes<HTMLInputElement>)
  | (CustomInputProps & {
      textarea: true;
    } & React.TextareaHTMLAttributes<HTMLTextAreaElement>);

const AppInput: React.FC<AppInputProps> = ({
  prefixElement,
  suffixElement,
  className,
  inputClass,
  label,
  error,
  textarea,
  ...props
}) => {
  return (
    <div className="flex flex-col w-full h-fit">
      {label && <p className="text-gray-900 mb-2">{label}</p>}
      <div
        className={clsx(
          `flex items-center relative overflow-hidden w-full ${className}`,
          {
            "h-[45px]": !textarea,
            "h-[100px]": textarea,
          }
        )}
      >
        {prefixElement && (
          <div className="absolute top-0 left-0 z-10 h-full">
            {prefixElement}
          </div>
        )}
        {textarea ? (
          <textarea
            className={clsx(
              `w-full shrink-0 px-4 py-2 focus:outline-none border border-gray-200 rounded-[8px] absolute left-0 right-0 h-[100px] ${inputClass}`
            )}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            className={clsx(
              `w-full shrink-0 px-4 py-2 focus:outline-none border border-gray-200 rounded-[8px] absolute left-0 right-0 h-[45px] ${inputClass}`
            )}
            {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
          />
        )}
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
