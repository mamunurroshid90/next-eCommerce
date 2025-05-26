import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { logo } from "@/assets";
import SocialLinks from "./SocialLinks";
import Title from "./Title";
import { navigation } from "@/constants";
import { GoDotFill } from "react-icons/go";
import { BsEnvelopeAt } from "react-icons/bs";
import { BiLocationPlus } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-lightBg py-10 lg:py-20">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-y-5">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="footer-image"
              className="w-20 h-12"
              priority
            />
          </Link>
          <p>
            We are a team of designers and developers that create high quality
            WordPress
          </p>
          <SocialLinks iconStyle="bg-themeWhite border border-themeColor shadow-md text-black p-3 text-lg hover:bg-themeColor hover:text-themeWhite cursor-pointer duration-200 rounded-md" />
        </div>
        <div>
          <Title>My Account</Title>
          <div className="mt-3 flex flex-col gap-y-2">
            {navigation?.map((item) => (
              <Link
                className="flex items-center gap-x-2 text-gray-700 hover:text-themeColor duration-200 font-medium"
                key={item?.title}
                href={item?.href}
              >
                <GoDotFill size={10} />
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Title>Information</Title>
          <div className="mt-3 flex flex-col gap-y-2">
            {navigation?.map((item) => (
              <Link
                className="flex items-center gap-x-2 text-gray-700 hover:text-themeColor duration-200 font-medium"
                key={item?.title}
                href={item?.href}
              >
                <GoDotFill size={10} />
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Title>Talk to us</Title>
          <div className="mt-3">
            <p className="text-sm">Got Questions? Call us</p>
            <Title>+670 413 90 762</Title>
          </div>
          <div className="mt-3">
            <p className="flex items-center gap-x-3 text-gray-600">
              <BsEnvelopeAt /> shofy@suppert.com
            </p>
            <p className="flex items-center gap-x-3 text-gray-600">
              <BiLocationPlus /> Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
