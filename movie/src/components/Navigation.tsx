"use client";
import React from "react";
import { Film } from "lucide-react";
import { Genre } from "./Genre";
import { Input } from "./Input";
import { DarkMod } from "./DarkMod";

export const Navigation = () => {
  return (
    <nav className="flex w-full h-[60px] fixed justify-between px-[30px] z-[2] bg-white">
      <span className="flex items-center gap-[8px]">
        <Film className=" text-[#4338CA] size-[26px] stroke-[1.2px]" />
        <p className="font-[700] text-[20px] text-[#4338CA] italic">Movie Z</p>
      </span>
      <span className="flex items-center gap-[12px]">
        <Genre />
        <Input />
      </span>
      <span className="flex items-center">
        <DarkMod />
      </span>
    </nav>
  );
};
