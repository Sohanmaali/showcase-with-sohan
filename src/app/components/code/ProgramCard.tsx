"use client";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaCopy } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { copyToClipboard, handleDownload } from "@/helpers/HelperFunction";
import { programQuestions } from "@/helpers/constFile";

const ProgramCard = () => {
  const [showTooltip, setShowTooltip] = useState<any>(null);
  const [downloadTooltip, setDownloadTooltip] = useState<any>(null);
  const [showSolution, setShowSolution] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [openItems, setOpenItems] = useState<any>({}); // Store expanded states in an object
  const itemsPerPage = 10;

  const totalPages = Math.ceil(programQuestions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, programQuestions.length); // Prevents out-of-bounds
  const currentItems = programQuestions.slice(startIndex, endIndex);

  const toggleOpen = (index: number) => {
    setOpenItems((prev: any) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <>
      {currentItems.length > 0 &&
        currentItems.map((code, index) => {
          const itemIndex = startIndex + index;
          return (
            <div
              key={itemIndex}
              className="w-full bg-gray-900 text-white shadow-lg rounded-lg border border-gray-700"
            >
              <div className="flex items-center justify-between space-x-3 rounded-lg border-b border-gray-700 p-4 bg-gray-800 ">
                <div
                  className="flex items-center space-x-3 cursor-pointer "
                  onClick={() => toggleOpen(itemIndex)}
                >
                  <span className="text-[#EAB308] text-lg">📄</span>
                  <h2 className="text-lg font-semibold">{code?.question}</h2>
                </div>

                <span className="text-[#EAB308] flex items-center gap-2 transition-all duration-700 ease-in-out relative">
                  <span className="relative group">
                    <IoCloudDownloadOutline
                      onMouseEnter={() => setDownloadTooltip(itemIndex)}
                      onMouseLeave={() => setDownloadTooltip(null)}
                      onClick={() =>
                        handleDownload(
                          `${code?.question}\n${code?.solution}`,
                          `${code?.question}`
                        )
                      }
                    />
                    {downloadTooltip === itemIndex && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out mb-2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg min-w-max max-w-xs">
                        Download File
                        <div className="absolute w-2 h-2 bg-gray-900 rotate-45 top-full left-1/2 transform -translate-x-1/2"></div>
                      </div>
                    )}
                  </span>

                  <span className="relative">
                    <FaCopy
                      className="ml-2 cursor-pointer"
                      onClick={() =>
                        copyToClipboard(`${code?.question}\n${code?.solution}`)
                      }
                      onMouseEnter={() => setShowTooltip(itemIndex)}
                      onMouseLeave={() => setShowTooltip(null)}
                    />
                    {showTooltip === itemIndex && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg transition-opacity duration-300 whitespace-nowrap">
                        Copy to clipboard
                        <div className="absolute w-2 h-2 bg-gray-900 rotate-45 top-full left-1/2 transform -translate-x-1/2"></div>
                      </div>
                    )}
                  </span>
                  <span className="relative">
                    <IoIosArrowDropdown
                      className={`text-2xl cursor-pointer transform transition-transform ${
                        openItems[itemIndex] ? "rotate-180" : ""
                      }`}
                      onMouseEnter={() => setShowSolution(itemIndex)}
                      onMouseLeave={() => setShowSolution(null)}
                      onClick={() => toggleOpen(itemIndex)}
                    />
                    {showSolution === itemIndex && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg transition-opacity duration-300 whitespace-nowrap">
                        {openItems[itemIndex] ? "Hide" : "Show"} Solution
                        <div className="absolute w-2 h-2 bg-gray-900 rotate-45 top-full left-1/2 transform -translate-x-1/2"></div>
                      </div>
                    )}
                  </span>
                </span>
              </div>
              {openItems[itemIndex] && (
                <pre className="p-4 bg-gray-800 text-yellow-400 max-h-60 overflow-y-auto scrollbar-hide">
                  {`Solution -> `} {code?.solution}
                </pre>
              )}
            </div>
          );
        })}
      <div className="flex justify-center items-center mt-4 space-x-4">
        <button
          className={`px-3 py-1 text-white bg-gray-800 rounded-md ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-900"
          }`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
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
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ProgramCard;
