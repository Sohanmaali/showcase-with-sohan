import Image from "next/image";

export default function EventCard({ image }: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <div className="overflow-hidden rounded-2xl">
        <Image
          src={image}
          width={400}
          height={240}
          alt="logo"
          className="rounded-2xl w-full h-60 object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
}
