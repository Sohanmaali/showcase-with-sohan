import React from "react";
import FlipCard from "./FlipCard";
const journey = [
  {
    step: 1,
    title: "💡Embrace Lifelong Learning",
    image:"/assets/images/sohan.jpg",
    details:
      "Stay curious and open to new ideas. Every challenge is an opportunity to grow. Keep learning, keep evolving, and never stop exploring new skills.",
  },
  {
    step: 2,
    title: "💬 Communicate with Clarity",
    image:"/assets/images/sohan.jpg",
    details:
      "Listen actively and express yourself clearly. Meaningful conversations build trust and deepen relationships. Choose your words wisely and speak with intention.",
  },
  {
    step: 3,
    title: "🚀 Take Action, Not Just Plans",
    image:"/assets/images/sohan.jpg",
    details:
      "Dreams remain dreams without action. Start small, stay consistent, and take deliberate steps toward your goals every day. Progress is built one step at a time.",
  },
];

export default function OneYearJourney() {
  return (
    <div>
      <div className="my-10  text-[#9191A1] flex flex-col md:flex-row gap-10 items-center justify-center">
        {journey.map((item, index) => (
          <FlipCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
