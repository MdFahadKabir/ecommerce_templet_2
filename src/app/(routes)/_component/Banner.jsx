import React from "react";
import banner1 from "../../../assets/images/banner1.png";
import banner2 from "../../../assets/images/banner2.png";
import banner3 from "../../../assets/images/banner3.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="">
      <div>
        <h2 className="text-center text-xl lg:text-4xl font-bold mt-10">
          Discover The Latest Fashion Trends For You
        </h2>
        <p className="text-center mb-4 text-gray-500 my-1">
          Stay ahead of the fashion curve with our trendy collection
        </p>

        <div className="flex justify-center gap-5 my-8">
          <button className="bg-transparent hover:bg-[#FF2157] text-[#FF2157] font-semibold hover:text-white py-2 px-4 border border-[#FF2157] hover:border-transparent">
            Explore
          </button>

          <button className="bg-[#FF2157] hover:bg-[#fb124c] text-white font-bold py-2 px-4">
            Shop Now
          </button>
        </div>

        {/* Width
            395px
            Height
            277px */}

        <div className="lg:flex space-y-5 px-4 lg:px-0 lg:space-y-0 justify-center gap-2 mt-5">
          <div>
            <Image
              className="object-cover w-[395px] h-[277px]"
              src={banner1}
              width={500}
              height={500}
              alt="banner image"
            />
          </div>

          <div>
            <Image
              className="object-cover w-[395px] h-[277px]"
              src={banner2}
              width={500}
              height={500}
              alt="banner image"
            />
          </div>

          <div>
            <Image
              className="object-cover w-[395px] h-[277px]"
              src={banner3}
              width={500}
              height={500}
              alt="banner image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
