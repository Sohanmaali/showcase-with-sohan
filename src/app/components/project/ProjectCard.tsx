import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Project {
  name: string;
  details: string;
  technology: string[];
  image: string;
  url: string;
}

const projectDetails = [
  {
    name: "carmucho",
    details:
      "Developed a user-friendly car booking platform with advanced search, filters, and location-based availability. Integrated a real-time chat system using Socket.IO with typing indicators, read receipts, and user-specific conversations. Implemented real-time notifications for bookings and messages. Built an admin dashboard to manage inventory, bookings, and customer interactions.",
    technology: ["Nest", "Next", "MongoDB"],
    image: "/assets/images/carmucho.png",
    url: "https://carmucho.com/",
  },
  {
    name: "scrapify",
    details:
      "Developed a full-stack MERN web application to streamline scrap material sales. Implemented user authentication and role-based access control for sellers and admins. Built a dynamic dashboard for managing listings, prices, and transactions. Integrated secure payments, optimized RESTful APIs, and enhanced UX with a responsive design and real-time notifications.",
    technology: ["Nest", "Next", "MongoDB"],
    image: "/assets/images/scrapify.png",
    url: "https://scrapify-livb.onrender.com/",
  },
  {
    name: "AOK",
    details:
      "Developed an online shop management system for efficient inventory, orders, and customer management. Implemented user authentication and role-based access for admins and staff. Integrated secure payment gateways and optimized RESTful APIs for seamless operations. Designed a responsive UI with real-time stock updates, order tracking, and automated notifications for users.",
    technology: ["Nest", "React", "Mongodb"],
    image: "/assets/images/aok.png",
    url: "https://aok-ui.onrender.com",
  },
];

export default function ProjectCard() {
  return (
    <>
      {projectDetails.map((project, index) => (
        <Link href={project.url}>
          <div className=" relative h-72 mt-6  md:w-full rounded-3xl mt-6 flex justify-end flex-col  z-[1] overflow-hidden">
            <div className="h-full w-full ">
              <div className="absolute inset-0">
                <Image
                  src={project?.image}
                  fill
                  alt="logo"
                  className="object-cover w-74 md:w-40 rounded-3xl"
                />
              </div>
            </div>

            <div className="bg-[#282829] group">
              <div className="text-white z-[2] relative w-full flex flex-col bg-[#282829] px-6">
                <div className="h-14 w-full">
                  <h1 className="text-2xl font-bold italic relative group transition-all duration-300">
                    {project?.name}
                    <div className="border-b border-transparent bg-gradient-to-r from-blue-500 to-purple-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                  </h1>
                </div>
              </div>
              <p className="font-nunito block bg-[#282829] text-white font-light px-6 relative h-[0em] group-hover:h-[13em] leading-[1.2em] duration-500 overflow-hidden">
                {project?.details}
                <div className="flex justify-center items-center mt-2 h-fit w-fit gap-[0.5em]">
                  {project?.technology.map((category, index) => (
                    <div
                      key={index}
                      className=" p-1 w-24 text-center rounded-[0.5em] text-white  text-[1em] font-normal group-hover:bg-[#1A1A1A] group-hover:text-white duration-300 "
                    >
                      <p>{category}</p>
                    </div>
                  ))}
                </div>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
