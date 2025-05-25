import Container from "../Container";
import Image from "next/image";
import { logo } from "@/assets";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { LiaUserSolid } from "react-icons/lia";
import HeaderIcons from "./HeaderIcons";

const MiddleHeader = () => {
  return (
    <div className=" border-b-[1px] border-b-gray-500">
      <Container className=" py-5 flex items-center justify-between gap-6 md:gap-4">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-28 h-12" />
        </Link>
        <SearchInput />
        {/* Users */}
        <div>
          <Link
            href={"/signin"}
            className=" flex items-center space-x-2 text-sm"
          >
            <div className=" border-2 border-gray-700 rounded-full text-xl">
              <LiaUserSolid />
            </div>
            <div>
              <p className="text-xs">Hello, guests</p>
              <p>login / registration</p>
            </div>
          </Link>
        </div>
        {/* Headers icons */}
        <HeaderIcons />
      </Container>
    </div>
  );
};

export default MiddleHeader;
