"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { LiaUserSolid } from "react-icons/lia";

const SignInButton = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      {session?.user ? (
        <div
          onClick={() => signOut()}
          className=" flex items-center space-x-2 text-sm cursor-pointer"
        >
          <div className=" border-2 border-gray-500 rounded-full text-xl w-10 h-10">
            <Image
              src={session?.user?.image!}
              alt="userImage"
              width={200}
              height={200}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-xs">{session?.user?.name}</p>
            <p>Signout</p>
          </div>
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className=" flex items-center space-x-2 text-sm cursor-pointer"
        >
          <div className=" border-2 border-gray-700 rounded-full text-xl">
            <LiaUserSolid />
          </div>
          <div>
            <p className="text-xs">Hello, guests</p>
            <p>Sign in / registration</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SignInButton;
