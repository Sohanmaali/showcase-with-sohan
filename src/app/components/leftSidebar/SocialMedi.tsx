import { socialLinks } from "@/helpers/constFile";
import React from "react";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";


export default function SocialMedia() {
  return (
    <>
      <div className="mb-2">
        <ul className="flex items-center gap-4 md:mb-5">
          {socialLinks.map(({ icon: Icon, link }, index) => (
            <li key={index}>
              <a
                href={link}
                className="text-gray-400 hover:text-white text-2xl transition"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
