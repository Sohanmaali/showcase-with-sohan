"use client";

import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaCopy } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { copyToClipboard, handleDownload } from "@/helpers/HelperFunction";
import { programQuestions } from "@/helpers/constFile";
import Pagination from "../Pagination";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const ProgramCard = () => {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});
  const [openFiles, setOpenFiles] = useState<Record<string, boolean>>({});
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [downloadTooltip, setDownloadTooltip] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const customStyle = {
    background: "#1E1E1E", // Change this to your preferred background color
    padding: "1rem",
    borderRadius: "0.375rem",
  };

  const totalPages = Math.ceil(programQuestions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, programQuestions.length);
  const currentItems = programQuestions.slice(startIndex, endIndex);

  // Toggle folder open/close state
  const toggleFolder = (folderKey: string) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderKey]: !prev[folderKey],
    }));
  };

  const toggleFile = (fileKey: string) => {
    setOpenFiles((prev) => ({
      ...prev,
      [fileKey]: !prev[fileKey],
    }));
  };

  const renderItems = (items: any[], parentKey = "") => {
    return items.map((item, index) => {
      const itemKey = `${parentKey}/${index}`;

      // Handle Folders
      if (item.type === "dir") {
        return (
          <div key={itemKey} className="mb-2">
            <div
              className="flex items-center justify-between p-3 mt-2 bg-gray-800 rounded-md "
              
            >
              <span className="font-semibold text-yellow-400 cursor-pointer" onClick={() => toggleFolder(itemKey)}>
                📁 {item.name}
              </span>
              <IoIosArrowDropdown
              onClick={() => toggleFolder(itemKey)}
                className={`text-xl transform transition-transform cursor-pointer duration-300 ease-in-out ${
                  openFolders[itemKey] ? "rotate-180" : ""
                }`}
              />
            </div>

            <div
              className={`pl-5 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
                openFolders[itemKey]
                  ? "max-h-screen opacity-100 transform translate-y-0"
                  : "max-h-0 opacity-0 transform -translate-y-1"
              }`}
            >
              {renderItems(item.files, itemKey)}
            </div>
          </div>
        );
      }

      // Handle Files
      if (item.type === "file" || !item.type) {
        return (
          <div key={itemKey} className="mt-2">
            <div
              className={`${
                openFiles[itemKey]
                  ? "rounded-tl-lg rounded-tr-lg"
                  : "rounded-lg"
              } flex items-center justify-between space-x-3 border-b border-gray-700 p-4 bg-gray-800`}
            >
              <div
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => toggleFile(itemKey)}
              >
                <span className="text-[#EAB308] text-lg">📄</span>
                <h2 className="text-lg font-semibold">{item.name}</h2>
              </div>

              <span className="text-[#EAB308] flex items-center gap-2 transition-all duration-300 ease-in-out relative">
                {/* Download */}
                <span className="relative group">
                  <IoCloudDownloadOutline
                    onMouseEnter={() => setDownloadTooltip(item.name)}
                    onMouseLeave={() => setDownloadTooltip(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(
                        `${item.name}\n${item.solution}`,
                        `${item.name}`
                      );
                    }}
                    className="transition-transform duration-200 hover:scale-110"
                  />
                  <div
                    className={`absolute bottom-full left-1/2 transform -translate-x-1/2 pointer-events-none mb-2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg min-w-max max-w-xs transition-all duration-200 ease-in-out ${
                      downloadTooltip === item.name
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }`}
                  >
                    Download File
                    <div className="absolute w-2 h-2 bg-gray-900 rotate-45 top-full left-1/2 transform -translate-x-1/2"></div>
                  </div>
                </span>

                {/* Copy to Clipboard */}
                <span className="relative group">
                  <FaCopy
                    onMouseEnter={() => setShowTooltip(item.name)}
                    onMouseLeave={() => setShowTooltip(null)}
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard(`${item.name}\n${item.solution}`);
                    }}
                    className="transition-transform duration-200 hover:scale-110"
                  />
                  <div
                    className={`absolute bottom-full left-1/2 transform -translate-x-1/2 pointer-events-none mb-2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg min-w-max max-w-xs transition-all duration-200 ease-in-out ${
                      showTooltip === item.name
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-2"
                    }`}
                  >
                    Copy to clipboard
                    <div className="absolute w-2 h-2 bg-gray-900 rotate-45 top-full left-1/2 transform -translate-x-1/2"></div>
                  </div>
                </span>

                {/* Show/Hide Solution */}
                <span className="relative">
                  <IoIosArrowDropdown
                    className={`text-2xl cursor-pointer transform transition-transform duration-300 ease-in-out ${
                      openFiles[itemKey] ? "rotate-180" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFile(itemKey);
                    }}
                  />
                </span>
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out origin-top bg-[#282829] ${
                openFiles[itemKey]
                  ? "max-h-96 opacity-100 transform scale-y-100"
                  : "max-h-0 opacity-0 transform scale-y-95"
              }`}
            >
              <SyntaxHighlighter
                language="java" // Change this to match your code language
                style={{ ...dracula, hljs: { ...dracula.hljs, background: "#282829" } }} // Apply custom background
   
                // wrapLongLines
                showLineNumbers
                className="p-3 rounded-br-md  rounded-bl-md max-h-96 overflow-y-auto scrollbar-hide"
              >
                {item.solution}
              </SyntaxHighlighter>
            </div>
          </div>
        );
      }

      return null;
    });
  };

  return (
    <div className="w-full mx-auto text-white rounded-lg">
      {renderItems(currentItems)}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default ProgramCard;
