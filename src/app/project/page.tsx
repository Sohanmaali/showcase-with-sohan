import React from "react";
import ProjectCard from "../components/ProjectCard";

const projectDetails = [
  {
    name: "carmucho",
    details:
      "Designed a user-friendly interface for customers to search, filter, and book cars based on availability, location, and preferences.Integrated a real-time chat system using Socket.IO, enabling instant communication between customers and car owners.Designed an intuitive chat interface with features like typing indicators, read receipts, and user-specific onversations. ",
    technology: ["Nest", "Next", "MongoDB"],
    image: "/assets/images/carmucho.png",
    url: "https://carmucho.com/",
  },
  {
    name: "scrapify",
    details:
      "Designed a user-friendly interface for customers to search, filter, and book cars based on availability, location, and preferences.Integrated a real-time chat system using Socket.IO, enabling instant communication between customers and car owners.Designed an intuitive chat interface with features like typing indicators, read receipts, and user-specific onversations.",
    technology: ["Nest", "Next", "MongoDB"],
    image: "/assets/images/scrapify.png",
    url: "https://scrapify-livb.onrender.com/",
  },
  {
    name: "AOK",
    details:
      "Designed a user-friendly interface for customers to search, filter, and book cars based on availability, location, and preferences.Integrated a real-time chat system using Socket.IO, enabling instant communication between customers and car owners.Designed an intuitive chat interface with features like typing indicators, read receipts, and user-specific onversations.",
    technology: ["Nest", "React", "Mongodb"],
    image: "/assets/images/aok.png",
    url: "https://aok-ui.onrender.com",
  },
];

export default function Project() {
  return (
    <div>
      <div className="mb-4 md:mb-0">
        <div className="ps-6 pe-6 md:-mt-16 mt-4 mb-5">
          <h1 className="text-3xl font-bold text-white">Projects</h1>
          <div className="w-12 h-1 bg-yellow-500 my-2"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-4">
            {projectDetails.map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
