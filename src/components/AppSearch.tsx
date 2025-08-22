import React from "react";
import AppInput from "./AppInput";
import { Search } from "lucide-react";

const AppSearch = () => {
  return (
    <AppInput
      inputClass="!pl-[40px]"
      prefixElement={
        <div className="flex items-center justify-center px-2 h-full">
          <Search color="#666666" />
        </div>
      }
      suffixElement={
        <button className="bg-success text-white h-full px-6 rounded-r-[8px]">
          Search
        </button>
      }
      placeholder="Search"
    />
  );
};

export default AppSearch;
