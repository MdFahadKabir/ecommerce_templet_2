import Image from "next/image";
import React from "react";
import exclusive from "../../../assets/images/exclusive.png";
import { IoIosArrowForward } from "react-icons/io";

const ExclusiveOffers = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-10">
      <div className=" lg:flex justify-center ">
        <div className=" lg:w-[50%] ">
          <div className="lg:mt-36 text-center lg:text-left">
            <h2 className="lg:w-2/3 text-xl lg:text-4xl font-bold">
              Unleash Your Style With Exclusive Offers
            </h2>

            <p className="lg:w-[80%] text-gray-500 font-semibold mt-10">
              Step into a world of timeless elegance and contemporary flair with
              our latest collection of trendsetting fashion pieces. Whether you
              are looking for chic everyday wear or stunning evening ensembles.
            </p>
          </div>

          <div>
            <div className="flex justify-center lg:justify-start gap-5 my-8">
              <button className="bg-transparent border-[#FF2157] hover:bg-[#FF2157] text-[#FF2157] font-semibold hover:text-white py-1 px-4 border-2  hover:border-transparent">
                Shop Now
              </button>

              <button className=" hover:font-bold text-[#FF2157]  font-semibold py-2 px-4 text-xl">
                <span className="flex justify-center">
                  <span>Explore</span>

                  <span className="mt-[5px]">
                    <IoIosArrowForward />
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className=" lg:w-[50%] ">
          <div>
            <Image
              className="p-5 lg:p-0 object-cover w-[504px] h-[423px] lg:m-20"
              src={exclusive}
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

export default ExclusiveOffers;
