import { Genre } from "@/components/Genre";
import { Film } from "lucide-react";
import { SearchIn } from "@/components/SearchIn";
import { DarkMod } from "@/components/DarkMod";
import { Slide } from "@/components/Slide";
import { Upcoming } from "@/components/Upcoming";

export default function Home() {
  return (
    <div className="flex w-full h-full flex-col">
      <nav className="flex w-full h-[60px] fixed justify-between px-[30px] z-[2] bg-white">
        <span className="flex items-center gap-[8px]">
          <Film className=" text-[#4338CA] size-[26px] stroke-[1.2px]" />
          <p className="font-[700] text-[20px] text-[#4338CA] italic">
            Movie Z
          </p>
        </span>
        <span className="flex items-center gap-[12px]">
          <Genre />
          <SearchIn />
        </span>
        <span className="flex items-center">
          <DarkMod />
        </span>
      </nav>
      <div className="flex pt-[80px] w-full">
        <Slide />
      </div>
      <div>
        <Upcoming />
      </div>
    </div>
  );
}
