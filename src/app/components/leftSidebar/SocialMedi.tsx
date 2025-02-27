import { socialLinks, resumeLink } from "@/helpers/constFile";
import Link from "next/link";
import React from "react";
import { GrDownload } from "react-icons/gr";

export default function SocialMedia() {
  return (
    <>
      <div className="mb-2">
        <ul className="flex items-center gap-4 md:mb-5">
          {socialLinks.map(({ icon: Icon, link }, index) => (
            <li key={index}>
              <Link
                href={link}
                className="text-gray-400 hover:text-white text-2xl transition"
              >
                <Icon />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={resumeLink}
              download
              target="_blank"
              className="text-gray-400 hover:text-white text-2xl transition"
            >
              <GrDownload />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
