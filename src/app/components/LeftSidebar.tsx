"use client";
import { useState, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";
import Contact from "./leftSidebar/Contact";
import Profile from "./leftSidebar/Profile";
import SocialMedia from "./leftSidebar/SocialMedi";
import { motion } from 'framer-motion';

import { link, socialLinks } from "@/helpers/constFile";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  // Auto-detect screen size and update isActive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsActive(true); // Keep open on large screens
      } else {
        setIsActive(false); // Close on small screens (unless manually opened)
      }
    };

    handleResize(); // Run once on load
    window.addEventListener("resize", handleResize); // Listen for screen resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <aside className="bg-[#1E1E1F] border border-[#383838] rounded-3xl p-4 transition-all duration-500">
      <div className="flex items-center lg:flex-col gap-4 relative">
        <Profile />   
        <button
          onClick={() => setIsActive(!isActive)}
          className={`absolute -right-4 md:top-1 top-0 transform -translate-y-1/2 text-[#FFD16A] hover:text-white transition-all duration-300 ease-in-out lg:hidden flex items-center gap-1 p-2 rounded-tr-3xl border-t border-l border-[#FFD16A] rounded-bl-2xl bg-gradient-to-br from-[#3d3c3d] to-gray-800 hover:from-[#323132] hover:to-gray-700 shadow-md hover:shadow-lg`}
        >
          <IoChevronDown
            className={`text-sm transition-transform duration-300 block md:hidden ${isActive ? "rotate-180" : "rotate-0"
              }`}
          />
          <span className="sm:block hidden transition-opacity ease-in-out duration-300">
            {isActive ? "Hide Contacts" : "Show Contacts"}
          </span>
        </button>
      </div>
      
      <hr className="block sm:hidden border-[#383838] my-4" />

      <div className="flex justify-center space-x-4">
        {link.map((social, index) => (
          <motion.a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 rounded-full flex items-center justify-center text-gray-300 ${social.bgColor} ${social.color} transition-all duration-300`}
            whileHover={{ y: -3, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {social.icon}
          </motion.a>

        ))}
      </div> 
      <div className={`transition-all duration-500 ${isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } lg:block lg:opacity-100 lg:max-h-full`}>
         
        <div className="pt-4 sm:pt-0">
          <hr className="border-[#383838] my-4" />
          <Contact />
          <hr className="border-[#383838] my-4" />
          {/* <SocialMedia /> */}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
