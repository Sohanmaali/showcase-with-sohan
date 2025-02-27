import { projectDetails } from "@/helpers/constFile";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Project {
  name: string;
  details: string;
  technology: string[];
  image: string;
  url: string;
}

export default function ProjectCard() {
  return (
    <>
      {projectDetails.map((project: Project, index: number) => (
        <div
          key={index}
          className="relative h-96 mt-6 md:w-full rounded-3xl flex justify-end flex-col z-[1] overflow-hidden"
        >
          <Link href={project.url} target="_blank">
            <div className="h-full w-full">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={project?.image}
                  fill
                  alt="logo"
                  className="object-cover w-74 md:w-40 rounded-3xl transition-transform duration-500 ease-in-out hover:scale-105 hover:opacity-90"
                />
              </div>
            </div>
          </Link>

          {/* Now, group class is applied only to the details section */}
          <div className="bg-[#282829] group">
            <div className="text-white z-[2] relative w-full flex flex-col bg-[#282829] px-6">
              <div className="h-14 w-full">
                <h1 className="text-2xl font-bold italic relative transition-all duration-300">
                  {project?.name}
                  <div className="border-b border-transparent bg-gradient-to-r from-blue-500 to-purple-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                </h1>
              </div>
            </div>

            {/* Project details are now revealed only when hovering over the detail section */}
            <div
              className="font-nunito block bg-[#282829] text-white font-light px-6 relative max-h-0 overflow-hidden leading-[1.2em] duration-500 
    group-hover:max-h-[15em] transition-all hover:pb-5"
            >
              <p>{project?.details}</p>
              <div className="flex flex-row mb-3  justify-start items-center mt-2 h-fit w-full max-w-full gap-2 overflow-x-auto scrollbar-hide">
                {project?.technology?.map((category: string, index: number) => (
                  <div
                    key={index}
                    className="p-2 min-w-[6rem]  border  border-[#EAB308] text-center rounded-lg bg-gray-800 text-white text-sm font-medium transition-all duration-300 hover:bg-[#1A1A1A]"
                  >
                    <p>{category}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
