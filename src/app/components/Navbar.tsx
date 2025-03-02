import { navLinks } from "@/helpers/constFile";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="hidden sm:block w-1.5/2 ml-auto px-12 py-8 bg-[#282829] text-white shadow-lg rounded-bl-3xl rounded-tr-3xl transition-all duration-300">
        <div className="flex gap-8 justify-end">
          {navLinks.map((path, index) => (
            <Link
              key={index}
              href={path}
              className={`font-bold transition-all duration-300 border-b-2 border-transparent ${
                pathname === path ? "text-yellow-400 " : "text-white"
              } hover:text-green-400 `}
            >
              {path === "/"
                ? "About"
                : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>
      </nav>

      <nav className="sm:hidden fixed bottom-0 left-0 w-full bg-transparent backdrop-blur-md text-white py-10 rounded-tr-3xl rounded-tl-3xl z-20">
        <div className="overflow-x-auto whitespace-nowrap px-3 scrollbar-hide">
          <div className="flex justify-start space-x-6 w-max">
            {navLinks.map((path, index) => (
              <Link
                key={index}
                href={path}
                className={`font-bold px-3 transition-all duration-300 ${
                  pathname === path ? "text-yellow-400" : "text-white"
                } hover:text-yellow-400`}
              >
                {path === "/"
                  ? "About"
                  : path.replace("/", "").charAt(0).toUpperCase() +
                    path.slice(2)}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
