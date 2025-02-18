import { useEffect, useRef } from "react";
import Image from "next/image";

export default function TeacherModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: any;
  setIsOpen: (isOpen: any) => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(null);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div
          ref={modalRef}
          className="bg-[#1E1E1F] rounded-3xl shadow-xl max-w-2xl w-full relative"
        >
          <button
            onClick={(e) => {
              e.stopPropagation(); 
              console.log("Close button clicked"); 
              setIsOpen(null);
            }}
            className="absolute right-4 top-4 text-3xl text-gray-500 hover:text-gray-700 transition-colors bg-[#272728] rounded-lg p-1"
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
                src={isOpen?.image}
                alt="Sohan Maali"
                width={100}
                height={100}
                className="rounded-2xl object-cover"
              />
              <div>
                <h1 className="text-2xl font-bold text-white whitespace-nowrap">
                  {isOpen?.name}
                </h1>
                <p className="text-white italic leading-relaxed whitespace-pre-line mt-3">
                 {isOpen?.about}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
