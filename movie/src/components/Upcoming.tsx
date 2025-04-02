"use client";
import { useEffect, useState } from "react";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "./Card";
import { axiosInstance } from "@/lib/utils";
import { imageUrl } from "@/lib/utils";

type MovieDataTypes = {
  title: string;
  poster_path: string;
  vote_average: number;
};

export const Upcoming = () => {
  const [upComing, setUpComing] = useState<MovieDataTypes[]>([]);
  const fetchUpComing = async () => {
    const { data } = await axiosInstance.get(
      "/movie/upcoming?language=en-US&page=1"
    );
    setUpComing(data.results);
  };
  useEffect(() => {
    fetchUpComing();
  }, []);
  console.log(upComing);
  const cardsData = upComing?.slice(0, 12);

  return (
    <div className="pt-[52px] px-[80px] flex flex-col gap-[8px] ">
      <div className="flex justify-between pb-[32px]">
        <p className="text-[24px] font-[600]">Upcoming</p>
        <button className="text-[14px] font-[500] flex gap-[8px] items-center">
          See more <ArrowRight className="stroke-[1.2px]" size={20} />
        </button>
      </div>

      <div className="grid grid-cols-6 gap-[16px]">
        {cardsData?.map((card, index) => (
          <Card
            key={index}
            rate={card.vote_average}
            title={card.title}
            src={imageUrl(card.poster_path)}
          />
        ))}
      </div>
    </div>
  );
};
