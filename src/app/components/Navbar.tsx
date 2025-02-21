"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="hidden sm:block w-1.5/2 ml-auto px-12 py-8 bg-[#282829] text-white rounded-bl-3xl rounded-tr-3xl">
        <div className="flex gap-8 justify-end">
          {[
            "/",
            "/resume",
            "/project",
            "/code",
            "/gallery",
            "/blog",
            "/contact",
          ].map((path, index) => (
            <Link
              key={index}
              href={path}
              className={`font-bold ${
                pathname === path ? "text-yellow-400" : ""
              }`}
            >
              {path === "/"
                ? "About"
                : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navbar (Bottom Navigation) */}
     
      <nav className="sm:hidden fixed bottom-0 left-0 w-full bg- [#1a1a1a] backdrop-blur-sm  text-white py-10 rounded-tr-3xl rounded-tl-3xl z-20">
        <div className="overflow-x-auto whitespace-nowrap px-3 scrollbar-hide">
          <div className="flex justify-start space-x-6 w-max ">
            {[
              "/",
              "/resume",
              "/project",
              "/code",
              "/gallery",
              "/blog",
              "/contact",
              "/extra1", // Add more items for testing scrolling
              "/extra2",
            ].map((path, index) => (
              <Link
                key={index}
                href={path}
                className={`font-bold px-3 ${
                  pathname === path ? "text-yellow-400" : ""
                }`}
              >
                {path === "/"
                  ? "About"
                  : path.replace("/", "").charAt(0).toUpperCase() +
                    path.slice(2)}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
