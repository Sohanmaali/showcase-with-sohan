"use client";
import { useState, useEffect } from "react";
import ProgramCard from "./ProgramCard";
import Repositories from "./Repositories";
import { useRouter, useSearchParams } from "next/navigation";

const CodeTabs = () => {
  const router = useRouter();
  const searchParams: any = useSearchParams();
  const tabFromUrl = searchParams.get("tab");

  // Default tab is "JOURNEY" if not found in URL
  const [activeTab, setActiveTab] = useState(tabFromUrl || "CODE");

  useEffect(() => {
    if (tabFromUrl !== activeTab) {
      const params = new URLSearchParams();
      params.set("tab", activeTab);
      router.push(`?${params.toString()}`, { scroll: false });
    }
  }, [activeTab, tabFromUrl, router]);

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
