"use client";
import Image from "next/image";
import Modal from "./TeacherModal";
import { useState } from "react";

const TeacherCard = ({ teacher }: any) => {
  const [isModalOpen, setIsModalOpen] = useState<any>(null);

  return (
    <>
      <div
        className="flex justify-center items-center h-44 px-3  cursor-pointer"
        onClick={() => setIsModalOpen(teacher)}
      >
        <div className="relative bg-[#222224] text-white p-6 rounded-2xl shadow-lg w-80 md:w-[27rem]">
          {/* Profile Image */}
          <div className="absolute -top-6 ">
            <img
              src={teacher?.image}
              alt="Profile"
              className="w-14 h-14 rounded-2xl border-2 border-gray-700 shadow-md"
            />
          </div>

          {/* Card Content */}
          <div className="mt-2">
            <h2 className="text-lg font-bold text-center">{teacher?.name}</h2>
            <p className="text-gray-300 text-sm mt-1 line-clamp-2">
              {teacher?.about?.slice(0,100)} <span className="text-blue-500">Read More...</span>
            </p>
          </div>
        </div>

        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      </div>
    </>
  );
};

export default TeacherCard;
