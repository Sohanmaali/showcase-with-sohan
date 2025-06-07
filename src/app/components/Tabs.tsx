"use client";
import { useState } from "react";
import ImageSlider from "./gallery/journey/slider";
// import OneYearJourney from "./OneYearJourney";
import MarqueeSlider from "./gallery/journey/MarqueeSlider";
import OneYearJourney from "./gallery/journey/OneYearJourney";
import InfoBeansEvent from "./gallery/infoBeans/InfoBeansEvent";
import FoduuEvent from "./gallery/work/FoduuEvent";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("JOURNEY");

  return (
    <>
      <div className="md:w-1/2 w-full">
        <div className="flex">
          {["JOURNEY", "INFOBEANS", "WORK"].map((tab) => (
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

      <div className=" md:ps-4 md:pe-4 pe-0 ps-0 rounded w-full ">
        {activeTab === "JOURNEY" && (
          <div>
            <ImageSlider />
            {[
              {
                title: "See the journey of one year",
                component: <OneYearJourney />,
              },
              { title: "Coding", component: <MarqueeSlider /> },
            ].map(({ title, component }, index) => (
              <div key={index}>
                <div className="mt-3 uppercase text-[#9191A1] text-2xl font-bold">
                  {title}
                </div>
                {component}
              </div>
            ))}
          </div>
        )}
        {activeTab === "INFOBEANS" && (
          <>
            <InfoBeansEvent />
          </>
        )}
        {activeTab === "WORK" && (
          <>
            <FoduuEvent />
          </>
        )}
      </div>
    </>
  );
};

export default Tabs;
