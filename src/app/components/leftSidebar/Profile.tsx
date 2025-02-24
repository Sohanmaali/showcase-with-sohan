"use client"

import { profileImage } from '@/helpers/constFile';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Profile() {
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
    <>
      <div className="w-20 h-20 lg:w-40 lg:h-40 rounded-2xl bg-gradient-to-r from-[#383838] to-gray-900 overflow-hidden lg:mt-10">
              <Image
                src={profileImage}
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
    
    </>
  )
}
