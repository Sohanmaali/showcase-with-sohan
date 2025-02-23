import Link from "next/link";
import React from "react";

export default function ExperienceTimeline() {
  const experiences = [
    {
      company: "InfoBeans Foundation Indore",
      link: "https://www.infobeans.com/infobeans-foundation/",
      duration: "April 2023–June 2024",
      description:
        "Completed ITEP training at InfoBeans Foundation, Indore. Gained hands-on experience in software development, programming, and IT solutions, enhancing skills in web development, database management, and software engineering best practices.",
    },
    {
      company: "FODUU - Web Design Company India",
      link: "https://www.foduu.com/",
      duration: "July 2024–Present",
      description:
        "Responsible for web design and development, contributing to various projects with expertise in front-end and back-end technologies.",
    },
  ];

  return (
    <>
      <ol className="relative border-s border-[#383838] md:ms-20 ms-10">
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
