import React from "react";
import { Search } from "lucide-react";

export const Input = () => {
  return (
    <span className="flex items-center ">
      <input
        className="border-[1.5px] border-s w-[379px] h-object-fit rounded-[8px] relative px-[42px] py-[8px] outline-none"
        placeholder="Search..."
      />
      <Search className=" text-[#80828c] stroke-[2px] size-[20px] absolute ml-[12px]" />
    </span>
  );
};
