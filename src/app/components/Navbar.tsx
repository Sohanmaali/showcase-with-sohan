"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Set mounted state after component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 10);
    };

    // Add passive scroll listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMounted]);

  // Don't render anything on server-side
  if (!isMounted) {
    return (
      <nav 
        ref={navRef}
        className="hidden sm:block w-[100%] ml-auto px-12 py-8 bg-[#282829] text-white rounded-bl-3xl rounded-tr-3xl"
        aria-hidden="true"
      />
    );
  }

  return (
    <>
      {/* Desktop Navigation */}
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

      {/* Mobile Navigation */}
      <nav 
        className="sm:hidden fixed bottom-0 left-0 w-full bg-[#1a1a1a] backdrop-blur-sm text-white py-4 z-50"
        aria-label="Mobile navigation"
      >
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex justify-around px-2">
            {[
              { path: "/", label: "About", icon: "🏠" },
              { path: "/resume", label: "Resume", icon: "📄" },
              { path: "/project", label: "Projects", icon: "💻" },
              { path: "/gallery", label: "Gallery", icon: "🖼️" },
              { path: "/contact", label: "Contact", icon: "📧" },
            ].map(({ path, label, icon }) => (
              <Link
                key={path}
                href={path}
                className={`flex flex-col items-center px-3 py-2 rounded-lg transition-colors duration-200 ${
                  pathname === path ? 'text-yellow-400' : 'text-gray-300 hover:text-white'
                }`}
                aria-current={pathname === path ? 'page' : undefined}
              >
                <span className="text-xl">{icon}</span>
                <span className="text-xs mt-1">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
