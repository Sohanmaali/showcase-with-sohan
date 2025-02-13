import React from "react";

export default function ProjectCard() {
  return (
    <div>
      <div className="relative group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 h-72 w-96  rounded-2xl hover:duration-700 duration-700">
        <div className="w-96 h-72 bg-lime-400 text-gray-800">
          {/* <div className="flex flex-row justify-between"></div> */}
        </div>
        <div className="absolute bg-gray-50 -bottom-24 w-96 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
          <span className="text-lime-400 font-bold text-xs">TAILWIND</span>
          <span className="text-gray-800 font-bold text-3xl">Cheat Sheet</span>
          <p className="text-neutral-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
