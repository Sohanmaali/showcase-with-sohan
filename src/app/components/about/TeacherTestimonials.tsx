"use client";
import { useRef, useState, useEffect } from "react";
import TeacherCard from "./TeacherCard";
import { teacherTestimonials } from "@/helpers/constFile";
// import TeacherCard from "./TeacherCard";



export default function TeacherTestimonials() {
  const scrollRef: any = useRef(null);
  const trackRef: any = useRef(null);
  const thumbRef = useRef(null);
  const [thumbWidth, setThumbWidth] = useState(0);
  const [thumbPosition, setThumbPosition] = useState(0);

  useEffect(() => {
    if (scrollRef.current && trackRef.current) {
      const { clientWidth, scrollWidth } = scrollRef.current;
      const trackWidth = trackRef.current.clientWidth;

      setThumbWidth((clientWidth / scrollWidth) * trackWidth);
    }
  }, []);

  const handleScroll = () => {
    if (scrollRef.current && trackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const trackWidth = trackRef.current.clientWidth;

      setThumbPosition(
        (scrollLeft / (scrollWidth - clientWidth)) * (trackWidth - thumbWidth)
      );
    }
  };

  const handleThumbDrag = (e: any) => {
    if (!scrollRef.current || !trackRef.current) return;

    const trackLeft = trackRef.current.getBoundingClientRect().left;
    const newThumbPos = Math.min(
      Math.max(e.clientX - trackLeft - thumbWidth / 2, 0),
      trackRef.current.clientWidth - thumbWidth
    );

    setThumbPosition(newThumbPos);

    const scrollLeft =
      (newThumbPos / (trackRef.current.clientWidth - thumbWidth)) *
      (scrollRef.current.scrollWidth - scrollRef.current.clientWidth);

    scrollRef.current.scrollLeft = scrollLeft;
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-2 ">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex w-full overflow-x-auto px-2 scrollbar-hide scroll-smooth snap-x snap-mandatory  gap-6"
      >
        {teacherTestimonials.map((teacher, index) => (
          <div
            key={index}
            className={`snap-start md:w-full  border-gray-200 rounded-lg  `}
          >
            <TeacherCard teacher={teacher} />
          </div>
        ))}
      </div>

      <div
        ref={trackRef}
        className="relative md:w-1/2  mt-2 h-2 bg-gray-300 rounded-full mx-3 md:mx-auto"
      >
        <div
          ref={thumbRef}
          className="h-full bg-[#FFDB70] rounded-full cursor-pointer"
          style={{
            width: `${thumbWidth}px`,
            transform: `translateX(${thumbPosition}px)`,
          }}
          onMouseDown={(e) => {
            document.addEventListener("mousemove", handleThumbDrag);
            document.addEventListener("mouseup", () => {
              document.removeEventListener("mousemove", handleThumbDrag);
            });
          }}
        ></div>
      </div>
    </div>
  );
}
