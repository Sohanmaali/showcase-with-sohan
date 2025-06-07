import React from "react";
import BlogCard from "../components/blog/BlogCard";

import { blogs } from "@/helpers/constFile";


export default function Blog() {
  return (
    <>
      <div>
        <div className="mb-4 md:mb-0">
          <div className="ps-6 pe-6 md:-mt-16 mt-4 mb-5">
            <h1 className="text-3xl font-bold text-white">Blog</h1>
            <div className="w-12 h-1 bg-yellow-500 my-2"></div>
            <div className="my-2 mt-10 flex flex-wrap gap-6 justify-center ">
              <div className=" md:ps-4 md:pe-4 pe-0 ps-0 rounded w-full ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
                  {blogs.map((blog, index) => (
                    <BlogCard key={index} blog={blog} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
