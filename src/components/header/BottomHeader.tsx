import React from "react";
import Container from "../Container";
import { navigation } from "@/constants";
import Link from "next/link";
import { getServerSession } from "next-auth";
import SignOut from "../SignOut";

const BottomHeader = async () => {
  const session = await getServerSession();
  return (
    <div className=" border-b border-b-gray-400">
      <Container className=" flex items-center justify-between py-1">
        <div className="text-xs md:text-sm font-medium flex flex-wrap items-center gap-2 md:space-x-5">
          {navigation?.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="hover:text-themeColor duration-200"
            >
              {item?.title}
            </Link>
          ))}
          {session?.user ? (
            <SignOut />
          ) : (
            <p className="hover:text-themeColor duration-200">
              Please Signin to view your cart
            </p>
          )}
        </div>
        <div className=" hidden md:inline-flex text-xs text-gray-400">
          Hotline <span className="text-black">+88017654855522</span>
        </div>
      </Container>
    </div>
  );
};

export default BottomHeader;
