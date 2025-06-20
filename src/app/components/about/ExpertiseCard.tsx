import { expertiseCard } from "@/helpers/constFile";
import Image from "next/image";
import React from "react";



export default function ExpertiseCard() {
  return (
    <>
      {expertiseCard.map((item, index) => (
        <div 
          key={index} 
          className="relative drop-shadow-xl md:w-72 w-full md:h-80 h-64 overflow-hidden rounded-xl bg-[#3d3c3d] group transition-all duration-300 hover:scale-105 cursor-default mt-5 md:mt-0"
        >
          {/* Blurred Effect - Bottom Right */}
          <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2 transition-all duration-300 group-hover:scale-125"></div>
          
          {/* Blurred Effect - Top Left */}
          <div className="absolute w-56 h-48 bg-white blur-[50px] -right-1/2 -bottom-1/2 transition-all duration-300 group-hover:scale-125"></div>

          <div className="absolute flex flex-col items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132] p-4 text-center transition-all duration-300 group-hover:bg-[#2a292a]">
            <Image
              src="https://portfoliogallary.onrender.com/assets/images/icon-design.svg"
              alt="teacher"
              width={100}
              height={100}
              className="w-14 h-14"
            />
            <h2 className="text-lg font-semibold mt-2">{item?.heading}</h2>
            <p className="text-sm mt-2 opacity-80">{item?.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}
