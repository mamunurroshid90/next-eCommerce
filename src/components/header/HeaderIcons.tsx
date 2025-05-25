import Link from "next/link";
import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { MdFavoriteBorder } from "react-icons/md";

const HeaderIcons = () => {
  return (
    <>
      <Link href={"/favorite"} className="text-2xl relative">
        <MdFavoriteBorder />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-themeColor text-white font-medium flex justify-center items-center text-[10px] rounded-full">
          0
        </span>
      </Link>
      <Link href={"/favorite"} className="text-2xl relative">
        <BiShoppingBag />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-themeColor text-white font-medium flex justify-center items-center text-[10px] rounded-full">
          0
        </span>
      </Link>
    </>
  );
};

export default HeaderIcons;
