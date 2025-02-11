"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";
import { isAuthenticated, removeToken } from "./utils/auth";
import Gallery from "./gallery/page";
import Navbar from "./components/Navbar";
import AboutCard from "./components/AboutCard";

const HomePage = () => {
  const auth = useSelector((state: RootState) => state.auth);
  return (
    <div className="mb-4 md:mb-0">
      <div className="ps-6 pe-6 md:-mt-16 mt-2">
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
        <div className="flex flex-wrap gap-6 mt-5 justify-center md:justify-start">
          <AboutCard />
          <AboutCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
