import Image from "next/image";

export default function Card({ image }: any) {
  return (
    <>
      <div
        id="toast-notification"
        className="w-full  p-4 text-gray-900 bg-white rounded-lg shadow dark:bg-gray-800 dark:text-gray-300"
        role="alert"
      >
        <Image
          src={image}
          width={100}
          height={20}
          alt="logo"
          className="w-full object-fill"
        />
      </div>
    </>
  );
}
