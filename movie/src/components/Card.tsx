import React from "react";
import { Star } from "lucide-react";
interface CardProps {
  rate: number;
  title: string;
  src: string;
}

export const Card: React.FC<CardProps> = ({ rate, title, src }) => {
  return (
    <div className="w-[230px] h-[439px] rounded-[8px] bg-[#eaeaeb]">
      <img
        src={src}
        className="w-full h-[340px] object-cover rounded-t-[8px]"
        alt={title}
      />
      <div className="p-3">
        <div className="flex items-center gap-1 ">
          <Star
            className="stroke-[1px] text-[#fde047] fill-[#fde047]"
            size={16}
          />
          <div className="flex items-center">
            <p className="text-[14px] font-[500]">{rate}</p>
            <p className="text-[12px] font-[400] text-[#71717A] ">/10</p>
          </div>
        </div>
        <p className="text-[18px] font-[400]">{title}</p>
      </div>
    </div>
  );
};
