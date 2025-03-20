import React from "react";
import { ChevronDown } from "lucide-react";

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
      <DropdownMenuTrigger className=" h-object-fit border-[1.5px] rounded-[6px] px-[16px] py-[8px] border-r-8  items-center flex w-object-fit gap-[8px] font-[500] text-[14px] ">
        <ChevronDown className="stroke-[1.2px] " /> Genre
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="size-[30px] font-[600] ">
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
