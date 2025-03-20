import React from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "./Card";

export const Upcoming = () => {
  return (
    <div className="pt-[52px] px-[80px]">
      <div className="flex justify-between pb-[32px]">
        <p className="text-[24px] font-[600] ">Upcoming</p>
        <button className="text-[14px] font-[500] flex gap-[8px]">
          See more <ArrowRight className="stroke-[1.2px] size-[20px]" />
        </button>
      </div>
      <Card />
    </div>
  );
};
