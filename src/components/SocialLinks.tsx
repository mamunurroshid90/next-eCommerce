import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

const linkData = [
  { icon: <FaGithub />, href: "https://github.com/mamunurroshid90" },
  { icon: <FaFacebook />, href: "https://www.facebook.com/mamunurroshid93" },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/mamunroshid/" },
];

const SocialLinks = ({
  iconStyle,
  className,
}: {
  iconStyle?: string;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        " flex items-center space-x-3 text-xl py-2 text-white/50",
        className
      )}
    >
      {linkData?.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="blank"
          className={twMerge(
            "border border-white/20 inline-flex p-2 rounded-full hover:text-skyColor hover:border-skyColor duration-200",
            iconStyle,
            className
          )}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;
