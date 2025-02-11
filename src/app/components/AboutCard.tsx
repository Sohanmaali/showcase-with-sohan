import React from "react";

export default function AboutCard({ heading, description }: any) {
  return (
    <>
      <div className="relative drop-shadow-xl w-64 h-80 overflow-hidden rounded-xl bg-[#3d3c3d] group transition-all duration-300 hover:scale-105 cursor-default">
        <div className="absolute flex flex-col items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132] p-4 text-center transition-all duration-300 group-hover:bg-[#2a292a]">
          <h2 className="text-lg font-semibold">{heading}</h2>
          <p className="text-sm mt-2 opacity-80">{description}</p>
        </div>
        <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2 transition-all duration-300 group-hover:scale-125"></div>
      </div>
    </>
  );
}
