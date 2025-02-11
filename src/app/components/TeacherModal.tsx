// import { useState } from 'react';

import Image from "next/image";

export default function TeacherModal({ isOpen, setIsOpen }: any) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#1E1E1F]  rounded-3xl shadow-xl max-w-2xl w-full relative">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="p-8">
          <div className="flex items-center gap-8">
            <Image
              src="/assets/images/sohan.jpg"
              alt="Sohan Maali"
              width={100}
              height={100}
              className="rounded-2xl object-cover"
            />
            <div>
              <h1 className="text-2xl font-bold text-white whitespace-nowrap">
                Vaibhav Sir
              </h1>
              <p className="text-white italic leading-relaxed whitespace-pre-line">
                Amidst books, laughter, and endless dreams, Teachers' guidance,
                like a gentle stream. Their dedication, a beacon so bright,
                Illuminates our futures shining light.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
