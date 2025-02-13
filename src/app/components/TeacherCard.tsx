"use client";
import Image from "next/image";
import Modal from "./TeacherModal";
import { useState } from "react";

const TeacherCard = ({ value }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="flex justify-center items-center h-44 px-4 md:px-8 cursor-pointer"
      onClick={() => setIsModalOpen(true)}
    >
      <div className="relative bg-gray-800 text-white p-6 rounded-2xl shadow-lg w-80 md:w-96">
        {/* Profile Image */}
        <div className="absolute -top-6 ">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Profile"
            className="w-14 h-14 rounded-2xl border-2 border-gray-700 shadow-md"
          />
        </div>

        {/* Card Content */}
        <div className="mt-2">
          <h2 className="text-lg font-bold text-center">Vaibhav Sir</h2>
          <p className="text-gray-300 text-sm mt-1 line-clamp-2">
            Amidst books, laughter, and endless dreams, Teachers' guidance, like
            a gentle stream. Their dedication...
          </p>
        </div>
      </div>

      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
};

export default TeacherCard;
