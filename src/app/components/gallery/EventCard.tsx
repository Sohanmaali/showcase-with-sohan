import { useState } from "react";
import Image from "next/image";

export default function EventCard({ image }: { image: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div 
        className="bg-white border border-gray-200 rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
        onClick={openModal}
      >
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={image}
            width={400}
            height={240}
            alt="Event image"
            className="rounded-2xl w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <button 
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt="Event image fullscreen"
                width={2000}
                height={1000}
                className="w-full h-full max-h-[100vh] object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
