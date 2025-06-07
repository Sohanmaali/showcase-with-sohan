import React from "react";
import Tabs from "../components/Tabs";

export default function Gallery() {
  return (
    <>
      <div className="mb-4 md:mb-0">
        <div className="ps-2 pe-2 md:-mt-16 mt-4 mb-5">
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
