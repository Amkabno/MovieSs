import React from "react";
import { Star } from "lucide-react";

export const Card = () => {
  return (
    <div className="w-[230px] h-[439px] rounded-[8px] bg-[#eaeaeb]">
      {" "}
      <img
        src="https://s3-alpha-sig.figma.com/img/6415/2808/0ffbeccc1a7cdd3a5199e0755d66e253?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=fCQufcR3am1qiooLQaqM9Q41NfwFPOLbPAZzQ3vVA3ubkL8vXYVlOARoxW3mVGAKW10Or4rEsgbn1We-Uv7tTuXNoCKZySv1bpIdwl683L-HGFQCh2aolanzjTygbJRG8oxQTaOW~juemQwUKxKlVfDrku7eyKv7kCfb8GjtOtzOXMjPUGfQ1cPuDBT-lQ66x3KsLKXsEsvNyS04Nl-XgtKjiFq3J8vWz--Y7SKpB16xhs5medKqDLyR2gKclKWDTQHp2j3nb5xDgNcjumvVKF8BAMHiDyS~EKQBNdHZif7FuEWg4eIGY97oHzVI0GbCsUbWHh0mcj~FV-FZhmU~fQ__"
        className="w-[230px] h-[340]"
      ></img>
      <div className="flex">
        <Star className="stroke-[1px] bg-[#fee046]" /> <p>6.9/10</p>
      </div>
      <p>Dear Santa</p>
    </div>
  );
};
