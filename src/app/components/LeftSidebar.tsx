"use client";
import { useState, useEffect, useRef } from "react";
import { IoChevronDown } from "react-icons/io5";
import Contact from "./leftSidebar/Contact";
import Profile from "./leftSidebar/Profile";
import SocialMedia from "./leftSidebar/SocialMedi";

const LeftSidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sidebarRef.current || window.innerWidth < 1024) return;

      const sidebar: any = sidebarRef.current;
      const parent = sidebar.parentElement;
      if (!parent) return;

      const parentRect = parent.getBoundingClientRect();

      if (parentRect.top <= 10) {
        sidebar.style.position = "fixed";
        // sidebar.style.top = "1px";
        sidebar.style.left = `${parentRect.left}px`;
        sidebar.style.width = `${parentRect.width}px`;
        sidebar.style.maxWidth = `${parentRect.width}px`;
        sidebar.style.zIndex = "20";
        sidebar.style.transition =
          "top 0.9s ease-in-out, width 0.9s ease-in-out"; // Smooth transition
      } else {
        sidebar.style.position = "relative";
        sidebar.style.top = "0";
        sidebar.style.left = "0";
        sidebar.style.width = "100%";
        sidebar.style.maxWidth = "100%";
        sidebar.style.transition =
          "top 0.3s ease-in-out, width 0.3s ease-in-out"; // Smooth transition
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll(); // Run once on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <aside
      ref={sidebarRef}
      className="bg-[#1E1E1F] border border-[#383838] rounded-3xl ps-6 pt-4 pb-4 pe-6 mt-3 lg:mt-0 lg:mb-5 transition-all duration-500 overflow-hidden lg:overflow-visible lg:fixed"
    >
      <div className="flex items-center lg:flex-col gap-4 lg:gap-0 relative">
        <Profile />

        <button
          onClick={() => setIsActive(!isActive)}
          className="absolute -right-6 top-0 transform -translate-y-1/2 text-[#FFD16A] hover:text-white transition-all duration-300 ease-in-out lg:hidden flex items-center gap-1 p-2 rounded-tr-3xl border-t border-l border-[#FFD16A] rounded-bl-2xl bg-gradient-to-br from-[#3d3c3d] to-gray-800 hover:from-[#323132] hover:to-gray-700 shadow-md hover:shadow-lg"
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
        className={`lg:mt-6 transition-all duration-100 ${
          isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } lg:max-h-full block`}
      >
        <div className="pt-4 sm:pt-0">
          <hr className="border-[#383838] my-4" />
          <Contact />
        </div>

        <hr className="border-[#383838] my-4" />
        <SocialMedia />
      </div>
    </aside>
  );
};

export default LeftSidebar;
