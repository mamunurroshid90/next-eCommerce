import React from "react";
import Container from "../Container";
import { FaTruckMedical } from "react-icons/fa6";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const TopHeader = () => {
  return (
    <div className="bg-[#010f1c] text-gray-200">
      <Container className="flex justify-between items-center">
        <p className="w-full md:w-auto text-sm flex items-center justify-center md:justify-normal font-medium py-1">
          <FaTruckMedical className=" text-2xl mr-1 text-yellow-500" /> Free
          Express Shipping on orders $570+
        </p>
        <div className=" hidden md:inline-flex items-center text-sm text-white">
          <p className=" headerTopMenu">
            English <MdOutlineKeyboardArrowDown />
          </p>
          <p className=" headerTopMenu">
            USD <MdOutlineKeyboardArrowDown />
          </p>
          <p className=" headerTopMenu">
            Settings <MdOutlineKeyboardArrowDown />
          </p>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
