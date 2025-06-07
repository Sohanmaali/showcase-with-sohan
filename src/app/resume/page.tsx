import React from "react";
import EducationTimeline from "../components/resume/EducationTimeline";
import ExperienceTimeline from "../components/resume/ExperienceTimeline";
import Heading from "../components/resume/Heading";

export default function page() {
  return (
    <div>
      <div className="mb-4 md:mb-0">
        <div className="ps-2 pe-2 md:-mt-16 mt-4 mb-5">
          <h1 className="text-3xl font-bold text-white">Resume</h1>
          <div className="w-12 h-1 bg-yellow-500 my-2"></div>
          <div className="my-2 mt-10 ">
            <Heading heading="Education" />
            <EducationTimeline />
          </div>
          <div className="my-2 mt-10 ">
            <Heading heading="Experience" />
            <ExperienceTimeline />
          </div>
          <Heading heading="...Continue" />
        </div>
      </div>
    </div>
  );
}
