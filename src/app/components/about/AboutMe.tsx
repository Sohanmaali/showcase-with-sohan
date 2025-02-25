"use client"
import React from "react";
import { aboutDetails } from "@/helpers/constFile";
import useCopyProtect from "@/hooks/useCopyProtect";

export default function AboutMe() {
  useCopyProtect();
  return (
    <div className="md:mx-4 my-2 font-[Inconsolata]">
      {aboutDetails.map((detail, index) => (
        <p
          key={index}
          className={`text-gray-300 text-lg ${
            index !== 0 ? "mt-4" : "md:mt-14"
          }`}
        >
          {detail}
        </p>
      ))}
    </div>
  );
}
