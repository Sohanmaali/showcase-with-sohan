import React from "react";
import EventCard from "../EventCard";

const foduuEvent = [
  {
    eventName: "Shree ganesh chaturthi",
    images: [
      "/assets/images/foduu/ganesh_chaturthi/IMG_20240907_204655_0905.jpg",
      "/assets/images/foduu/ganesh_chaturthi/IMG_20240907_204657_0283.jpg",
      "/assets/images/foduu/ganesh_chaturthi/IMG_20240907_204700_0080.jpg",
      "/assets/images/foduu/ganesh_chaturthi/IMG_20240908_102603.jpg",
      "/assets/images/foduu/ganesh_chaturthi/IMG_20240908_102619.jpg",
    ],
  },
  {
    eventName: "Dipawali",
    images: [
      "/assets/images/foduu/dipawali/1729874714606.jpg",
      "/assets/images/foduu/dipawali/IMG-20241026-WA0001.jpg",
      "/assets/images/foduu/dipawali/IMG-20241026-WA0005.jpg",
      "/assets/images/foduu/dipawali/IMG-20241026-WA0015.jpg",
      "/assets/images/foduu/dipawali/IMG-20241026-WA0019.jpg",
      "/assets/images/foduu/dipawali/IMG-20241026-WA0022.jpg",
      "/assets/images/foduu/dipawali/IMG-20241113-WA0005.jpg",
      "/assets/images/foduu/dipawali/IMG-20241113-WA0007.jpg",
    ],
  },
  {
    eventName: "Birthday",
    images: [
      "/assets/images/foduu/barthday/IMG-20250207-WA0001.jpg",
      "/assets/images/foduu/barthday/IMG-20250207-WA0019.jpg",
      "/assets/images/foduu/barthday/IMG-20250207-WA0013.jpg",
      "/assets/images/foduu/barthday/IMG-20250207-WA0035.jpg",
    ],
  },
];
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
