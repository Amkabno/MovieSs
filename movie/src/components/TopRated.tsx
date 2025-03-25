import React from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "./Card";

const cardsData = [
  { id: 1, rate: 7.9, title: "Pulp Fiction", src: "" },
  {
    id: 2,
    rate: 7.9,
    title: "The Lord of the Rings: Fellowship of the Kings",
    src: "",
  },
  { id: 3, rate: 9.0, title: "The Good, the Bad and the Ugly", src: "" },
  { id: 4, rate: 8.2, title: "Forrest Gump", src: "" },
  { id: 5, rate: 7.6, title: "Fight Club", src: "" },
  { id: 6, rate: 8.1, title: "Saving Private Ryan", src: "" },
  { id: 7, rate: 7.4, title: "City of God", src: "" },
  { id: 8, rate: 8.7, title: "The Green Mile", src: "" },
  { id: 9, rate: 8.3, title: "Life is Beautiful", src: "" },
  { id: 10, rate: 8.9, title: "Terminator 2: Judgement Day", src: "" },
];

export const TopRated = () => {
  return (
    <div className=" px-[80px]">
      <div className="flex justify-between pb-[32px]">
        <p className="text-[24px] font-[600]">Upcoming</p>
        <button className="text-[14px] font-[500] flex gap-[8px] items-center">
          See more <ArrowRight className="stroke-[1.2px]" size={20} />
        </button>
      </div>

      <div className="grid grid-cols-5 gap-[16px]">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            rate={card.rate}
            title={card.title}
            src={card.src}
          />
        ))}
      </div>
    </div>
  );
};
