"use client";

import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { FaCopy } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { copyToClipboard, handleDownload } from "@/helpers/HelperFunction";
import { programQuestions } from "@/helpers/constFile";
import Pagination from "../Pagination";

const ProgramCard = () => {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({});
  const [openFiles, setOpenFiles] = useState<Record<string, boolean>>({});
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [downloadTooltip, setDownloadTooltip] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

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

  // Recursive function to render nested folders and files
  const renderItems = (items: any[], parentKey = "") => {
    return items.map((item, index) => {
      const itemKey = `${parentKey}/${item.name}`;

      // Handle Folders
      if (item.type === "dir") {
        return (
          <div key={itemKey} className="mb-4">
            <div
              className="flex items-center justify-between p-3  mt-2 bg-gray-800 rounded-md cursor-pointer"
              onClick={() => toggleFolder(itemKey)}
            >
              <span className="font-semibold text-yellow-400">
                📁 {item.name}
              </span>
              <IoIosArrowDropdown
                className={`text-xl transform transition-transform ${
                  openFolders[itemKey] ? "rotate-180" : ""
                }`}
              />
            </div>

            {openFolders[itemKey] && (
              <div className="pl-5 mt-2">
                {renderItems(item.files, itemKey)}
              </div>
            )}
          </div>
        );
      }

      // Handle Files
      if (item.type === "file" || !item.type) {
        return (
          <div key={itemKey} className="mt-2">
            <div className="flex items-center justify-between space-x-3 rounded-lg border-b border-gray-700 p-4 bg-gray-800">
              <div
                className="flex items-center space-x-3 cursor-pointer"
                onClick={() => toggleFile(itemKey)}
              >
                <span className="text-[#EAB308] text-lg">📄</span>
                <h2 className="text-lg font-semibold">{item.name}</h2>
              </div>

              <span className="text-[#EAB308] flex items-center gap-2 transition-all duration-700 ease-in-out relative">
                {/* Download */}
                <span className="relative group">
                  <IoCloudDownloadOutline
                    onMouseEnter={() => setDownloadTooltip(item.name)}
                    onMouseLeave={() => setDownloadTooltip(null)}
                    onClick={() =>
                      handleDownload(
                        `${item.name}\n${item.solution}`,
                        `${item.name}`
                      )
                    }
                  />
                  {downloadTooltip === item.name && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out mb-2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg min-w-max max-w-xs">
                      Download File
                      <div className="absolute w-2 h-2 bg-gray-900 rotate-45 top-full left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  )}
                </span>

                {/* Copy to Clipboard */}
                <span className="relative group">
                  <FaCopy
                    onMouseEnter={() => setShowTooltip(item.name)}
                    onMouseLeave={() => setShowTooltip(null)}
                    onClick={() =>
                      copyToClipboard(`${item.name}\n${item.solution}`)
                    }
                  />
                  {showTooltip === item.name && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out mb-2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg min-w-max max-w-xs">
                      Copy to clipboard
                      <div className="absolute w-2 h-2 bg-gray-900 rotate-45 top-full left-1/2 transform -translate-x-1/2"></div>
                    </div>
                  )}
                </span>

                {/* Show/Hide Solution */}
                <span className="relative group">
                  <IoIosArrowDropdown
                    className={`text-2xl cursor-pointer transform transition-transform ${
                      openFiles[itemKey] ? "rotate-180" : ""
                    }`}
                    onClick={() => toggleFile(itemKey)}
                  />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out mb-2 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-lg min-w-max max-w-xs">
                    {openFiles[itemKey] ? "Hide" : "Show"} Solution
                    <div className="absolute w-2 h-2 bg-gray-900 rotate-45 top-full left-1/2 transform -translate-x-1/2"></div>
                  </div>
                </span>
              </span>
            </div>

            {openFiles[itemKey] && (
              <pre className="p-3 bg-gray-800 text-yellow-400 rounded-md mt-2 max-h-60 overflow-y-auto scrollbar-hide">
                {item.solution}
              </pre>
            )}
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
