"use client";
import React, { useEffect, useState } from "react";

import { blogs } from "@/helpers/constFile";
import { useParams, useSearchParams } from "next/navigation";
export default function page() {
  const { id }: any = useParams();
  const [blog, setBlog] = useState<any>();
  useEffect(() => {
    if (id) {
      const foundBlog: any = blogs.find((blog) => blog.slug == id);
      setBlog(foundBlog || null);
    }
  }, [id]);

  // return <div>{blog?.description}</div>;

  return (
    <div>
      <div className="mb-4 md:mb-0">
        <div className="ps-6 pe-6 md:-mt-16 mt-4 mb-5">
          <h1 className="text-3xl font-bold text-white">Read Blog</h1>
          <div className="w-12 h-1 bg-yellow-500 my-2"></div>
          <div className="my-2 mt-10 flex flex-wrap gap-6 justify-center">
            <div className="md:ps-4 md:pe-4 pe-0 ps-0 rounded w-full">
              <div className="grid grid-cols-1  gap-4 justify-center">
                <p className="whitespace-pre-wrap" dangerouslySetInnerHTML={{__html:blog?.description}}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
