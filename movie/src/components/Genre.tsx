import React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface GenreProps {
  genres: string[];
}

export const Genre: React.FC<GenreProps> = ({ genres }) => {
  if (!genres || genres.length === 0) {
    return <p>No genres available.</p>;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="h-auto border-[1.5px] rounded-[6px] px-[16px] py-[8px] flex items-center gap-[8px] font-medium text-[14px]">
        <ChevronDown className="stroke-[1.2px]" /> Genre
      </DropdownMenuTrigger>

      <DropdownMenuContent className=" w-[577px]">
        <DropdownMenuLabel className="text-[20px] font-semibold">
          Genres
        </DropdownMenuLabel>
        <p className="text-[14px] font-light ml-[10px] mb-[10px]">
          See lists of movies by genre
        </p>
        <DropdownMenuSeparator />

        <div className="flex h-[333px] gap-[8px] p-[8px]">
          {genres.map((genre, index) => (
            <DropdownMenuItem
              key={index}
              className="px-[12px] py-[6px] h-[40px] flex justify-between items-center rounded-lg hover:bg-gray-100"
            >
              {genre} <ChevronRight size={16} />
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
