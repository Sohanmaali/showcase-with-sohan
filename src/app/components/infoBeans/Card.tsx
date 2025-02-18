import Image from "next/image";

export default function Card({ image }: any) {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <Image
          src={image}
          width={100}
          height={100}
          alt="logo"
          className="rounded-lg w-full h-60 object-fill"
        />
      </div>
    </>
  );
}
