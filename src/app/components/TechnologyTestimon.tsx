"use client";
import { useRef, useState, useEffect } from "react";
import TeacherCard from "./TeacherCard";
import Image from "next/image";

export default function TechnologyTestimonials() {
  const scrollRef: any = useRef(null);
  const trackRef: any = useRef(null);
  const thumbRef = useRef(null);
  const [thumbWidth, setThumbWidth] = useState(0);
  const [thumbPosition, setThumbPosition] = useState(0);

  useEffect(() => {
    if (scrollRef.current && trackRef.current) {
      const { clientWidth, scrollWidth } = scrollRef.current;
      const trackWidth = trackRef.current.clientWidth;

      // Calculate scrollbar thumb width (based on visible area)
      setThumbWidth((clientWidth / scrollWidth) * trackWidth);
    }
  }, []);

  // Sync scrollbar with card container
  const handleScroll = () => {
    if (scrollRef.current && trackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const trackWidth = trackRef.current.clientWidth;

      // Calculate new thumb position
      setThumbPosition(
        (scrollLeft / (scrollWidth - clientWidth)) * (trackWidth - thumbWidth)
      );
    }
  };

  // Scroll card container when scrollbar is dragged
  const handleThumbDrag = (e:any) => {
    if (!scrollRef.current || !trackRef.current) return;

    const trackLeft = trackRef.current.getBoundingClientRect().left;
    const newThumbPos = Math.min(
      Math.max(e.clientX - trackLeft - thumbWidth / 2, 0),
      trackRef.current.clientWidth - thumbWidth
    );

    setThumbPosition(newThumbPos);

    // Convert thumb position to scroll position
    const scrollLeft =
      (newThumbPos / (trackRef.current.clientWidth - thumbWidth)) *
      (scrollRef.current.scrollWidth - scrollRef.current.clientWidth);

    scrollRef.current.scrollLeft = scrollLeft;
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto py-2 ">
      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex  w-full overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pl-5 "
      >
        {[
          {
            name: "JavaScript",
            url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          },
          {
            name: "React",
            url: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
          },
          {
            name: "JavaScript",
            url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          },
          {
            name: "Node.js",
            url: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
          },
          {
            name: "JavaScript",
            url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          },
          {
            name: "MongoDB",
            url: "https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg",
          },
          {
            name: "JavaScript",
            url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
          },
          {
            name: "NestJS",
            url: "https://docs.nestjs.com/assets/logo-small.svg",
          },
        ].map((_, index) => (
          <div
            key={index}
            className={`snap-start   ${index === 0 ? "-ml-5" : ""}`}
          >
            <div className="flex justify-center items-center h-40 px-4">
              <div className="relative text-white rounded-2xl shadow-lg w-32 md:w-42">
                <div className="mt-2 flex justify-center">
                  <Image
                    width={100}
                    height={100}
                    src={_.url}
                    alt="Profile"
                    className="w-24 h-24 object-contain "
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Scrollbar (50% width) */}
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
