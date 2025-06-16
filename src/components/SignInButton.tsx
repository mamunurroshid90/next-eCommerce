"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { LiaUserSolid } from "react-icons/lia";

const SignInButton = () => {
  const { data: session } = useSession();

  if (session?.user) {
    return (
      <div
        onClick={() => signOut()}
        className="flex items-center space-x-2 text-sm cursor-pointer"
      >
        <div className="border-2 border-gray-500 rounded-full text-xl w-10 h-10">
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt="User profile"
              width={40}
              height={40}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <LiaUserSolid />
            </div>
          )}
        </div>
        <div>
          <p className="hidden text-xs">{session.user.name || "User"}</p>
          <p className="font-semibold">Sign out</p>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={() => signIn()}
      className="flex items-center space-x-2 text-sm cursor-pointer"
    >
      <div className="border-2 border-gray-700 rounded-full text-xl">
        <LiaUserSolid />
      </div>
      <div>
        <p className="text-xs">Hello, guest</p>
        <p>Sign in / registration</p>
      </div>
    </div>
  );
};

export default SignInButton;
