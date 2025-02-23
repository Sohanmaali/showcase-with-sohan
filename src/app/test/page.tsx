import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1E1E1F] text-center px-4">
      <Image
        src="/assets/images/404-computer.svg"
        alt="404"
        width={500}
        height={500}
      />
      <p className="text-xl text-gray-300 mt-4 animate-pulse">
        😟 Whoops! That page doesn’t exist.
        <br />
      </p>

      <Link
        href="/"
        className="relative flex h-12 mt-5 w-auto items-center justify-center gap-2 px-6 rounded-lg border border-[#BCA358] bg-transparent shadow overflow-hidden transition-all duration-500 group hover:bg-gradient-to-bl from-[#BCA358] to-transparent animate-pulse"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>

        <span className="text-[#BCA358] transition-colors duration-500 group-hover:text-white">
          Go to Home
        </span>
      </Link>
    </div>
  );
};

export default NotFound;
