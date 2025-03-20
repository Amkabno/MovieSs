import React from "react";
import { Star } from "lucide-react";
import { Play } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Slide = () => {
  return (
    <Carousel className="w-full overflow-hidden pl-[15px] relative">
      <CarouselContent className="flex w-full">
        <CarouselItem className="min-w-full flex-shrink-0 relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/c78e/5e57/16d36abbdaa8df480db189d5729e384a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mLG2xOJZNT2vGCrvhDwo3-iKl0QLHOJCxUbykqD81OWYT61RDmWH~sY5qc4qVMmDHRoLdT3VXAnqpxjl4QRY7lvqwtvVTj2-RScRPADrSRE2X1dKJ6MNwI89GQsAr7CVA~Sw886s4cN3GzZCxbhX6nG5wCcsdExQ3ZifH-DrPK1y2qNpWDmJzamRmYUQB4G5gKUvdNeqjPEES5nuyWmp4tVWbJDWV1Ve6DECdtwn6WwE~0puD445Fe7qQpsvTO15bYmHP3E7sN6ZamI~BBe1H7Aisb1JjhHE35MH~r0CHClF6Ayy8aDTsnbuKYmE-rzkB3IlXZLoaZaJNRHFDc~Erg__"
            className="w-full h-auto min-h-[300px] sm:min-h-[200px] object-cover"
            alt="Slide 1"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5">
            <p className="text-white text-[14px]">Now Playing:</p>
            <p className="text-white text-[20px] font-bold">Wicked</p>
            <div className="flex items-center gap-1">
              <Star
                className="stroke-[1px] text-[#fde047] fill-[#fde047]"
                size={16}
              />
              <p className="text-white text-[14px]">8.5/10</p>
              <p className="text-white w-[302px]">
                Elphaba, a misunderstood young woman because of her green skin,
                and Glinda, a popular girl, become friends at Shiz University in
                the Land of Oz. After an encounter with the Wonderful Wizard of
                Oz, their friendship reaches a crossroads.
              </p>
              <button className="flex justify-center items-center h-[40px] w-object-fit rounded-[6px] bg-white px-[16px] gap-[8px]">
                <Play className="stroke-[1.4px] size-[18px]" /> Watch Trailer
              </button>
            </div>
          </div>
        </CarouselItem>

        <CarouselItem className="min-w-full flex-shrink-0 relative">
          <img
            className="w-full h-auto min-h-[300px] sm:min-h-[200px] object-cover"
            alt="Slide 2"
          />
        </CarouselItem>

        <CarouselItem className="min-w-full flex-shrink-0 relative">
          <img
            className="w-full h-auto min-h-[300px] sm:min-h-[200px] object-cover"
            alt="Slide 3"
          />
        </CarouselItem>
      </CarouselContent>

      <CarouselPrevious className="absolute left-10" />
      <CarouselNext className="absolute right-10" />
    </Carousel>
  );
};
