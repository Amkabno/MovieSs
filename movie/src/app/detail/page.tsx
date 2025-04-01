"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { MoreLikeThis } from "@/components/MoreLikeThis";
import { axiosInstance } from "@/lib/utils";
import { imageUrl } from "@/lib/utils";

type MovieDataTypes = {
  id: number;
  title: string;
  backdrop_path: string;
  vote_average: number;
  runtime: number;
  released_date: string;
  vote_count: number;
  genres: {id: number; name: string} [];
  overview: string;
};

function MovieDetails() {
  const [genreId, setGenreId] = useState<MovieDataTypes[]>([]);
  const fetchGenreId = async () => {
    const { data } = await axiosInstance.get("/movie/278?language=en-US");
    setGenreId(data.results);
  };
  useEffect(() => {
    fetchGenreId();
  }, []);

  const [credit, setCredit] = useState<MovieDataTypes[]>([]);
  const fetchCredit = async() => {
    const {data} = await axiosInstance.get("");
    setCredit(data.results);
  }
  return (
    <div className="flex h-full w-full flex-col pt-[111px] px-[180px] ">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p>{title}</p>
          <p>{released_date} </p> <p>{runtime}</p>
        </div>
        <div className="flex flex-col">
          <p>Rating</p>
          <div className="flex">
            <Star />{" "}
            <div>
              {" "}
              <div className="flex flex-col">
                <p>{vote_average}</p>
                <p>/10</p>{" "}
              </div>{" "}
              <p>{vote_count}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div
          className="h-[428px] w-[290px] "
          src={imageUrl(movieDetails.backdrop_path)}
        ></div>
        <div
          className="h-[428px] w-[760px]"
          src={imageUrl(movieDetails.backdrop_path)}
        >
          {" "}
        </div>
      </div>

      <div className="flex flex-wrap gap-[16px] p-[8px]">
        <div className="flex justify-between items-center rounded-full text-[12px] font-[600] border-[#E4E4E7] border-[1px] px-[8px] h-[20px] gap-[4px]  ">
          {" "}
          {genres}
        </div>
      </div>
      <p>{overview}</p>

      <div>
        <div className="flex flex-col">
          <div className="flex">
            <p>Director</p> <p> {DirectorName}</p>
          </div>
          <div className="h-[1px] w-full border-[#E4E4E7]"></div>{" "}
        </div>
        <div className="flex">
            <p>Writers</p> <p> {Name}</p>
          </div>
          <div className="h-[1px] w-full border-[#E4E4E7]"></div>{" "}
        </div>
        <div className="flex">
            <p>Stars</p> <p> {ActorsName}</p>
          </div>
          <div className="h-[1px] w-full border-[#E4E4E7]"></div>{" "}
        </div>
      </div>

      <MoreLikeThis />
    </div>
  );
}

export default MovieDetails;
