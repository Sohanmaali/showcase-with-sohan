"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function ImageSlider() {
  const [sliderData, setSliderData] = useState([
    "https://portfoliogallary.onrender.com/assets/gallary/slider/slider3.png",
    "https://portfoliogallary.onrender.com/assets/gallary/slider/slider2.png",
    "https://portfoliogallary.onrender.com/assets/gallary/slider/sliderimg1.jpg",
  ]);
  const swiperRef = useRef<any>(null); // Typed as 'any' for Swiper instance
  const prevRef = useRef<any>(null);
  const nextRef = useRef<any>(null);

  // Ensure that Swiper is fully initialized and refs are set
  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      if (swiperInstance) {
        swiperInstance.params.navigation.prevEl = prevRef.current;
        swiperInstance.params.navigation.nextEl = nextRef.current;
        swiperInstance.navigation.init();
        swiperInstance.navigation.update();
      }
    }
  }, [sliderData]); // Trigger only when sliderData has been loaded.

  return (
    <div className="relative">
      <button
        ref={prevRef}
        className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2  text-relatedWhite hover:bg-mutedColor p-3 "
      >
        <GrFormPrevious className="text-2xl font-semibold" />
      </button>
      <button
        ref={nextRef}
        className="absolute top-1/2 right-4 z-10  text-relatedWhite hover:bg-mutedColor p-3  transform -translate-y-1/2"
      >
        <GrFormNext className="text-2xl font-semibold" />
      </button>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper: any) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {sliderData.length > 0 &&
          sliderData.map((slider: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={`${slider}`}
                  alt={`slider ${index + 1}`}
                  className="w-full h-60 sm:h-60 md:h-80 object-fill"
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
