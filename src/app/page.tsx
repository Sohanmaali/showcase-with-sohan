"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";
import AboutCard from "./components/AboutCard";
import TeacherCard from "./components/TeacherCard";
import Modal from "./components/TeacherModal";
import { useState } from "react";

const HomePage = () => {
  return (
    <div className="mb-4 md:mb-0">
      <div className="ps-6 pe-6 md:-mt-16 mt-2 mb-5">
        <h1 className="text-3xl font-bold text-white">About Me</h1>
        <div className="w-12 h-1 bg-yellow-500 my-2"></div>
        <div className=" md:mx-4 my-2">
          <p className="text-gray-300 md:mt-14">
            Hey there, I'm Sohan Maali, a MERN Stack Developer at Foduu. I have
            a passion for building scalable web applications and crafting
            seamless user experiences. My journey in development revolves around
            turning complex challenges into elegant, high-performing solutions.
          </p>

          <p className="text-gray-300 mt-4">
            With a keen interest in modern web technologies, I am constantly
            refining my skills, staying up to date with industry trends, and
            exploring innovative approaches to development. Beyond coding, I’m
            always eager to collaborate, learn, and contribute to projects that
            push the boundaries of web technology.
          </p>
        </div>
        {/* Flex container for cards */}
        <div className="font-bold text-2xl">
          <h3>My Expertise</h3>
        </div>
        <div className="flex flex-wrap gap-6 mt-5 justify-center ">
          <AboutCard
            heading={"Full Stack Development"}
            description={
              "I am a skilled MERN stack developer with extensive experience in building robust web applications using MongoDB, Express.js, React.js, and Node.js. I specialize in API integration, server-side rendering, and database management to deliver dynamic and efficient web solutions."
            }
          />
          <AboutCard
            heading={"Github"}
            description={
              "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer."
            }
          />
          <AboutCard
            heading={"Open Source Contributor"}
            description={
              " Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to helpothers and contribute into the community for the good."
            }
          />
        </div>
        <div className="font-bold text-2xl mt-4">
          <h3>Teacher's Guidance</h3>
        </div>
        <div className="flex gap-3 mt-5 justify-center ">
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
          <TeacherCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
