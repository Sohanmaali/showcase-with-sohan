import React from "react";
import BlogCard from "../components/blog/BlogCard";

import { blogs } from "@/helpers/constFile";
import SectionLayout from "../components/SectionLayout";

export default function Blog() {
  return (
    <>
      <SectionLayout title="Blog">
        <div className="my-2 mt-10 flex flex-wrap gap-6 justify-center ">
          <div className=" md:ps-4 md:pe-4 pe-0 ps-0 rounded w-full ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
              {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
              ))}
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
}
