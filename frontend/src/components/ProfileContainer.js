import React, { useState } from "react";
import TestImage from "../../public/Hero/academic-researcher-color.png";
import Image from "next/image";
import Link from "next/link";
import ArrowLeft from "../../public/Usables/ArrowLeft.png";

const ProfileContaine = ({ header, text }) => {
  const [mouseEnter, setMouseEnter] = useState(false);
  return (
    <Link
      href={"/auth/p/register"}
      className="mt-[1rem] w-full rounded-lg p-[1rem] bg-white flex gap-[1rem] items-center relative"
      onMouseEnter={() => {
        setMouseEnter(true);
      }}
      onMouseLeave={() => {
        setMouseEnter(false);
      }}
    >
      <Image
        src={ArrowLeft}
        className={`absolute right-[1.8rem] opacity-0 ${
          mouseEnter && "opacity-100"
        }`}
      />
      <Image src={TestImage} />
      <div className="card-details">
        <h1 className={`font-[500] ${mouseEnter && "text-blue-500"}`}>
          {header}
        </h1>
        <p className="max-w-[80%]">{text}</p>
      </div>
    </Link>
  );
};

export default ProfileContaine;
