import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { axiosInstance } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

interface GenreProps {
  name: string;
  id: number;
}

export const Genre = () => {
  const [genres, setGenres] = useState<GenreProps[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchGenre = async () => {
      try {
        const { data } = await axiosInstance.get(
          "/genre/movie/list?language=en"
        );
        setGenres(data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
    fetchGenre();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-auto border-[1.5px] rounded-[6px] px-[16px] py-[8px] flex items-center gap-[8px] font-medium text-[14px]">
        <ChevronDown className="stroke-[1.2px]" /> Genre
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[577px]">
        <DropdownMenuLabel className="text-[20px] font-semibold pl-[20px] pt-[15px]">
          Genres
        </DropdownMenuLabel>
        <p className="text-[14px] font-light pl-[20px] pb-[10px]">
          See lists of movies by genre
        </p>
        <DropdownMenuSeparator />

        <div className="flex flex-wrap gap-[16px] p-[8px]">
          {genres.map((genre) => (
            <button
              key={genre.id}
              onClick={() => router.push(`/genre/${genre.id}`)}
              className="flex justify-between items-center rounded-full hover:bg-gray-100 text-[12px] font-[600] border-[#E4E4E7] border-[1px] px-[8px] h-[20px] gap-[4px]"
            >
              {genre.name}
              <ChevronRight className="size-[15px] stroke-[1.5px]" />
            </button>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
