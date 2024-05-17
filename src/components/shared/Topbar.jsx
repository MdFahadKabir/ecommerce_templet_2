import CategorySvg from "@/assets/images/svg/CategorySvg";
import React from "react";
import { FiHome } from "react-icons/fi";
import { LiaFireAltSolid } from "react-icons/lia";
import { MdOutlinePercent } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="hidden lg:flex justify-evenly border-2 border-[#FFF6F8] py-2 gap-6 fixed top-[70px] bg-white w-full max-w-screen-2xl z-20  mx-auto ">
      <div className="flex gap-1 cursor-pointer  mr-10">
        <div className="mt-1">
          <CategorySvg></CategorySvg>
        </div>
        <div>
          <h2 className="text-[#FF2157]">Browse All Categories</h2>
        </div>
      </div>

      <div className="flex gap-10 ">

        <Link href="/">
        <h2 className="flex gap-1 text-[#FF2157] cursor-pointer">
          <span className="mt-1">
            <FiHome />
          </span>
          Home
        </h2>
        </Link>

        <h2 className="flex gap-1 cursor-pointer">
          <span className="text-2xl">
            {" "}
            <LiaFireAltSolid />{" "}
          </span>
          Hot deals
        </h2>
        <h2 className="flex gap-1 cursor-pointer">
          <span className="mt-1 text-lg">
            <MdOutlinePercent />
          </span>
          Promotions
        </h2>
        <h2 className="flex gap-1 cursor-pointer">
          <span className="mt-1">
            <TfiAnnouncement />
          </span>
          New products
        </h2>
      </div>

      <div className="flex gap-4">
        <h2 className="flex gap-1 text-[#FF2157] cursor-pointer">
          <span className="mt-1 ">
            <BsTelephone />
          </span>
          1233-7777
        </h2>
        <h2 className="cursor-pointer">24/7 support center</h2>
      </div>
    </div>
  );
};

export default Topbar;
