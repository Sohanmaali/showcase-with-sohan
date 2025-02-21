// import Link from "next/link";

// export default function EducationTimeline() {
//   return (
//     <>
//       <div className="mb-5 flex gap-4">
//         <div className="w-12 h-12 flex justify-center items-center text-yellow-400 text-xl bg-[#202022] rounded-md  shadow border-t border-l border-[#FFD16A]  shadow-md">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="w-5 h-5 text-yellow-400"
//             viewBox="0 0 512 512"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="32"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <title>Book</title>
//             <path d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288" />
//           </svg>
//         </div>
//         <div className="mt-2">
//           <h3 className="text-2xl font-bold text-white">Education</h3>
//         </div>
//       </div>

//       <ol className="relative border-s border-gray-200 dark:border-gray-700 md:ms-20  ms-16">
//         <li className="mb-10 ms-6 ">
//           <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="w-6 h-6 text-blue-800 dark:text-blue-300"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zm0 5.09L6.26 7 12 9.91 17.74 7 12 5.09zM4 10v10h2v-6h2v6h8v-6h2v6h2V10h2v12H2V10h2z" />
//             </svg>
//           </span>
//           <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white text-white ">
//             <Link href="https://www.rgpv.ac.in/" target="_blank">
//               Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal
//             </Link>
//           </h3>

//           <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//             2023-2025
//           </time>
//           <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
//             Currently pursuing an MCA (Master of Computer Applications) at Patel
//             College Of Science & Technology Indore. Demonstrated excellence in
//             coursework related to software development, database management,
//             algorithms, and computer networking.
//           </p>
//         </li>
//         <li className="mb-10 ms-6">
//           <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="w-6 h-6 text-blue-800 dark:text-blue-300"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zm0 5.09L6.26 7 12 9.91 17.74 7 12 5.09zM4 10v10h2v-6h2v6h8v-6h2v6h2V10h2v12H2V10h2z" />
//             </svg>
//           </span>
//           <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white text-white">
//             <Link href="http://www.bubhopal.ac.in/1068/Home" target="_blank">
//               Barkatullah Vishwavidyalaya, Bhopal
//             </Link>
//           </h3>

//           <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//             2020-2023
//           </time>
//           <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
//             Completed a BCA (Bachelor of Computer Applications) from Harda
//             Adarsh College. Gained expertise in programming, database
//             management, software development, and computer networking.
//           </p>
//         </li>
//         <li className="mb-10 ms-6">
//           <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="w-6 h-6 text-blue-800 dark:text-blue-300"
//             >
//               <path d="M12 2L2 7l10 5 10-5-10-5zm0 5.09L6.26 7 12 9.91 17.74 7 12 5.09zM4 10v10h2v-6h2v6h8v-6h2v6h2V10h2v12H2V10h2z" />
//             </svg>
//           </span>
//           <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white text-white">
//             <Link
//               href="https://schools.org.in/dewas/23230620403/govt-hss-excellence-khategaon.html"
//               target="_blank"
//             >
//               Govt High School Khategaon
//             </Link>
//           </h3>
//           <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//             2019-2020
//           </time>
//           <p className="text-base font-normal text-gray-500 dark:text-gray-400">
//             Completed 12th Grade with a specialization in the Science Stream,
//             demonstrating a strong foundation in Mathematics and Sciences.
//             Achieved 75% in the 12th-grade board examinations.
//           </p>
//         </li>
//         <li className="ms-6">
//           <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//               className="w-6 h-6 text-blue-800 dark:text-blue-300"
//             >
//               <path d="M12 2 2 7v2h20V7l-10-5zm-6 9v8h12v-8h2v10H4V11h2zm4 0v4h4v-4h-4z" />
//             </svg>
//           </span>
//           <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white text-white">
//             Gaytri Vidya Mandir, Khategaon
//           </h3>
//           <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//             2017-2018
//           </time>
//           <p className="text-base font-normal text-gray-500 dark:text-gray-400">
//             Completed 10th Grade with a specialization in Computer Science,
//             achieving 75% in the 10th-grade board examinations.
//           </p>
//         </li>
//       </ol>
//     </>
//   );
// }
import Link from "next/link";

const educationData = [
  {
    institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal",
    link: "https://www.rgpv.ac.in/",
    duration: "2023-2025",
    description:
      "Currently pursuing an MCA (Master of Computer Applications) at Patel College Of Science & Technology Indore. Demonstrated excellence in coursework related to software development, database management, algorithms, and computer networking.",
  },
  {
    institution: "Barkatullah Vishwavidyalaya, Bhopal",
    link: "http://www.bubhopal.ac.in/1068/Home",
    duration: "2020-2023",
    description:
      "Completed a BCA (Bachelor of Computer Applications) from Harda Adarsh College. Gained expertise in programming, database management, software development, and computer networking.",
  },
  {
    institution: "Govt High School Khategaon",
    link: "https://schools.org.in/dewas/23230620403/govt-hss-excellence-khategaon.html",
    duration: "2019-2020",
    description:
      "Completed 12th Grade with a specialization in the Science Stream, demonstrating a strong foundation in Mathematics and Sciences. Achieved 75% in the 12th-grade board examinations.",
  },
  {
    institution: "Gaytri Vidya Mandir, Khategaon",
    duration: "2017-2018",
    description:
      "Completed 10th Grade with a specialization in Computer Science, achieving 75% in the 10th-grade board examinations.",
  },
];

export default function EducationTimeline() {
  return (
    <>
      <div className="mb-5 flex gap-4">
        <div className="w-12 h-12 flex justify-center items-center text-yellow-400 text-xl bg-[#202022] rounded-md shadow border-t border-l border-[#FFD16A] shadow-md">
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
        <h3 className="text-2xl font-bold text-white mt-2">Education</h3>
      </div>

      <ol className="relative border-s border-gray-200 dark:border-gray-700 md:ms-20 ms-10">
        {educationData.map((edu, index) => (
          <li key={index} className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-2 h-2 bg-[#FDC864] rounded-full -start-1 ring-4 mt-2 ring-[#383838]"></span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
              {edu.link ? (
                <Link href={edu.link} target="_blank">
                  {edu.institution}
                </Link>
              ) : (
                edu.institution
              )}
            </h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {edu.duration}
            </time>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {edu.description}
            </p>
          </li>
        ))}
      </ol>
    </>
  );
}
