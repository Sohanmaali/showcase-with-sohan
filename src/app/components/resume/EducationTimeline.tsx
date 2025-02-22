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
