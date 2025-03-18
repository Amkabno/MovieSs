import { Genre } from "@/components/Genre";
import { Film } from "lucide-react";

export default function Home() {
  return (
    <div className="flex w-full h-full">
      <nav className="flex w-full h-[50px]">
        <Film className=" text-[#4338CA] size-[30px] stroke-[1.1px]" />
        <Genre />
      </nav>
    </div>
  );
}
