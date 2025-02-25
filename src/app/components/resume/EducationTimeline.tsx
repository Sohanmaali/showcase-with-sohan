import { educationData } from "@/helpers/constFile";
import Link from "next/link";

export default function EducationTimeline() {
  return (
    <>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 md:ms-20 ms-10">
        {educationData.map((edu, index) => (
          <li key={index} className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-2 h-2 bg-[#FDC864] rounded-full -start-1 ring-4 mt-2 ring-[#383838]"></span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
              {edu.link ? (
                <Link href={edu.link} target="_blank">
                  {edu.institution}
                </Link>
              ) : (
                edu.institution
              )}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {edu.duration}
            </time>
            <p className="mb-4 text-base  text-gray-500 dark:text-gray-400 font-[Playfair Display]">
              {edu.description}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}
