"use client";
import { useRef, useState, useEffect } from "react";
import TeacherCard from "./TeacherCard";
// import TeacherCard from "./TeacherCard";

const teacherDetails = [
  {
    image: "/assets/teacher/vaibhav_sir.jpg",
    name: "Vaibhav sir",
    about:
      "Amidst books, laughter, and endless dreams, Teachers' guidance,like a gentle stream. Their dedication, a beacon so bright,illuminates our futures shining light.",
  },
  {
    image: "/assets/teacher/pawan_sir.jpg",
    name: "Pawan sir",
    about:
      "Under the mentorship of Pawan Sahu Sir, a Java expert, honed skills in Java programming with a meticulous and insightful approach. Pawan's commitment to excellence and expertise in navigating Java complexities contributed significantly to a deeper understanding of robust and scalable solutions.",
  },
  {
    image: "/assets/teacher/gourav_sir.jpg",
    name: "Gourav sir",
    about:
      "Gourav Kothari Sir, my Frontend Technology trainer, is a masterful guide, blending expertise with passion to create a beautiful learning journey through the intricate world of web development. His teachings transform code into a harmonious masterpiece, making the complex dance of HTML, CSS, and JavaScript a captivating art form.",
  },
  {
    image: "/assets/teacher/ayush_sir.jpeg",
    name: "Ayush Sir",
    about:
      "Managed by Ayush Rajput Sir, a seasoned and dynamic manager known for fostering a collaborative and goal-driven work environment. Under his leadership, gained valuable insights into project management, team coordination, and strategic decision-making. Ayush's mentorship has contributed to the development of effective problem-solving skills and a results-oriented mindset. His managerial guidance has been instrumental in achieving project milestones and maintaining a high standard of work efficiency.",
  },
];

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
        {teacherDetails.map((teacher, index) => (
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
