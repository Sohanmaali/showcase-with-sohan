import React from "react";
import EventCard from "../EventCard";
import { foduuEvent } from "@/helpers/constFile";

export default function FoduuEvent() {
  return (
    <>
      {foduuEvent?.map((event, index) => (
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
              <EventCard image={image} key={imgIndex} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
