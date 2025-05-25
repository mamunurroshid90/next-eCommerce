"use client";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Dialog, DialogPanel } from "@headlessui/react";
import { MdClose } from "react-icons/md";
import { navigation } from "@/constants";
import Link from "next/link";

import SocialLinks from "../SocialLinks";

const MobileNavbar = () => {
  let [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div
        onClick={toggleMenu}
        className=" text-2xl md:hidden text-gray-500 hover:text-themeColor duration-200 cursor-pointer"
      >
        <RiMenu3Fill />
      </div>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 md:hidden text-white/80"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/90">
          <DialogPanel
            transition
            className=" w-[94%] space-y-4 p-6 border border-lightText rounded-md absolute top-10 m-5 bg-black"
          >
            <div className=" flex justify-between items-center gap-4">
              <h3 className="text-xl font-semibold">Navigation Menu</h3>
              <button
                onClick={() => setIsOpen(false)}
                className=" text-white/40 text-2xl hover:text-red-600 duration-200 border border-white/20 hover:border-white/40 rounded-sm"
              >
                <MdClose />
              </button>
            </div>
            <div className="flex flex-col gap-5 pt-5">
              {navigation?.map((item) => (
                <Link
                  className=" hover:text-skyColor relative group flex items-center gap-2"
                  key={item?.title}
                  href={item?.href}
                  onClick={() => setIsOpen(false)}
                >
                  <span className=" w-2.5 h-2.5 rounded-full border border-white/80 inline-flex group-hover:border-skyColor"></span>
                  {item?.title}
                  <span className=" absolute w-full h-[1px] left-0 bg-white/20 -bottom-1 group-hover:bg-skyColor duration-200"></span>
                </Link>
              ))}
            </div>
            <SocialLinks />
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileNavbar;
