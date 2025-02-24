import { contactDetails } from "@/helpers/constFile";
import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <>
      <ul className="grid grid-cols-1 ms-6 md:grid-cols-2 lg:grid-cols-1 gap-4 mt-8 overflow-hidden mb-8">
        {contactDetails.map(({ icon: Icon, label, value, link }, index) => (
          <li key={index} className="flex items-center gap-3">
            <div className="w-10 h-10 flex justify-center items-center text-yellow-400 text-xl bg-[#202022] rounded-md  shadow border-t border-l border-[#FFD16A]  shadow-md">
              <Icon className="w-4 h-4" />
            </div>
            <div>
              <p className="text-gray-400 text-xs uppercase">{label}</p>
              {link ? (
                <Link
                  href={link}
                  className="text-white text-sm hover:underline"
                >
                  {value}
                </Link>
              ) : (
                <span className="text-white text-sm">{value}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
