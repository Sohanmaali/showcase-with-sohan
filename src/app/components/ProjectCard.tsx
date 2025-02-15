// import Image from "next/image";
// import React from "react";

// export default function ProjectCard() {
//   return (
//     <div>
//       <div className="relative group duration-500 cursor-pointer group overflow-hidden relative text-gray-50 h-72 w-96  rounded-2xl hover:duration-700 duration-700">
//         <div className="w-96 h-72 bg-lime-400 text-gray-800">
//           {/* <div className="flex flex-row justify-between"></div> */}
//           <Image src="/assets/images/carmucho.png" width={100} height={100}  alt="logo"/ >
//         </div>
//         <div className="absolute bg-gray-50 -bottom-24 w-96 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
//           <span className="text-lime-400 font-bold text-xs">CarMucho</span>
//           <span className="text-gray-800 font-bold text-3xl">Cheat Sheet</span>
//           <p className="text-neutral-800">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectCard() {
  return (
    <Link href="https://carmucho.com/" target="_blank">
      <div>
        <div className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 h-72 w-96 rounded-2xl hover:duration-700">
          {/* Image fills the entire card */}
          <div className="absolute inset-0">
            <Image
              src="/assets/images/carmucho.png"
              fill
              alt="logo"
              className="object-cover"
            />
          </div>

          {/* Overlay content */}
          <div className="absolute bg-[#282829] -bottom-20 w-96 h-40 p-3 flex flex-col gap-1 group-hover:bottom-0 group-hover:duration-600 duration-500">
            <span className="text-white font-bold text-3xl">CarMucho</span>
            <span className="text-white font-bold text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis
              natus, facere ratione beatae corrupti explicabo delectus repellat
              voluptates nisi velit odio reprehenderit consequuntur iusto hic,
              labore perferendis vel sit.
            </span>
            <p className="text-neutral-800 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {["NestJS", "NestJS", "NestJS", "NestJS", "NestJS"].map(
                (tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 w-fit font-bold text-xs text-white bg-lime-400 rounded-xl"
                  >
                    {tech}
                  </span>
                )
              )}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
