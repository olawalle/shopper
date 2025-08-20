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
}: {
  options?: { label: string; value: string }[];
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  error?: string;
  value?: string;
}) {
  return (
    <Select onValueChange={onChange} value={value} defaultValue={value}>
      <div className="w-full h-full">
        <SelectTrigger
          className={`w-full border-gray-200 min-w-0 rounded-md border ${className}`}
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
  );
}
