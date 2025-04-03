"use client";
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { MoreLikeThis } from "@/components/MoreLikeThis";
import { axiosInstance } from "@/lib/utils";
import { Play } from "lucide-react";
import { useParams } from "next/navigation";

type MovieDataTypes = {
  origin_country: string;
  title: string;
  backdrop_path: string;
  vote_average: number;
  runtime: number;
  release_date: number;
  vote_count: number;
  genres: { id: number; name: string }[];
  overview: string;
};

type CreditsData = {
  cast: { name: string; character: string }[];
  crew: { name: string; job: string }[];
};

const formatRuntime = (runtime: number) => {
  const hours = Math.floor(runtime / 60);
  const mins = runtime % 60;
  return `${hours}h ${mins}min`;
};
const RoundedVote = (vote_average: number) => {
  const roundedValue = Math.round(vote_average * 10) / 10;
  return <p>{roundedValue}</p>;
};
const RoundedVoteCount = (vote_count: number) => {
  const roundedValueCount = Math.round(vote_count / 1000);
  return <p>{roundedValueCount}k</p>;
};

function MovieDetails() {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState<MovieDataTypes | null>(null);
  const [credits, setCredits] = useState<CreditsData | null>(null);

  const fetchMovieDetails = async () => {
    try {
      const { data } = await axiosInstance.get(
        `/movie/${params.id}?language=en-US`
      );
      setMovieDetails(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const fetchCredits = async () => {
    try {
      const { data } = await axiosInstance.get(
        `/movie/${params.id}/credits?language=en-US`
      );
      setCredits(data);
    } catch (error) {
      console.error("Error fetching credits:", error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
    fetchCredits();
  }, []);

  if (!movieDetails || !credits) {
    return <div>Loading...</div>;
  }
  const director =
    credits.crew.find((person) => person.job === "Director")?.name || "Unknown";
  const writers =
    credits.crew
      .filter((person) => person.job === "Writer")
      .map((p) => p.name)
      .join(", ") || "Unknown";
  const stars =
    credits.cast
      .slice(0, 3)
      .map((actor) => actor.name)
      .join(", ") || "Unknown";

  return (
    <div className="flex h-full w-full flex-col ">
      <div className="w-full h-[700px] pt-[100px] z-[-1] relative flex justify-center items-center ">
        {movieDetails.backdrop_path && (
          <img
            className="h-[800px] w-full flex justify-center items-center object-fit inset-0 bg-gradient-to-t to-transparent opacity-80 "
            src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
            alt={movieDetails.title}
            style={{
              maskImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)",
            }}
          />
        )}
        <div className="absolute  flex-col  w-full bottom-[-50px]">
          <div className="flex-col px-[180px] w-full">
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-[36px] font-[700]">{movieDetails.title}</p>
                <div className="flex gap-[5px] text-[18px] font-[400]">
                  <p>{movieDetails.release_date} </p>
                  <p>·</p>
                  <p>{movieDetails.origin_country}</p>
                  <p>·</p>
                  <p>{formatRuntime(movieDetails.runtime)}</p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-[12px] font-[500]">Rating</p>
                <div className="flex justify-center items-center gap-[4px]">
                  <Star className="stroke-[#FDE047] fill-[#FDE047]" />
                  <div>
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <p className="text-[18px] font-[600]">
                          {RoundedVote(movieDetails.vote_average)}
                        </p>
                        <p className="text-[16px] font-[400] text-black">/10</p>
                      </div>
                    </div>
                    <p>{RoundedVoteCount(movieDetails.vote_count)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-[36px] pt-[24px] w-full items-center justify-center">
            <div className="h-[428px] w-[760px] relative">
              {movieDetails.backdrop_path && (
                <img
                  className="h-fill w-fill flex justify-center items-center object-fit brightness-[30%] rounded-[4px]"
                  src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
                  alt={movieDetails.title}
                />
              )}
              <div className="flex absolute bottom-[24px] left-[24px] items-center gap-[12px]">
                <button className="w-[40px] h-[40px] flex justify-center items-center gap-[8px] bg-white rounded-full">
                  <Play className="size-[16px] stroke-[2px]" />
                </button>
                <p className="text-white">Play trailer</p>
                <div className="text-white">2:35</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[20px] py-[32px] px-[180px] pt-[100px]">
        <div className="flex flex-wrap gap-[16px] ">
          <div className="flex justify-between items-center gap-[12px]">
            {movieDetails.genres.map((genre) => (
              <div
                key={genre.id}
                className="flex justify-between items-center rounded-full text-[12px] font-[600] border-[#E4E4E7] border-[1px] px-[8px] h-[20px] gap-[4px]"
              >
                {genre.name}
              </div>
            ))}
          </div>
        </div>

        <p className="text-[16px] font-[400]">{movieDetails.overview}</p>
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[5px]">
            <div className="flex gap-[53px]">
              <p className="text-[16px] font-[700] w-[70px]">Director</p>
              <p className="text-[16px] font-[400]">{director}</p>
            </div>
            <div className="h-[1px] w-full bg-[#E4E4E7]"></div>
          </div>
          <div className="flex flex-col gap-[5px]">
            <div className="flex gap-[53px]">
              <p className="text-[16px] font-[700]  w-[70px]">Writers</p>
              <p className="text-[16px] font-[400]">{writers}</p>
            </div>

            <div className="h-[1px] w-full bg-[#E4E4E7]"></div>
          </div>
          <div className="flex flex-col gap-[5px]">
            <div className="flex gap-[53px]">
              <p className="text-[16px] font-[700]  w-[70px]">Stars</p>
              <p className="text-[16px] font-[400]">{stars}</p>
            </div>

            <div className="h-[1px] w-full bg-[#E4E4E7]"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col px-[180px]">
        <MoreLikeThis />
      </div>
    </div>
  );
}

export default MovieDetails;
