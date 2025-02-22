import React from "react";
import ProgramCard from "../components/code/ProgramCard";

export default function Code() {
  return (
    <div>
      <div className="mb-4 md:mb-0">
        <div className="ps-6 pe-6 md:-mt-16 mt-4 mb-5">
          <h1 className="text-3xl font-bold text-white">Code</h1>
          <div className="w-12 h-1 bg-yellow-500 my-2"></div>
          <div className="my-2 mt-10 flex flex-wrap gap-6 justify-center ">
            <ProgramCard />
          </div>
        </div>
      </div>
    </div>
  );
}
