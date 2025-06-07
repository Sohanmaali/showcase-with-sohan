"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// React Icons
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { MdDashboard, MdCalendarToday, MdPerson } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

type NavItem = {
  name: string;
  icon: JSX.Element;
  path?: string;
  subItems?: { name: string; path: string }[];
};

const navItems: NavItem[] = [
  {
    name: "Dashboard",
    icon: <MdDashboard className="w-5 h-5" />,
    // subItems: [{ name: "Ecommerce", path: "/" }],
  },
  {
    name: "Calendar",
    icon: <MdCalendarToday className="w-5 h-5" />,
    path: "/calendar",
  },
  {
    name: "User Profile",
    icon: <MdPerson className="w-5 h-5" />,
    path: "/profile",
  },
];

const Sidebar = ({
  isExpanded,
  toggleSidebar,
}: {
  isExpanded: boolean;
  toggleSidebar: () => void;
}) => {
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  const handleSubmenuToggle = (index: number) => {
    setOpenSubmenu((prev) => (prev === index ? null : index));
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white transition-all border-r border-gray-800 z-50
        ${isExpanded ? "w-64" : "w-20"} ${
          isExpanded ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-lg font-bold">
            {isExpanded ? "Sidebar" : "SB"}
          </span>
          <button onClick={toggleSidebar} className="text-white md:hidden">
            <AiOutlineClose className="w-6 h-6" />
          </button>
        </div>

        <nav className="px-4 py-4">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                {item.subItems ? (
                  <>
                    <button
                      onClick={() => handleSubmenuToggle(index)}
                      className={`flex items-center gap-3 w-full p-3 rounded-md transition ${
                        openSubmenu === index
                          ? "bg-gray-800"
                          : "hover:bg-gray-700"
                      }`}
                    >
                      {item.icon}
                      {isExpanded && <span>{item.name}</span>}
                      <IoChevronDownCircleOutline
                        className={`ml-auto w-5 h-5 transition-transform ${
                          openSubmenu === index
                            ? "rotate-180 text-brand-500"
                            : ""
                        }`}
                      />
                    </button>

                    {openSubmenu === index && (
                      <ul className="ml-6 mt-2 space-y-1">
                        {item.subItems.map((sub, i) => (
                          <li key={i}>
                            <Link
                              href={sub.path}
                              className={`block p-2 rounded-md transition ${
                                pathname === sub.path
                                  ? "bg-blue-500 text-white"
                                  : "hover:bg-gray-700"
                              }`}
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.path || "#"}
                    className={`flex items-center gap-3 p-3 rounded-md transition ${
                      pathname === item.path
                        ? "bg-blue-500 text-white"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    {item.icon}
                    {isExpanded && <span>{item.name}</span>}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
