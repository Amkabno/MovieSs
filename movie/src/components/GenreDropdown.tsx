import React from "react";
import { Genre } from "./Genre";

const genreList = [
  "Action",
  "Thriller",
  "Drama",
  "Comedy",
  "Horror",
  "Sci-Fi",
  "Fantasy",
];

export const GenreDropdown = () => <Genre genres={genreList} />;
{
}
