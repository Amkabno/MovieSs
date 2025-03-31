import { Slide } from "@/components/Slide";
import { Upcoming } from "@/components/Upcoming";
import { Popular } from "@/components/Popular";

import { TopRated } from "@/components/TopRated";

export default function Home() {
  return (
    <div className="flex w-full h-full flex-col">
      <div className="flex pt-[80px] w-full">
        <Slide />
      </div>
      <div className="flex flex-col gap-[52px]">
        <Upcoming />
        <Popular />
        <TopRated />
      </div>
    </div>
  );
}
