"use client";
import { contactDetails } from "@/helpers/constFile";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  IoCalendarOutline,
  IoLocationOutline,
  IoMailOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";

const quotes = [
  {
    author: "Linus Torvalds",
    quote:
      "Talk is cheap. Show me the code.\nReal progress happens when you ship.",
  },
  {
    author: "Martin Fowler",
    quote:
      "Any fool can write code that a computer can understand.\nGood programmers write code that humans can understand.",
  },
  {
    author: "Cory House",
    quote: "Code is like humor.\nWhen you have to explain it, it’s bad.",
  },
  {
    author: "Steve McConnell",
    quote:
      "Good code is its own best documentation.\nAs you're about to add a comment, ask yourself, 'How can I improve the code so that this comment isn't needed?'",
  },
  {
    author: "Bjarne Stroustrup",
    quote:
      "I have always wished for my computer to be as easy to use as my telephone.\nMy wish has come true because I can no longer figure out how to use my telephone.",
  },
];
interface quoteType {
  author: string;
  quote: string;
}

export default function Contact() {
  const [randomQuote, setRandomQuote] = useState<quoteType>();

  useEffect(() => {
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      return quotes[randomIndex];
    };

    setRandomQuote(getRandomQuote());
  }, []);

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
      {/* Random Quote Section */}
      {randomQuote && (
        <div className="mt-8 p-6 bg-[#202022] rounded-lg border border-[#FFD16A] border-opacity-20">
          <blockquote className="text-gray-300 text-sm leading-relaxed mb-4">
            "
            {randomQuote.quote.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < randomQuote.quote.split("\n").length - 1 && <br />}
              </React.Fragment>
            ))}
            "
          </blockquote>
          <cite className="text-yellow-400 text-xs font-medium">
            — {randomQuote.author}
          </cite>
        </div>
      )}
    </>
  );
}
