import { experiences } from "@/helpers/constFile";
import Link from "next/link";
import React from "react";

export default function ExperienceTimeline() {
 

  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 md:ms-16 ms-4">
        {experiences.map((exp, index) => (
          <li key={index} className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-2 h-2 bg-[#FDC864] rounded-full -start-1 ring-4 mt-2 ring-[#383838]"></span>

            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
              <Link href={exp.link} target="_blank">{exp.company}</Link>
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
              {exp.duration}
            </time>
            <p className="mb-4 text-base font-normal text-gray-500">
              {exp.description}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}
