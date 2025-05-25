"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  return (
    <div className=" hidden md:inline-flex flex-1 h-10 relative">
      <input
        type="text"
        placeholder="Search Products here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" w-full h-full border-2 border-themeColor px-4 outline-none"
      />
      {search && (
        <RxCross2
          onClick={() => setSearch("")}
          className="top-2.5 right-12 text-xl absolute hover:bg-red-400 hover:text-white rounded-full transition-all duration-200"
        />
      )}
      <span className="absolute top-0 right-0 w-10 h-10 bg-themeColor/80 text-white inline-flex justify-center items-center border border-themeColor hover:bg-themeColor duration-200 cursor-pointer">
        <IoSearch />
      </span>
    </div>
  );
};

export default SearchInput;
