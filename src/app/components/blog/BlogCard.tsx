import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogCard({ blog }: any) {
  return (
    <>
      <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-sm dark:bg-[#282829] dark:border-gray-700 overflow-hidden">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={blog?.image}
            width={400}
            height={240}
            alt="logo"
            className="rounded-2xl w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="p-5">
          <Link href={`blog/${1}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {blog?.heading}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {blog?.details}
          </p>
          <Link
            href={`blog/${1}`}
            className="relative h-10 shadow p-3 mt-4 rounded-lg overflow-hidden transition-all duration-500 group border border-[#BCA358] bg-transparent hover:bg-gradient-to-bl from-[#BCA358] to-transparent"
          >
            <>Read More... </>
          </Link>
        </div>
      </div>

      {/* Comment add  */}
    </>
  );
}
