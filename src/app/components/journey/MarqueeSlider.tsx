// "use client";
// import Image from "next/image";

// const images = [
//   "https://portfoliogallary.onrender.com/assets/gallary/slider/slider3.png",
//   "https://portfoliogallary.onrender.com/assets/gallary/slider/slider2.png",
//   "https://portfoliogallary.onrender.com/assets/gallary/slider/sliderimg1.jpg",
// ];

// const MarqueeSlider = () => {
//   return (
//     <div className=" text-white py-6 overflow-hidden">
//       {/* First Marquee (Right to Left) */}
//       <div className="overflow-hidden flex gap-4 skew-y-[-3deg]">
//         <div className="flex shrink-0 items-center justify-around h-60 gap-8 min-w-full animate-marquee-right ">
//           {images.concat(images).map((src, index) => (
//             <div key={index} className="min-w-[150px] ">
//               <Image
//                 src={src}
//                 alt="Coding"
//                 width={50}
//                 height={50}
//                 className="h-60 w-60 object-cover rounded-2xl"
//               />
//              </div>
//           ))}
//         </div>
//       </div>

//       {/* Running One Year Text */}
//       <div className="mt-8 text-center text-lg text-yellow-400 font-semibold ">
//         <div className="border-t border-yellow-400 mx-auto skew-y-[-3deg]"></div>
//         {/* Running One Year Text - Slower Animation */}
//         <div className="overflow-hidden flex skew-y-[-3deg] ">
//           <div className="flex shrink-0 items-center justify-around h-12 gap-4 min-w-full animate-text-marquee">
//             Running one year with code
//           </div>
//         </div>

//         <div className="border-b border-yellow-400 mx-auto mt-2 skew-y-[-3deg]"></div>
//       </div>

//       {/* Second Marquee (Left to Right) */}
//       <div className="overflow-hidden flex gap-4 mt-8 skew-y-[-3deg]">
//         <div className="flex shrink-0 items-center justify-around h-60 gap-8 min-w-full animate-marquee-left">
//         {images.concat(images).map((src, index) => (
//             <div key={index} className="min-w-[150px] ">
//               <Image
//                 src={src}
//                 alt="Coding"
//                 width={50}
//                 height={50}
//                 className="h-60 w-60 object-cover rounded-2xl"
//               />
//              </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MarqueeSlider;
"use client";
import Image from "next/image";

const images = [
  "https://portfoliogallary.onrender.com/assets/gallary/slider/slider3.png",
  "https://portfoliogallary.onrender.com/assets/gallary/slider/slider2.png",
  "https://portfoliogallary.onrender.com/assets/gallary/slider/sliderimg1.jpg",
];

const MarqueeSlider = () => {
  return (
    <div className="text-white py-6 overflow-hidden">
      {/* First Marquee (Right to Left) */}
      <div className="relative w-full overflow-hidden skew-y-[-3deg]">
        <div className="flex gap-4  animate-marquee">
          {[...images, ...images].map((src, index) => (
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
        <div className="mx-auto mt-2 skew-y-[-3deg] bg-gradient-to-l from-yellow-400 via-orange-400 to-red-400 border-1 border-transparent p-[2px]">
          <div className="w-full  bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"></div>
        </div>{" "}
        <div className="overflow-hidden flex skew-y-[-3deg]">
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
        <div className="mx-auto mt-2 skew-y-[-3deg] bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 border-1 border-transparent p-[2px]">
          <div className="w-full  bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"></div>
        </div>
      </div>

      {/* Second Marquee (Left to Right) */}
      <div className="relative w-full overflow-hidden mt-8 skew-y-[-3deg]">
        <div className="flex gap-4  animate-marquee-reverse">
          {[...images, ...images].map((src, index) => (
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
