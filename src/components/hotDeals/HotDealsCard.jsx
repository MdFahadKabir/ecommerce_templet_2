import React from "react";
import Image from "next/image";
import { PiShoppingCartLight } from "react-icons/pi";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const HotDealsCard = ({ product, openDrawer, setOpenDrawer }) => {
  const { id, imageSrc, category, title, price, discountedPrice } = product;

  const { addToCart } = useCart();

  const addToCartHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("your product:", product);

    addToCart(product);

    setOpenDrawer(true);
  };

  return (
    <div className="mb-8 mt-2 cursor-pointer">
      <Link href={`/product/${id}`}>
        <div className=" border border-white bg-white  rounded-lg w-36 lg:w-52 mx-auto hover:border-gray-300">
          <Image
            className="object-cover lg:h-[200px] lg:w-[700px] rounded p-3 "
            src={imageSrc}
            width={500}
            height={500}
            alt="banner image"
            style={{
              objectFit: "cover",
              borderRadius: "19px",
            }}
          />

          <div className="p-5">
            <p className="mb-1 text-xs lg:text-xs font-normal text-gray-500 ">
              {category}
            </p>

            <h5 className="mb-1 text-xs lg:text-sm font-semibold tracking-tight text-[#464242] ">
              {/* {title}  */}

              {title.length > 20
              ? `${title.slice(0, 20)}..`
              : title}
              
            </h5>

            <div className="flex justify-between">
              <div>
                <p className=" text-xs lg:text-base font-semibold text-[#FF2157] ">
                ৳{price}
                </p>
                <p className="line-through text-xs lg:text-base font-normal text-gray-500 ">
                ৳{discountedPrice}
                </p>
              </div>

              <div>
                <button
                onClick={addToCartHandler}
                className="px-1 mt-2 bg-[#FF2157] hover:bg-[#fb124c] text-white font-semibold  py-1 border-2 border-[#f90f49] hover:border-transparent">
                  <span className="flex lg:gap-1 justify-center">
                    <span className="text-xs pl-1 lg:text-2xl mt-[1px] lg:mt-0">
                      <PiShoppingCartLight />
                    </span>
                    <span className="text-xs lg:text-sm pr-2 mt-0.5">Add</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HotDealsCard;
