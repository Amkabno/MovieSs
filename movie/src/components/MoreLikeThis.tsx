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

export const MoreLikeThis = () => {
  const [moreLikeThis, setMoreLikeThis] = useState<MovieDataTypes[]>([]);
  const fetchMoreLikeThis = async () => {
    const { data } = await axiosInstance.get(
      "/movie/278/similar?language=en-US&page=1"
    );
    setMoreLikeThis(data.results);
  };
  useEffect(() => {
    fetchMoreLikeThis();
  }, []);
  console.log(moreLikeThis);
  const cardsData = moreLikeThis?.slice(0, 5);

  return (
    <div className="pt-[52px]  flex flex-col gap-[8px] ">
      <div className="flex justify-between pb-[32px]">
        <p className="text-[24px] font-[600]">More like this</p>
        <button className="text-[14px] font-[500] flex gap-[8px] items-center">
          See more <ArrowRight className="stroke-[1.2px]" size={20} />
        </button>
      </div>

      <div className="grid grid-cols-5 gap-[16px]">
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
