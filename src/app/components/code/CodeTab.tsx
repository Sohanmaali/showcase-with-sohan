"use client";
import { useState, useEffect } from "react";
import ProgramCard from "./ProgramCard";
import Repositories from "./Repositories";

const CodeTabs = () => {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "CODE";
  });

  // Update localStorage when the tab changes
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  return (
    <>
      <div className="md:w-1/3 w-full ">
        <div className="flex">
          {["CODE", "REPOSITORIES"].map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-2 text-center ${
                activeTab === tab
                  ? "border rounded-xl border-[#EAB308] text-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="md:ps-4 md:pe-4 pe-0 ps-0 rounded w-full ">
        {activeTab === "CODE" && <ProgramCard />}
        {activeTab === "REPOSITORIES" && <Repositories />}
      </div>
    </>
  );
};

export default CodeTabs;
