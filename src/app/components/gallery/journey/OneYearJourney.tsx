import React from "react";
import FlipCard from "./FlipCard";
import { oneYearjourney } from "@/helpers/constFile";
export default function OneYearJourney() {
  return (
    <div>
      <div className="my-10  text-[#9191A1] flex flex-col md:flex-row gap-14 items-center justify-center">
        {oneYearjourney.map((item, index) => (
          <FlipCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
