import React from "react";
import { Film } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";

export const Footer = () => {
  return (
    <div className="flex w-full h-[280px] bg-[#4338CA] justify-around py-[40px] ">
      <div className="flex flex-col gap-[12px] ">
        <span className="flex items-center gap-[8px]">
          <Film className=" text-white size-[20px] stroke-[1.2px]" />
          <p className="font-[700] text-[16px] text-white italic">Movie Z</p>
        </span>

        <div>
          {" "}
          <p className="text-white text-[14px] font-[400]">
            © 2024 Movie Z. All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="flex gap-[96px]">
        <div className="flex flex-col gap-[12px]">
          <p className="text-white text-[14px] font-[400]">
            Contact Imformation
          </p>
          <div className="flex gap-[12px] ">
            <Mail className="text-white flex mt-[12px] size-[16px] stroke-[1.5px]" />
            <div className="flex flex-col ">
              <p className="text-white text-[14px] font-[400]">Email:</p>
              <p className="text-white text-[14px] font-[400]">
                support@movieZ.com
              </p>
            </div>
          </div>
          <div className="flex pt-[12px] gap-[12px] ">
            <Phone className="text-white mt-[12px] size-[16px] stroke-[1.5px]" />
            <div>
              <p className="text-white text-[14px] font-[400]">Phone:</p>
              <p className="text-white text-[14px] font-[400]">
                +976(11)123-4567
              </p>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <p className="text-white text-[14px] font-[400]">Follow us</p>
        </div>
      </div>
    </div>
  );
};
