"use client";
import { useEffect, useState } from "react";
import ImageSlider from "./journey/slider";
import MarqueeSlider from "./journey/MarqueeSlider";
import OneYearJourney from "./journey/OneYearJourney";
import InfoBeansEvent from "./infoBeans/InfoBeansEvent";
import FoduuEvent from "./work/FoduuEvent";

import { useRouter, useSearchParams } from "next/navigation";
const GalleryTabs = () => {
  const router = useRouter();
  const searchParams: any = useSearchParams();
  const tabFromUrl = searchParams.get("tab");

  // Default tab is "JOURNEY" if not found in URL
  const [galleryTab, setActiveTab] = useState(tabFromUrl || "JOURNEY");

  useEffect(() => {
    if (tabFromUrl !== galleryTab) {
      const params = new URLSearchParams();
      params.set("tab", galleryTab);
      router.push(`?${params.toString()}`, { scroll: false });
    }
  }, [galleryTab, tabFromUrl, router]);

  return (
    <>
      <div className="md:w-1/2 w-full">
        <div className="flex">
          {["JOURNEY", "INFOBEANS", "WORK"].map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-2 text-center ${
                galleryTab === tab
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
        {galleryTab === "JOURNEY" && (
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
        {galleryTab === "INFOBEANS" && (
          <>
            <InfoBeansEvent />
          </>
        )}
        {galleryTab === "WORK" && (
          <>
            <FoduuEvent />
          </>
        )}
      </div>
    </>
  );
};

export default GalleryTabs;
