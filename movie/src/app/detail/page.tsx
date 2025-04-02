"use client";
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { MoreLikeThis } from "@/components/MoreLikeThis";
import { axiosInstance } from "@/lib/utils";

type MovieDataTypes = {
  id: number;
  title: string;
  backdrop_path: string;
  vote_average: number;
  runtime: number;
  released_date: string;
  vote_count: number;
  genres: { id: number; name: string }[];
  overview: string;
};

type CreditsData = {
  cast: { name: string; character: string }[];
  crew: { name: string; job: string }[];
};

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState<MovieDataTypes | null>(null);
  const [credits, setCredits] = useState<CreditsData | null>(null);

  const fetchMovieDetails = async () => {
    try {
      const { data } = await axiosInstance.get("/movie/278?language=en-US");
      setMovieDetails(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  const fetchCredits = async () => {
    try {
      const { data } = await axiosInstance.get(
        "/movie/278/credits?language=en-US"
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
    <div className="flex h-full w-full flex-col pt-[111px] px-[180px]">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p>{movieDetails.title}</p>
          <p>{movieDetails.released_date}</p>
          <p>{movieDetails.runtime} min</p>
        </div>
        <div className="flex flex-col">
          <p>Rating</p>
          <div className="flex">
            <Star />
            <div>
              <div className="flex flex-col">
                <p>{movieDetails.vote_average}</p>
                <p>/10</p>
              </div>
              <p>{movieDetails.vote_count}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[36px]">
        {movieDetails.backdrop_path && (
          <img
            className="h-[428px] w-[290px] object-fit flex justify-center items-center rounded-[4px] "
            src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
            alt={movieDetails.title}
          />
        )}
        {movieDetails.backdrop_path && (
          <img
            className="h-[428px] w-full flex justify-center items-center object-fit rounded-[4px]"
            src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
            alt={movieDetails.title}
          />
        )}
      </div>

      <div className="flex flex-col gap-[20px] py-[32px]">
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
      <div>
        <MoreLikeThis />
      </div>
    </div>
  );
}

export default MovieDetails;
