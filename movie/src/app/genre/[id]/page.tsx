"use client";
import React from "react";
import { GenreSearch } from "@/components/GenreSearch";
import { GenreSearchMovie } from "@/components/GenreSearchMovie";

function GenrePage() {
  return (
    <div className="flex flex-col  gap-6 pt-[100px] p-[80px]">
      <p className="text-[30px] font-[600]">Search filter</p>
      <div className="flex">
        <GenreSearch />
        <GenreSearchMovie />
      </div>
    </div>
  );
}

export default GenrePage;
