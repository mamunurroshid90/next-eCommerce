import React from "react";

const SearchInput = () => {
  return (
    <div className=" hidden md:inline-flex flex-1 h-10 relative">
      <input
        type="text"
        placeholder="Search Products here..."
        className=" w-full h-full border-2 border-themeColor px-4 outline-none"
      />
    </div>
  );
};

export default SearchInput;
