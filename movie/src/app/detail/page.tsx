"use client";
import React from "react";
import { Star } from "lucide-react";
import { MoreLikeThis } from "@/components/MoreLikeThis";
import { axiosInstance } from "@/lib/utils";
import { imageUrl } from "@/lib/utils";

type MovieDataTypes = {
  title: string;
  poster_path: string;
  vote_average: number;
};

function MovieDetails() {
  return (
    <div className="flex h-full w-full flex-col pt-[111px] px-[180px] ">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p>Wicked</p>
          <p>2024.11.26·PG·2h 40m</p>
        </div>
        <div className="flex flex-col">
          <p>Rating</p>
          <div className="flex">
            <Star />{" "}
            <div>
              {" "}
              <div className="flex flex-col">
                <p>6.9</p>
                <p>/10</p>{" "}
              </div>{" "}
              <p>37k</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex ">
        <div className="h-[428px] w-[290px]"></div>
        <div className="h-[428px] w-[760px]"> </div>
      </div>

      <div className="flex flex-wrap gap-[16px] p-[8px]">
        <div className="flex justify-between items-center rounded-full text-[12px] font-[600] border-[#E4E4E7] border-[1px] px-[8px] h-[20px] gap-[4px]  "></div>
      </div>

      <div>
        <div className="flex flex-col">
          <div className="flex">
            <p>Director</p> <p> hah</p>
          </div>
          <div className="h-[1px] w-full border-[#E4E4E7]"></div>{" "}
        </div>
      </div>

      <MoreLikeThis />
    </div>
  );
}

export default MovieDetails;
