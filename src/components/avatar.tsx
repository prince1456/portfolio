import Image from "next/image";
import { useState, useRef, useEffect } from "react";
type IAvatar = {
  type: 1 | 2;
};
const Avatar = ({ type }: IAvatar) => {
  if (type === 1) {
    return (
      <div className="flex items-center justify-center w-32 h-32 bg-white rounded-full group">
        <div className="overflow-hidden transition-transform duration-300 ease-in-out origin-center transform bg-gray-500 rounded-full w-28 h-28 group-hover:scale-110">
          <Image
            src="/images/alializada-2.jpg"
            alt="profile"
            width={250}
            height={250}
          />
        </div>
      </div>
    );
  }
  if (type === 2) {
    return (
      <div className="flex items-center justify-center w-32 h-32 bg-white rounded-full group">
        <div className="transition-transform duration-300 ease-in-out transform bg-gray-500 rounded-full w-28 h-28 group-hover:rotate-6 group-hover:-translate-y-1 group-hover:-translate-x-1">
          <Image
            src="/images/alializada-2."
            alt="profile"
            width={250}
            height={250}
          />
        </div>
      </div>
    );
  }
  return null;
};

export default Avatar;
