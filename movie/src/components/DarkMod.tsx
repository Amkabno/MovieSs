import React from "react";
import { Moon } from "lucide-react";

export const DarkMod = () => {
  return (
    <button className="border-[1.5px] px-[10px]  h-[42px] rounded-[10px] flex items-center justify-center">
      <Moon className="stroke-[1.5px] size-[20px]" />
    </button>
  );
};
