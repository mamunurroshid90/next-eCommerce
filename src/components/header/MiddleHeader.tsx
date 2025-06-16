import Container from "../Container";
import Image from "next/image";
import { logo } from "@/assets";
import SearchInput from "./SearchInput";
import Link from "next/link";
import { LiaUserSolid } from "react-icons/lia";
import HeaderIcons from "./HeaderIcons";
import MobileNavbar from "./MobileNavbar";
import SignInButton from "../SignInButton";

const MiddleHeader = () => {
  return (
    <div className=" border-b-[1px] border-b-gray-500">
      <Container className=" py-5 flex items-center justify-between gap-6 md:gap-4">
        <Link href={"/"}>
          <Image src={logo} alt="logo" className="w-28 h-12" priority />
        </Link>
        <SearchInput />
        {/* Users */}
        <div className=" flex gap-x-2 items-center md:inline-flex">
          <SignInButton />
          <HeaderIcons />
        </div>
        <MobileNavbar />
      </Container>
    </div>
  );
};

export default MiddleHeader;
