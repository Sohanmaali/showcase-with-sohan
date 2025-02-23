import React from "react";
import EventCard from "../EventCard";

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
export default function InfoBeansEvent() {
  return (
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
              <EventCard image={image} key={imgIndex} />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
