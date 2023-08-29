"use client";

import Image from "next/image";
import ErrorImage from "../../public/icons/error.png";

function ErrorNotFound({ error }: { error: Error }) {
  return (
    <div className="h-screen bg-gray-200 flex flex-col justify-center items-center">
      <Image src={ErrorImage} alt="Error!" className="w-65 mb-8" />
      <div className="bg-white px-9 py-12 shadow rounded">
        <h3 className="text-3xl font-bold text-center">
          Well, this is embarrassing...
        </h3>
        <p className="text-lg font-bold text-center mt-2">We couldn`t find that restaurant</p>
        <p className="mt-6 text-regular font-light text-center">
          Error Code: 400.
        </p>
      </div>
    </div>
  );
}

export default ErrorNotFound;
