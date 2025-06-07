import React from "react";

interface paginationProp {
  currentPage: number;
  totalPages: number;
  setCurrentPage: any;
}

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: paginationProp) {
  return (
    <>
      <div className="flex justify-center items-center mt-4 space-x-4">
        <button
          className={`px-3 py-1 text-white bg-gray-800 rounded-md ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-900"
          }`}
          onClick={() =>
            setCurrentPage((prev: number) => Math.max(prev - 1, 1))
          }
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <span className="font-semibold text-white">
          {currentPage} / {totalPages}
        </span>

        <button
          className={`px-3 py-1 text-white bg-gray-800 rounded-md ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-900"
          }`}
          onClick={() =>
            setCurrentPage((prev: number) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}
