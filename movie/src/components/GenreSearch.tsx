import React from "react";
import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/utils";

interface GenreProps {
  name: string;
  id: number;
}

export const GenreSearch = () => {
  const [genres, setGenres] = useState<GenreProps[]>([]);
  const fetchGenre = async () => {
    const { data } = await axiosInstance.get("/genre/movie/list?language=en");
    setGenres(data.genres);
  };
  useEffect(() => {
    fetchGenre();
  }, []);
  return (
    <div className="flex flex-col w-[400px] h-full ">
      <p className="text-[20px] font-semibold pl-[20px]  ">Genres</p>
      <p className="text-[14px] font-light pl-[20px] pb-[10px]">
        See lists of movies by genre
      </p>

      <div className="flex flex-wrap gap-[16px] p-[8px] ">
        {genres?.map((genre) => (
          <a
            key={genre.id}
            href={`/genre/${genre.id}`}
            className="flex justify-between items-center rounded-full hover:bg-gray-100 text-[12px] font-[600] border-[#E4E4E7] border-[1px] px-[8px] h-[20px] gap-[4px]  "
          >
            {genre.name}
            <ChevronRight className="size-[15px] stroke-[1.5px]" />
          </a>
        ))}
      </div>
    </div>
  );
};
