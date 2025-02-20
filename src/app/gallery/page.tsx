"use client";
import React from "react";

const infoBeans = [
  {
    eventName: "Guru purnima",
    images: [
      "/assets/images/gurupurnima/g1.jpg",
      "/assets/images/gurupurnima/g3.jpg",
      "/assets/images/gurupurnima/g4.jpg",
      "/assets/images/gurupurnima/g5.jpg",
    ],
  },
  {
    eventName: "Shree ganesh chaturthi",
    images: [
      "/assets/images/ganesh_chaturthi/ganeshji1.jpg",
      "/assets/images/ganesh_chaturthi/ganeshji4.jpg",
      "/assets/images/ganesh_chaturthi/gnaesh2.jpg",
      "/assets/images/ganesh_chaturthi/rangloi2.jpg",
    ],
  },
  {
    eventName: "Birthday",
    images: [
      "/assets/images/Birthday/birt6.jpg",
      "/assets/images/Birthday/birth-day1.jpg",
      "/assets/images/Birthday/birth2.jpg",
      "/assets/images/Birthday/birth6.jpg",
    ],
  },
];

export default function Gallery() {
  return (
    <>
      <div className="mb-4 md:mb-0">
        <div className="ps-6 pe-6 md:-mt-16 mt-4 mb-5">
          <h1 className="text-3xl font-bold text-white">Gallery</h1>
          <div className="w-12 h-1 bg-yellow-500 my-2"></div>
          <div className="my-2 mt-10 flex flex-wrap gap-6 ">
            <Tabs />
          </div>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";
import ImageSlider from "../components/journey/slider";
import MarqueeSlider from "../components/journey/MarqueeSlider";
import Card from "../components/infoBeans/Card";
import FlipCard from "../components/journey/FlipCard";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <div className="md:w-1/2 w-full ">
        {/* Tab Buttons */}
        <div className="flex ">
          <button
            className={`flex-1 py-2 text-center ${
              activeTab === "tab1"
                ? "border rounded-xl border-[#EAB308] text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("tab1")}
          >
            Journey
          </button>
          <button
            className={`flex-1 py-2 text-center ${
              activeTab === "tab2"
                ? "border rounded-xl border-[#EAB308] text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("tab2")}
          >
            INFOBEANS
          </button>
          <button
            className={`flex-1 py-2 text-center ${
              activeTab === "tab3"
                ? "border rounded-xl border-[#EAB308] text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("tab3")}
          >
            Work
          </button>
        </div>

        {/* Tab Content */}
      </div>
      <div className=" md:ps-4 md:pe-4 rounded w-full ">
        {activeTab === "tab1" && (
          <div>
            <ImageSlider />
            <div className=" mt-3 uppercase text-[#9191A1] text-2xl font-bold">
              See the journey of one year
            </div>
            <div className="my-10  text-[#9191A1] flex flex-col md:flex-row gap-10 items-center justify-center">
              <FlipCard />
              <FlipCard />
              <FlipCard />
            </div>

            <div className=" mt-3 uppercase text-[#9191A1] text-2xl font-bold">
              Coding
            </div>
            <MarqueeSlider />
          </div>
        )}
        {activeTab === "tab2" && (
          <>
            {infoBeans?.map((event, index) => (
              <div key={index}>
                <div className={`mb-4 md:mb-0 ${index > 0 ? "mt-6" : ""}`}>
                  <div className=" pe-6 mb-5">
                    <h1 className="text-xl font-bold text-white">
                      {event?.eventName}
                    </h1>
                    <div className="w-12 h-1 bg-yellow-500 my-2"></div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
                  {event?.images.map((image, imgIndex) => (
                    <Card image={image} key={imgIndex} />
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
        {activeTab === "tab3" && <p>Content for Tab 3</p>}
      </div>
    </>
  );
};
