import React from "react";
import EducationTimeline from "../components/resume/EducationTimeline";
import ExperienceTimeline from "../components/resume/ExperienceTimeline";

export default function page() {
  return (
    <div>
      <div className="mb-4 md:mb-0">
        <div className="ps-6 pe-6 md:-mt-16 mt-4 mb-5">
          <h1 className="text-3xl font-bold text-white">Resume</h1>
          <div className="w-12 h-1 bg-yellow-500 my-2"></div>
          <div className="my-2 mt-10 ">
            <EducationTimeline />
          </div>
          <div className="my-2 mt-10 ">
            <ExperienceTimeline />
          </div>
          <div>
            <div className="mb-5 flex gap-4">
              <div className="w-12 h-12 flex justify-center items-center text-yellow-400 text-xl bg-[#202022] rounded-md  shadow border-t border-l border-[#FFD16A]  shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-yellow-400"
                  viewBox="0 0 512 512"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="32"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>Book</title>
                  <path d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288" />
                </svg>
              </div>
              <div className="mt-2">
                <h3 className="text-2xl font-bold text-white">...Continue</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
