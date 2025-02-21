import Image from "next/image";

export default function Card({ image }: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Image
        src={image}
        width={400} // Increase width
        height={240} // Increase height
        alt="logo"
        className="rounded-2xl w-full h-60 object-cover" 
      />
    </div>
  );
}
