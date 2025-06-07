"use client";
import { leftMarquee, rightMarquee } from "@/helpers/constFile";
import Image from "next/image";



const MarqueeSlider = () => {
  return (
    <div className="text-white py-6 overflow-hidden">
      {/* First Marquee (Right to Left) */}
      <div className="relative w-full overflow-hidden skew-y-[-5deg]">
        <div className="flex gap-4 animate-marquee">
          {[...leftMarquee,...leftMarquee].map((src, index) => (
            <div key={index} className="w-60 shrink-0">
              <Image
                src={src}
                alt="Coding"
                width={240}
                height={240}
                className="h-60 w-60 object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center text-lg font-semibold">
        <div className="mx-auto mt-2 skew-y-[-5deg] bg-gradient-to-l from-yellow-400 via-orange-400 to-red-400 border-1 border-transparent p-[2px]">
          <div className="w-full  bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"></div>
        </div>{" "}
        <div className="overflow-hidden flex skew-y-[-5deg]">
          <div className="relative w-full overflow-hidden py-4">
            <div className="marquee">
              <div className="track animate-text-marquee flex gap-x-6">
                {[...Array(2)].map((_, i) => (
                  <div className="shrink-0 flex px-32 " key={i}>
                    <span
                      // key={i}
                      className="text-2xl font-semibold mx-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent "
                    >
                      Running one year with code &bull;
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-2 skew-y-[-5deg] bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 border-1 border-transparent p-[2px]">
          <div className="w-full  bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"></div>
        </div>
      </div>

      {/* Second Marquee (Left to Right) */}
      <div className="relative w-full overflow-hidden mt-8 skew-y-[-5deg]">
        <div className="flex gap-4  animate-marquee-reverse">
          {[...rightMarquee,...rightMarquee].map((src, index) => (
            <div key={index} className="w-60 shrink-0">
              <Image
                src={src}
                alt="Coding"
                width={240}
                height={240}
                className="h-60 w-60 object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSlider;
