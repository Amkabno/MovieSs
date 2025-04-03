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
  id: string;
};

export const Popular = () => {
  const [popular, setPopular] = useState<MovieDataTypes[]>([]);
  const fetchPopular = async () => {
    const { data } = await axiosInstance.get(
      "/movie/popular?language=en-US&page=1"
    );
    setPopular(data.results);
  };
  useEffect(() => {
    fetchPopular();
  }, []);
  console.log(popular);
  const cardsData = popular?.slice(0, 10);

  return (
    <div className=" px-[80px] flex flex-col gap-[8px] ">
      <div className="flex justify-between pb-[32px]">
        <p className="text-[24px] font-[600]">Popular</p>
        <button className="text-[14px] font-[500] flex gap-[8px] items-center">
          See more <ArrowRight className="stroke-[1.2px]" size={20} />
        </button>
      </div>

      <div className="grid grid-cols-5 gap-[16px]">
        {cardsData?.map((card, index) => (
          <Card
            id={card.id}
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
