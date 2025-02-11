"use client";
import Image from "next/image";
import Modal from "./TeacherModal";
import { useState } from "react";

const TeacherCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    /* From Uiverse.io by Manish-Tamang */
    <div
      className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mx-auto"
      onClick={() => setIsModalOpen(true)}
    >
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex space-x-4">
          <div className="">
            <svg
              className="rounded-full bg-yellow-400"
              height="48"
              width="48"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            ></svg>
          </div>
          <div>
            <div className="text-lg font-bold dark:text-white">Manish Gole</div>
            <div className="text-sm text-gray-500 dark:text-gray-200">
              @manishgole
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="text-sm text-gray-800 dark:text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          pellentesque id erat at blandit. Donec ullamcorper turpis vitae dolor
          lacinia mollis. Donec at augue eget ipsum porttitor interdum.
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        setIsOpen={() => setIsModalOpen(false)}
        // name="Vaibhav Sir"
        // image="/profile.jpg" // Change this path accordingly
        // description="Amidst books, laughter, and endless dreams, Teachers' guidance, like a gentle stream. Their dedication, a beacon so bright, illuminates our futures' shining light."
      />
    </div>
  );
};

export default TeacherCard;
