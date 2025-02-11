
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden sm:block w-1.5/2 ml-auto px-12 py-8 bg-[#282829] text-white rounded-bl-3xl rounded-tr-3xl">
        <div className="flex gap-8 justify-end">
          {["/", "/resume", "/gallery", "/blog", "/contact"].map((path, index) => (
            <Link
              key={index}
              href={path}
              className={`font-bold ${pathname === path ? "text-yellow-400" : ""}`}
            >
              {path.replace("/", "") || "About"}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Navbar (Bottom Navigation) */}
      <nav className="sm:hidden fixed bottom-0 left-0 w-full bg-[#1a1a1a] text-white py-10 rounded-tr-3xl rounded-tl-3xl z-10  ">
        <div className="flex justify-around">
          {["/", "/resume", "/gallery", "/blog", "/contact"].map((path, index) => (
            <Link
              key={index}
              href={path}
              className={`font-bold px-3 ${pathname === path ? "text-yellow-400" : ""}`}
            >
              {path.replace("/", "") || "About"}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
