"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useRef } from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { gallerySlider } from "@/helpers/constFile";

export default function ImageSlider() {
  const swiperRef = useRef<any>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

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
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Previous Button */}
      <button
        ref={prevRef}
        className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 p-2 rounded-full shadow-md hover:bg-gray-300 transition"
      >
        <GrFormPrevious className="text-3xl text-gray-700" />
      </button>

      {/* Next Button */}
      <button
        ref={nextRef}
        className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 p-2 rounded-full shadow-md hover:bg-gray-300 transition"
      >
        <GrFormNext className="text-3xl text-gray-700" />
      </button>

      {/* Swiper Slider */}
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        pagination={{ clickable: true, dynamicBullets: true }}
        className="rounded-lg overflow-hidden"
      >
        {gallerySlider.map((image: string, index: number) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-60 md:h-80 object-fit rounded-md"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
