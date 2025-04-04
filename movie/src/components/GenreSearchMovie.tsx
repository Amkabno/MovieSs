"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card } from "@/components/Card";
import { axiosInstance } from "@/lib/utils";
import { imageUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type MovieDataTypes = {
  title: string;
  poster_path: string;
  vote_average: number;
  id: string;
};

export const GenreSearchMovie = () => {
  const { id: genreId } = useParams();
  const [movies, setMovies] = useState<MovieDataTypes[]>([]);
  const [totalMovies, setTotalMovies] = useState(0);
  const [page, setPage] = useState(1);
  const [genreName, setGenreName] = useState<string>("");

  useEffect(() => {
    if (!genreId) return;

    const fetchMovies = async () => {
      try {
        const { data } = await axiosInstance.get(
          `/discover/movie?language=en&with_genres=${genreId}&page=${page}`
        );
        setMovies(data.results);
        setTotalMovies(data.total_results);
      } catch (error) {
        console.error("Error fetching genre movies:", error);
      }
    };
    const fetchGenreName = async () => {
      try {
        const { data } = await axiosInstance.get(
          "/genre/movie/list?language=en"
        );
        const genre = data.genres.find(
          (g: { id: number }) => g.id === Number(genreId)
        );
        setGenreName(genre?.name || "Unknown Genre");
      } catch (error) {
        console.error("Error fetching genre name:", error);
      }
    };

    fetchMovies();
    fetchGenreName();
  }, [genreId]);

  return (
    <div className="w-full h-full flex flex-col px-6">
      <h2 className="text-xl font-semibold">
        {totalMovies} movies in "{genreName}"
      </h2>

      <div className="grid grid-cols-4 gap-4 mt-4">
        {movies.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            title={movie.title}
            src={imageUrl(movie.poster_path)}
          />
        ))}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </div>
    </div>
  );
};
