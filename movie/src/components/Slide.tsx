"use client";
import React, { useEffect, useState } from "react";
import { Star, Play } from "lucide-react";
import { axiosInstance } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type MovieDataTypes = {
  title: string;
  backdrop_path: string;
  vote_average: number;
  overview: string;
};

export const Slide = () => {
  const [nowPlaying, setNowPlaying] = useState<MovieDataTypes[]>([]);

  const fetchNowPlaying = async () => {
    try {
      const { data } = await axiosInstance.get(
        "/movie/now_playing?language=en-US&page=1"
      );
      setNowPlaying(data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setNowPlaying([]);
    }
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);

  if (nowPlaying.length === 0) return null;

  const slideData = nowPlaying.slice(0, 3);

  return (
    <Carousel className="w-full overflow-hidden pl-[15px] relative ">
      <CarouselContent className="flex w-full">
        {slideData.map((movie, index) => (
          <CarouselItem key={index} className="w-full flex-shrink-0 relative">
            <img
              className="w-full h-[700px] object-cover flex justify-center items-center"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title}
            />
            <div className="absolute inset-0 flex flex-col justify-end left-40 bottom-40">
              <p className="text-white text-[14px]">Now Playing:</p>
              <p className="text-white text-[36px] font-[700]">{movie.title}</p>

              <div className="flex items-center gap-1">
                <Star
                  className="stroke-[1px] text-[#fde047] fill-[#fde047]"
                  size={16}
                />
                <div className="flex items-center">
                  <p className="text-white text-[18px] font-[600]">
                    {movie.vote_average}
                  </p>
                  <p className="text-[#cbcbcb] text-[16px] font-[400]">/10</p>
                </div>
              </div>

              <p className="text-white w-[302px] text-[13px] py-[16px]">
                {movie.overview}
              </p>
              <button className="flex justify-center items-center h-[40px] w-[145px] rounded-[6px] bg-white gap-[8px]">
                <Play className="stroke-[1.4px]" size={18} /> Watch Trailer
              </button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-10" />
      <CarouselNext className="absolute right-10" />
    </Carousel>
  );
};
