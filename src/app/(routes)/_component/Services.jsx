import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { GrStatusGood } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdOutlineSentimentVerySatisfied } from "react-icons/md";

const Services = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-10">
      <div className=" p-4 lg:p-0 lg:flex justify-center text-center lg:text-start">
        <div className=" lg:w-[50%] ">
          <div className="lg:mt-36">
            <h2 className="lg:w-2/3 text-xl lg:text-4xl font-bold">
              Building Trust With Impressive Services
            </h2>

            <p className="lg:w-[80%] text-gray-500 font-semibold mt-10">
              Indulge in the art of self-expression and discover the perfect
              outfit that speaks to your unique personality. Join us on a
              journey of fashion-forward creativity and impeccable style.
            </p>
          </div>

          <div>
            <div className="flex gap-5 my-8 justify-center lg:justify-start">
              <button className="bg-transparent hover:bg-[#FF2157] text-[#FF2157] font-semibold hover:text-white py-1 px-4 border-2 border-[#FF2157] hover:border-transparent">
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

        <div className=" lg:w-[50%] font-bold">

        <div className="mt-40">
        <div className="flex gap-5 lg:gap-20 justify-center">
          <div>
            <span  className="flex justify-center text-7xl text-[#FF2157]">
              <GrStatusGood />
            </span>
            <span>Quality Products</span>
          </div>
          
          <div>
            <span  className="flex justify-center text-7xl text-[#FF2157]">
              <FaShippingFast />
            </span>
            <span className="">Fast Shipping</span>
          </div>

          </div>

          <div className="flex gap-0 lg:gap-10 justify-center mt-10">
          <div>
            <span  className="flex justify-center text-7xl text-[#FF2157]">
              <MdOutlineSupportAgent />
            </span>
            <span>Customer Support</span>
          </div>

          <div>
            <span className="flex justify-center text-7xl text-[#FF2157]">
              <MdOutlineSentimentVerySatisfied />
            </span>
            <span>Customer Satisfaction</span>
          </div>
          </div>
        </div>



        </div>
      </div>
    </div>
  );
};

export default Services;
