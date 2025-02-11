"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  IoMailOutline,
  IoPhonePortraitOutline,
  IoCalendarOutline,
  IoLocationOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoChevronDown,
} from "react-icons/io5";
import Link from "next/link";

const contactDetails = [
  {
    icon: IoMailOutline,
    label: "Email",
    value: "sohanmaali144@gmail.com",
    link: "mailto:sohanmaali4@gmail.com",
  },
  {
    icon: IoPhonePortraitOutline,
    label: "Phone",
    value: "+91- 6232389832",
    link: "tel:+916232389832",
  },
  { icon: IoCalendarOutline, label: "Birthday", value: "Oct 08, 2002" },
  {
    icon: IoLocationOutline,
    label: "Location",
    value: "Amla, Khategaon, Dewas",
  },
];

const socialLinks = [
  { icon: IoLogoGithub, link: "https://github.com/Sohanmaali" },
  {
    icon: IoLogoLinkedin,
    link: "https://in.linkedin.com/in/mohan-oon-b8130b234?trk=profile-badge",
  },
  {
    icon: IoLogoInstagram,
    link: "https://www.instagram.com/sohan.maali1",
  },
];

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  // Auto-detect screen size and update isActive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsActive(true); // Keep open on large screens
      } else {
        setIsActive(false); // Close on small screens (unless manually opened)
      }
    };

    handleResize(); // Run once on load
    window.addEventListener("resize", handleResize); // Listen for screen resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  const words = ["Web Developer", "Software Developer"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      typingSpeed = 1000; // Pause before deleting
      setTimeout(() => setIsDeleting(true), typingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    const timeout = setTimeout(() => {
      setText(currentWord.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words]);

  return (
    <aside className="bg-[#1E1E1F] border border-[#383838] rounded-3xl ps-4 pt-4 pb-4 pe-4 mt-3 lg:mt-0 lg:mb-5 transition-all duration-500 overflow-hidden lg:overflow-visible">
      <div className="flex items-center lg:flex-col gap-4 relative">
        <div className="w-20 h-20 lg:w-40 lg:h-40 rounded-2xl bg-gradient-to-r from-[#383838] to-gray-900 overflow-hidden lg:mt-10">
          <Image
            src="/assets/images/sohan.jpg"
            alt="Sohan Maali"
            width={130}
            height={130}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>

        <div className="flex lg:justify-center lg:items-center">
          <div className="flex-1 lg:mt-6 text-left lg:text-center ">
            <h1 className="text-white text-lg lg:text-3xl font-semibold ">
              Sohan Maali
            </h1>
            <div className="flex justify-start lg:justify-center mt-2">
              <p className="text-gray-300 py-1 rounded-md w-max lg:mt-3 text-center text-ls lg:text-sm">
                <span style={{ color: "#1FDF64" }}>{`<div>`}</span>I am{" "}
                <span className="text-gray-200 font-semibold">{text}</span>
                <span className="animate-blink">|</span>
                <span style={{ color: "#1FDF64" }}>{`</div>`}</span>
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setIsActive(!isActive)}
          className="absolute -right-4 top-0 transform -translate-y-1/2 text-[#FFD16A] hover:text-white transition-all duration-300 ease-in-out lg:hidden flex items-center gap-1 p-2 rounded-tr-3xl border-t border-l border-[#FFD16A] rounded-bl-2xl bg-gradient-to-br from-[#FFD16A] to-gray-800 hover:from-[#FFC04D] hover:to-gray-700 shadow-md hover:shadow-lg"
        >
          <IoChevronDown
            className={`text-sm transition-transform duration-300 block md:hidden ${
              isActive ? "rotate-180" : "rotate-0"
            }`}
          />
          <span className="sm:block hidden transition-opacity duration-300">
            {isActive ? "Hide Contacts" : "Show Contacts"}
          </span>
        </button>
      </div>

      <div
        className={`lg:mt-10  transition-all duration-500 ${
          isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } lg:max-h-full block `}
      >
        <div className="pt-4 sm:pt-0">
          <hr className="border-[#383838] my-4 " />
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
        </div>

        <hr className="border-[#383838] my-4" />

        <div className="mb-5">
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
      </div>
    </aside>
  );
};

export default Sidebar;
