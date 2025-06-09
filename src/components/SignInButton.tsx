"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { LiaUserSolid } from "react-icons/lia";

const SignInButton = () => {
  return (
    <div
      onClick={() => signIn()}
      className=" flex items-center space-x-2 text-sm cursor-pointer"
    >
      <div className=" border-2 border-gray-700 rounded-full text-xl">
        <LiaUserSolid />
      </div>
      <div>
        <p className="text-xs">Hello, guests</p>
        <p>login / registration</p>
      </div>
    </div>
  );
};

export default SignInButton;
