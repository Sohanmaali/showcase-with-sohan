import React from "react";
import ProjectCard from "../components/project/ProjectCard";
import SectionLayout from "../components/SectionLayout";

export default function Project() {
  return (
    <>
      <SectionLayout title="Projects">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-4">
          <ProjectCard />
        </div>
      </SectionLayout>
    </>
  );
}
