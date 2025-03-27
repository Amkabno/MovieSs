import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface GenreProps {
  genres: string[];
}

export const Genre: React.FC<GenreProps> = ({ genres }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-auto border-[1.5px] rounded-[6px] px-[16px] py-[8px] flex items-center gap-[8px] font-medium text-[14px]">
        <ChevronDown className="stroke-[1.2px]" /> Genre
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-[577px] ">
        <DropdownMenuLabel className="text-[20px] font-semibold pl-[20px] pt-[15px] ">
          Genres
        </DropdownMenuLabel>
        <p className="text-[14px] font-light pl-[20px] pb-[10px]">
          See lists of movies by genre
        </p>
        <DropdownMenuSeparator />

        <div className="flex flex-wrap gap-[16px] p-[8px]">
          {genres.map((genre, index) => (
            <a
              key={index}
              href="#"
              className="flex justify-between items-center rounded-full hover:bg-gray-100 text-[12px] font-[600] border-[#E4E4E7] border-[1px] px-[8px] h-[20px] gap-[4px]  "
            >
              {genre}
              <ChevronRight className="size-[15px] stroke-[1.5px]" />
            </a>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
