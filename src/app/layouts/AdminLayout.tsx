"use client";
import { useState } from "react";
import Sidebar from "../components/AdminSidebar";
import Header from "../admin/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded((prev) => !prev);
  };

  return (
    <div className="flex">
      <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />
        <main
          className={`p-6 transition-all duration-300
             md:ml-64

          `}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
