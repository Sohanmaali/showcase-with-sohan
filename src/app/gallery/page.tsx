"use client";
import React from "react";

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
            <div className=" mt-3 uppercase text-[#9191A1] text-2xl font-bold">
              Coding
            </div>
            <MarqueeSlider />
          </div>
        )}
        {activeTab === "tab2" && (
          <div>
            <div>
              <div className="mb-4 md:mb-0">
                <div className="ps-6 pe-6 mb-5">
                  <h1 className="text-xl font-bold text-white">Event Name</h1>
                  <div className="w-12 h-1 bg-yellow-500 my-2"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "https://portfoliogallary.onrender.com/assets/gallary/slider/slider3.png",
                  "https://portfoliogallary.onrender.com/assets/gallary/slider/slider2.png",
                  "https://portfoliogallary.onrender.com/assets/gallary/slider/sliderimg1.jpg",
                ].map((image: string, index: number) => (
                  <Card image={image} key={index} />
                ))}
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-4 md:mb-0">
                <div className="ps-6 pe-6 mb-5">
                  <h1 className="text-xl font-bold text-white">Event Name</h1>
                  <div className="w-12 h-1 bg-yellow-500 my-2"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "https://portfoliogallary.onrender.com/assets/gallary/slider/slider3.png",
                  "https://portfoliogallary.onrender.com/assets/gallary/slider/slider2.png",
                  "https://portfoliogallary.onrender.com/assets/gallary/slider/sliderimg1.jpg",
                ].map((image: string, index: number) => (
                  <Card image={image} key={index} />
                ))}
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-4 md:mb-0">
                <div className="ps-6 pe-6 mb-5">
                  <h1 className="text-xl font-bold text-white">Event Name</h1>
                  <div className="w-12 h-1 bg-yellow-500 my-2"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "https://portfoliogallary.onrender.com/assets/gallary/slider/slider3.png",
                  "https://portfoliogallary.onrender.com/assets/gallary/slider/slider2.png",
                  "https://portfoliogallary.onrender.com/assets/gallary/slider/sliderimg1.jpg",
                ].map((image: string, index: number) => (
                  <Card image={image} key={index} />
                ))}
              </div>
            </div>
            <div className="mt-4">
              <div className="mb-4 md:mb-0">
                <div className="ps-6 pe-6 mb-5">
                  <h1 className="text-xl font-bold text-white">Event Name</h1>
                  <div className="w-12 h-1 bg-yellow-500 my-2"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "https://portfoliogallary.onrender.com/assets/gallary/slider/slider3.png",
                  "https://portfoliogallary.onrender.com/assets/gallary/slider/slider2.png",
                  "https://portfoliogallary.onrender.com/assets/gallary/slider/sliderimg1.jpg",
                ].map((image: string, index: number) => (
                  <Card image={image} key={index} />
                ))}
              </div>
            </div>
          </div>
        )}
        {activeTab === "tab3" && <p>Content for Tab 3</p>}
      </div>
    </>
  );
};
