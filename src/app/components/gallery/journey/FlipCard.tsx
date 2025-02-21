import Image from "next/image";
import React from "react";

export default function FlipCard({ data }: any) {
  return (
    <>
      <div className="group perspective-1000 w-60 h-72 flip-card">
        <div className="flip-card-inner relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
          {/* Front Side */}
          <div className="flip-card-front absolute inset-0 flex flex-col justify-center items-center rounded-2xl bg-[#2B2B2C] backface-hidden rounded-2xl bg-[#2B2B2C] border-s border-t ">
            <Image
              src={data.image}
              height={100}
              width={100}
              className="h-40 w-40 rounded-full"
              alt="image"
            />
            <div className="text-white mt-2">STEP {data.step}</div>
            <div className="text-white mt-2">{data.title}</div>
          </div>

          {/* Back Side */}
          <div className=" flip-card-back absolute inset-0 flex flex-col justify-center p-4 rounded-2xl bg-[#2B2B2C] transform rotate-y-180 backface-hidden rounded-2xl bg-[#2B2B2C]  border-s border-t">
            <p className="text-center text-white text-sm">
              {data.details}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
