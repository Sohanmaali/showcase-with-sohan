import Link from "next/link";
import React from "react";

export default function ExperienceTimeline() {
  return (
    <>
      <div className="mb-5 flex gap-4">
        <div className="w-12 h-12 flex justify-center items-center text-yellow-400 text-xl bg-[#202022] rounded-md  shadow border-t border-l border-[#FFD16A]  shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-yellow-400"
            viewBox="0 0 512 512"
            fill="none"
            stroke="currentColor"
            strokeWidth="32"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <title>Book</title>
            <path d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288" />
          </svg>
        </div>
        <div className="mt-2">
          <h3 className="text-2xl font-bold text-white"> Experience</h3>
        </div>
      </div>

      <ol className="relative border-s border-[#383838] dark:border-[#383838] md:ms-20  ms-16">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-blue-800 dark:text-blue-300"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 5.09L6.26 7 12 9.91 17.74 7 12 5.09zM4 10v10h2v-6h2v6h8v-6h2v6h2V10h2v12H2V10h2z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            <Link href="https://www.infobeans.com/infobeans-foundation/">
              InfoBeans Foundation Indore
            </Link>
          </h3>

          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2023–June 2024
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Completed ITEP training at InfoBeans Foundation, Indore Gained
            hands-on experience in software development, programming, and IT
            solutions, enhancing skills in web development, database management,
            and software engineering best practices.
          </p>
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-blue-800 dark:text-blue-300"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 5.09L6.26 7 12 9.91 17.74 7 12 5.09zM4 10v10h2v-6h2v6h8v-6h2v6h2V10h2v12H2V10h2z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            <Link href="https://www.foduu.com/">
              FODUU - Web Design Company India
            </Link>
          </h3>

          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            July 2024–Present
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Responsible for web design and development, contributing to various
            projects with expertise in front-end and back-end technologies.
          </p>
        </li>
      </ol>
    </>
  );
}
