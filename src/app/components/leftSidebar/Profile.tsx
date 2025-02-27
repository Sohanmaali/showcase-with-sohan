"use client";

import { profileImage, typingWords } from "@/helpers/constFile";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Profile() {
  
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typingWords[wordIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      typingSpeed = 1000;
      setTimeout(() => setIsDeleting(true), typingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % typingWords.length);
    }

    const timeout = setTimeout(() => {
      setText(currentWord.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, typingWords]);
  return (
    <>
      <div className="flex flex-row lg:flex-col lg:items-center lg:mt-6">
        <div className="w-20 h-20 md:w-32 md:h-32 xl:w-40 xl:h-40 rounded-2xl bg-gradient-to-r from-[#383838] to-gray-900 overflow-hidden flex-shrink-0">
          <Image
            src={profileImage}
            alt="Sohan Maali"
            width={130}
            height={130}
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>

        <div className="ml-4 md:ml-6 xl:ml-8 flex flex-col lg:items-center w-full md:mt-6">
          <h1 className="text-white text-lg md:text-2xl xl:text-3xl font-semibold lg:mr-4 min-w-[150px]">
            Sohan Maali
          </h1>

          <div className="flex">
            <p className="text-gray-300 py-1 rounded-md w-max md:mt-2 xl:mt-3 text-sm xl:text-sm whitespace-nowrap">
              <span style={{ color: "#1FDF64" }}>{`<div>`}</span> I am{" "}
              <span className="text-gray-200 font-semibold">{text}</span>
              <span className="animate-blink">|</span>
              <span style={{ color: "#1FDF64" }}>{`</div>`}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
