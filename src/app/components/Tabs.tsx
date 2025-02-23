"use client";
import { useState } from "react";
import ImageSlider from "./gallery/journey/slider";
// import OneYearJourney from "./OneYearJourney";
import MarqueeSlider from "./gallery/journey/MarqueeSlider";
import Card from "./gallery/EventCard";
import OneYearJourney from "./gallery/journey/OneYearJourney";
import InfoBeansEvent from "./gallery/infoBeans/InfoBeansEvent";
import FoduuEvent from "./gallery/work/FoduuEvent";
// const infoBeans = [
//   {
//     eventName: "Guru purnima",
//     images: [
//       "/assets/images/gurupurnima/g1.jpg",
//       "/assets/images/gurupurnima/g3.jpg",
//       "/assets/images/gurupurnima/g4.jpg",
//       "/assets/images/gurupurnima/g5.jpg",
//     ],
//   },
//   {
//     eventName: "Shree ganesh chaturthi",
//     images: [
//       "/assets/images/ganesh_chaturthi/ganeshji1.jpg",
//       "/assets/images/ganesh_chaturthi/ganeshji4.jpg",
//       "/assets/images/ganesh_chaturthi/gnaesh2.jpg",
//       "/assets/images/ganesh_chaturthi/rangloi2.jpg",
//     ],
//   },
//   {
//     eventName: "Birthday",
//     images: [
//       "/assets/images/Birthday/birt6.jpg",
//       "/assets/images/Birthday/birth-day1.jpg",
//       "/assets/images/Birthday/birth2.jpg",
//       "/assets/images/Birthday/birth6.jpg",
//     ],
//   },
// ];

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
