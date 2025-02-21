import Image from "next/image";
import React from "react";

const expertise = [
  {
    heading: "Full Stack Development",
    description:
      "I am a skilled MERN stack developer with experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I specialize in API integration, server-side rendering, and database management.",
  },
  {
    heading: "Java Development",
    description:
      "I am a skilled Java developer with experience in building applications using Java, Spring Boot, Hibernate, and RESTful APIs. I specialize in backend development, database management, and API integration.",
  },
  {
    heading: "GitHub",
    description:
      "GitHub is essential for version control and collaboration. Its intuitive interface, pull requests, and issue tracking simplify development. Continuous integration ensures up-to-date code, making GitHub vital to my workflow.",
  },
  {
    heading: "Open Source Contributor",
    description:
      "Open Source is the future. I contribute to open-source projects on weekends, learning from best practices while helping others and giving back to the community.",
  },
];

export default function ExpertiseCard({ heading, description }: any) {
  return (
    <>
      {expertise.map((item, index) => (
        <div key={index} className="relative drop-shadow-xl md:w-64 w-full md:h-80 h-64 overflow-hidden rounded-xl bg-[#3d3c3d] group transition-all duration-300 hover:scale-105 cursor-default mt-5 md:mt-0">
          <div className="absolute flex flex-col items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132] p-4 text-center transition-all duration-300 group-hover:bg-[#2a292a]">
            <Image
              src="https://portfoliogallary.onrender.com/assets/images/icon-design.svg"
              alt="teacher"
              width={100}
              height={100}
              className="w-14 h-14"
            />
            <h2 className="text-lg font-semibold mt-2">{item?.heading}</h2>
            <p className="text-sm mt-2 opacity-80">{item?.description}</p>
          </div>
          <div className="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2 transition-all duration-300 group-hover:scale-125"></div>
        </div>
      ))}
    </>
  );
}
