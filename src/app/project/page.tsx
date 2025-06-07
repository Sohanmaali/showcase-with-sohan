import React from "react";
import ProjectCard from "../components/project/ProjectCard";

export default function Project() {
  return (
    <div>
      <div className="mb-4 md:mb-0">
        <div className="ps-2 pe-2 md:-mt-16 mt-4 mb-5">
          <h1 className="text-3xl font-bold text-white">Projects</h1>
          <div className="w-12 h-1 bg-yellow-500 my-2"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-4">
            <ProjectCard />
          </div>
        </div>
      </div>
    </div>
  );
}
