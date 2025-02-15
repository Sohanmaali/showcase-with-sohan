"use client";
import Image from "next/image";

const images = [
  "https://portfoliogallary.onrender.com/assets/gallary/slider/slider3.png",
  "https://portfoliogallary.onrender.com/assets/gallary/slider/slider2.png",
  "https://portfoliogallary.onrender.com/assets/gallary/slider/sliderimg1.jpg",
];

const MarqueeSlider = () => {
  return (
    <div className="bg-gray-900 text-white py-6 overflow-hidden">
      {/* First Marquee (Right to Left) */}
      <div className="overflow-hidden flex gap-4 skew-y-[-3deg]">
        <div className="flex shrink-0 items-center justify-around h-24 gap-4 min-w-full animate-marquee-right">
          {images.concat(images).map((src, index) => (
            <div key={index} className="min-w-[150px]">
              <Image
                src={src}
                alt="Coding"
                width={100}
                height={100}
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Running One Year Text */}
      <div className="mt-6 text-center text-lg text-yellow-400 font-semibold">
        <div className="border-t border-yellow-400 mx-auto skew-y-[-3deg]"></div>
        {/* Running One Year Text - Slower Animation */}
        <div className="overflow-hidden flex skew-y-[-3deg]">
          <div className="flex shrink-0 items-center justify-around h-12 gap-4 min-w-full animate-text-marquee">
            Running one year with code
          </div>
        </div>

        <div className="border-b border-yellow-400 mx-auto mt-2 skew-y-[-3deg]"></div>
      </div>

      {/* Second Marquee (Left to Right) */}
      <div className="overflow-hidden flex gap-4 skew-y-[-3deg]">
        <div className="flex shrink-0 items-center justify-around h-24 gap-4 min-w-full animate-marquee-left">
          {images.concat(images).map((src, index) => (
            <div key={index} className="min-w-[150px]">
              <Image
                src={src}
                alt="Coding"
                width={100}
                height={100}
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSlider;
