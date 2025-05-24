import React from "react";
import Container from "../Container";
import Image from "next/image";
import { logo } from "@/assets";
import SearchInput from "./SearchInput";

const MiddleHeader = () => {
  return (
    <div className=" border-b-[1px] border-b-gray-500">
      <Container className=" py-5 flex items-center justify-between gap-6 md:gap-4">
        <Image src={logo} alt="logo" className="w-28 h-12" />
        <SearchInput />
        <div>navigation menu</div>
      </Container>
    </div>
  );
};

export default MiddleHeader;
