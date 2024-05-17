"use client";
//Navbar.jsx file
import React, { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import Logo from "@/assets/images/svg/Logo";
import Searchbar from "./Searchbar";
import { FiShoppingCart } from "react-icons/fi";
import Image from "next/image";
import profilePics from "../../assets/images/profilePics.png";
import { LuHeart } from "react-icons/lu";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import SidebarDrawer from "@/app/(routes)/_component/SidebarDrawer";

const Navbar = () => {
  const { addToCart } = useCart();

  const { cartItems, removeFromCart } = useCart();

  const [openDrawer, setOpenDrawer] = useState(false);

  // const [cartProduct, setCartProduct] = useState(
  //   JSON.parse(localStorage.getItem("cartProduct"))
  // );

  // const removeFromCartHandler = () => {
  //   localStorage.removeItem("cartProduct");
  //   setCartProduct(null);
  // };

  console.log(cartItems);

  return (
    <div className="">
      <nav className="flex items-center justify-between lg:px-28 py-2 fixed bg-white w-full max-w-screen-2xl top-0 z-10 mx-auto">
        <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold  transition-all duration-200 hover:scale-110 cursor-pointer">
          <Link href="/">
            {" "}
            <Logo></Logo>{" "}
          </Link>
        </div>

        <div className="hidden lg:flex">
          <Searchbar></Searchbar>
        </div>

        <ul className="lg:flex items-center justify-between gap-6 text-slate-900 hidden">
          <li className="cursor-pointer  rounded-full  px-6 py-2  text-2xl">
            <LuHeart />
          </li>

          {/* my cart or add to cart button  */}
          <button onClick={() => setOpenDrawer(true)}>
            <li className="cursor-pointer  rounded-full  px-6 py-2  text-2xl">
              <FiShoppingCart />
            </li>
          </button>
          {/* my cart or add to cart button end */}

          <li className="cursor-pointer">
            {/* profile  */}
            <div className=" flex">
              <div>
                <h2 className="font-semibold mt-2 mr-1">Aman Molla</h2>
              </div>
              <div>
                <Image
                  className="bg-orange-500 object-cover size-8 mt-0.5"
                  src={profilePics}
                  width={500}
                  height={500}
                  alt="banner image"
                  style={{
                    objectFit: "cover",
                    borderRadius: "100px",
                  }}
                />
              </div>
            </div>
            {/* profile end */}
          </li>
        </ul>

        {/* nav items for small devices  */}
        <ul className="flex lg:hidden items-center justify-between gap-2 text-slate-900 ">
          <li className="cursor-pointer  rounded-full  px-6 py-2  text-2xl">
            <LuHeart />
          </li>

          {/* my cart or add to cart button end */}
          <button onClick={() => setOpenDrawer(true)}>
            <li className="cursor-pointer  rounded-full  px-6 py-2  text-2xl">
              <FiShoppingCart />
            </li>
          </button>
          {/* my cart or add to cart button end */}
        </ul>
      </nav>

      {/* SidebarDrawer  */}
      <SidebarDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      {/* SidebarDrawer end */}
    </div>
  );
};

export default Navbar;
