import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Genre = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" h-[30px] border-[2px] px-[15px] py-[5px] border-r-8 justify-center items-center">
        Genre
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-[24px] font-[600]">
          Genres
        </DropdownMenuLabel>
        <p className="text-[16px] font-[400] ml-[10px] mb-[15px] ">
          See lists of movies by genre
        </p>
        <DropdownMenuSeparator />
        <div className="flex">
          <DropdownMenuItem>Action</DropdownMenuItem>
          <DropdownMenuItem>Adventure</DropdownMenuItem>
          <DropdownMenuItem>Animation</DropdownMenuItem>
          <DropdownMenuItem>Comedy</DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
