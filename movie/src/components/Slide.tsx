import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Slide = () => {
  return (
    <Carousel className="w-full overflow-hidden pl-[15px]">
      <CarouselContent className="flex w-full relative">
        <CarouselItem className="min-w-full flex-shrink-0">
          <img
            src="https://s3-alpha-sig.figma.com/img/c78e/5e57/16d36abbdaa8df480db189d5729e384a?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mLG2xOJZNT2vGCrvhDwo3-iKl0QLHOJCxUbykqD81OWYT61RDmWH~sY5qc4qVMmDHRoLdT3VXAnqpxjl4QRY7lvqwtvVTj2-RScRPADrSRE2X1dKJ6MNwI89GQsAr7CVA~Sw886s4cN3GzZCxbhX6nG5wCcsdExQ3ZifH-DrPK1y2qNpWDmJzamRmYUQB4G5gKUvdNeqjPEES5nuyWmp4tVWbJDWV1Ve6DECdtwn6WwE~0puD445Fe7qQpsvTO15bYmHP3E7sN6ZamI~BBe1H7Aisb1JjhHE35MH~r0CHClF6Ayy8aDTsnbuKYmE-rzkB3IlXZLoaZaJNRHFDc~Erg__"
            className="w-full h-auto min-h-[300px] sm:min-h-[200px] object-cover"
            alt="Slide 1"
          />
        </CarouselItem>
        <CarouselItem className="min-w-full flex-shrink-0">
          <img
            className="w-full h-auto min-h-[300px] sm:min-h-[200px] object-cover"
            alt="Slide 2"
          />
        </CarouselItem>
        <CarouselItem className="min-w-full flex-shrink-0">
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
