import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function AppSelect({
  options,
  onChange,
  placeholder,
  className,
  error,
  value,
  label,
}: {
  options?: { label: string; value: string }[];
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  error?: string;
  value?: string;
  label?: string;
}) {
  return (
    <div className="flex flex-col w-full">
      {label && <p className="text-gray-900 mb-2">{label}</p>}
      <Select onValueChange={onChange} value={value} defaultValue={value}>
        <div className="w-full h-[45px]">
          <SelectTrigger
            className={`w-full border-gray-200 min-w-0 rounded-[6px] !h-full border ${className}`}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </div>
        <SelectContent>
          <SelectGroup>
            {options?.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
