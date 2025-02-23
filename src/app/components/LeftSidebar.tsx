"use client";
import { useState, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";
import Contact from "./leftSidebar/Contact";
import Profile from "./leftSidebar/Profile";
import SocialMedia from "./leftSidebar/SocialMedi";

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
    <aside className="bg-[#1E1E1F] border border-[#383838] rounded-3xl ps-4 pt-4 pb-4 pe-4 mt-3 lg:mt-0 lg:mb-5 transition-all duration-500 overflow-hidden lg:overflow-visible">
      <div className="flex items-center lg:flex-col gap-4 relative">
        <Profile />

        <button
          onClick={() => setIsActive(!isActive)}
          className="absolute -right-4 top-0 transform -translate-y-1/2 text-[#FFD16A] hover:text-white transition-all duration-300 ease-in-out lg:hidden flex items-center gap-1 p-2 rounded-tr-3xl border-t border-l border-[#FFD16A] rounded-bl-2xl bg-gradient-to-br from-[#3d3c3d] to-gray-800 hover:from-[#323132] hover:to-gray-700 shadow-md hover:shadow-lg"
        >
          <IoChevronDown
            className={`text-sm transition-transform duration-300 block md:hidden ${
              isActive ? "rotate-180" : "rotate-0"
            }`}
          />
          <span className="sm:block hidden transition-opacity duration-300">
            {isActive ? "Hide Contacts" : "Show Contacts"}
          </span>
        </button>
      </div>

      <div
        className={`lg:mt-10  transition-all duration-500 ${
          isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } lg:max-h-full block `}
      >
        <div className="pt-4 sm:pt-0">
          <hr className="border-[#383838] my-4 " />
          <Contact />
        </div>

        <hr className="border-[#383838] my-4" />
        <SocialMedia />
      </div>
    </aside>
  );
};

export default Sidebar;
