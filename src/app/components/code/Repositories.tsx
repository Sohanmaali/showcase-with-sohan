"use client";

import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { repositories } from "@/helpers/constFile";
import Pagination from "../Pagination";
import { FaExternalLinkAlt, FaGithub, FaLink } from "react-icons/fa";
import Link from "next/link";

const Repositories = () => {
  const [openFiles, setOpenFiles] = useState<Record<string, boolean>>({});
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(repositories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, repositories.length);
  const currentItems = repositories.slice(startIndex, endIndex);

  const toggleFile = (fileKey: any) => {
    setOpenFiles((prev) => ({
      ...prev,
      [fileKey]: !prev[fileKey],
    }));
  };

  const renderItems = (items: any[]) => {
    return items.map((item, index) => {
      //   const index = `${parentKey}/${index}`;

      // Handle Files
      if (item.type === "repo" || !item.type) {
        return (
          <div key={index} className="mt-2">
            <div
              className={`${
                openFiles[index] ? "rounded-tl-lg rounded-tr-lg" : "rounded-lg"
              } flex items-center justify-between space-x-3 border-b border-gray-700 p-4 bg-gray-800`}
            >
              <div
                className="flex items-center space-x-3 cursor-pointer "
                onClick={() => toggleFile(index)}
              >
                <FaGithub className="text-[#EAB308] text-xl" />
                <h2 className="text-lg font-semibold">{item.name}</h2>
              </div>

              <span className="text-[#EAB308] flex items-center gap-2 transition-all duration-300 ease-in-out relative">
                <span className="relative">
                  <IoIosArrowDropdown
                    className={`text-2xl cursor-pointer transform transition-transform duration-300 ease-in-out ${
                      openFiles[index] ? "rotate-180" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFile(index);
                    }}
                  />
                </span>
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out origin-top bg-[#282829] ${
                openFiles[index]
                  ? "max-h-96 opacity-100 transform scale-y-100"
                  : "max-h-0 opacity-0 transform scale-y-95"
              }`}
            >
              <div className="p-3 rounded-br-md rounded-bl-md max-h-96 overflow-y-auto scrollbar-hide">
                <Link
                  href={item?.url}
                  target="_blank"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-500 underline transition-colors duration-200 ease-in-out"
                >
                  <FaLink className="w-4 h-4" />
                  {item?.url}
                </Link>
              </div>
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

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default Repositories;
