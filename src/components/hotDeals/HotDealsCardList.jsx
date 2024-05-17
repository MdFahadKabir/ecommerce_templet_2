"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import productsData from "../../../public/productData.json";
import HotDealsCard from "./HotDealsCard";
import SidebarDrawer from "@/app/(routes)/_component/SidebarDrawer";

const HotDealsCardList = () => {
  const [products, setProducts] = useState([]);

  const [openDrawer, setOpenDrawer] = useState(false);

  const [countdown, setCountdown] = useState({
    hours: 10,
    minutes: 56,
    seconds: 21,
  });

  useEffect(() => {
    setProducts(productsData);

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        let { hours, minutes, seconds } = prevCountdown;

        const totalSeconds = hours * 3600 + minutes * 60 + seconds;
        const remainingSeconds = totalSeconds > 0 ? totalSeconds - 1 : 0;

        hours = Math.floor(remainingSeconds / 3600);
        minutes = Math.floor((remainingSeconds % 3600) / 60);
        seconds = remainingSeconds % 60;
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-24 ">
      <div className="max-w-screen-xl mx-auto">
        <div className=" lg:flex justify-between ml-5 lg:ml-0 ">
          <div>
            <h2 className="text-2xl font-semibold lg:my-10">
            Hot Deals
            </h2>
          </div>

          <div className=" lg:mr-[55%] text-white lg:mt-10">
            <h2 className="text-center bg-[#F35244] w-[70%] lg:w-auto my-2 lg:my-0 py-1 rounded px-2">
              {/* Timer  */}
              {/* Expires in: 10 : 56 : 21  */}
              {/* Timer countdown */}
              Expires in:{" "}
              {`${countdown.hours
                .toString()
                .padStart(2, "0")} : ${countdown.minutes
                .toString()
                .padStart(2, "0")} : ${countdown.seconds
                .toString()
                .padStart(2, "0")}`}
            </h2>
          </div>

          <div className="hidden lg:block">
            <button className=" mt-10 bg-transparent hover:bg-[#FF2157] text-[#FF2157] font-semibold hover:text-white py-2 px-4 border-2 border-[#FF2157] hover:border-transparent">
              View All
            </button>
          </div>
        </div>
      </div>

      <div className="lg:max-w-[1390px] mx-auto">
        <Swiper
          slidesPerView={2}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          spaceBetween={-20}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper "
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <HotDealsCard product={product} 
              openDrawer={openDrawer}
              setOpenDrawer={setOpenDrawer}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="lg:hidden flex justify-center">
        <button className=" mt-3 bg-transparent hover:bg-[#FF2157] text-[#FF2157] font-semibold hover:text-white py-2 px-4 border border-[#FF2157] hover:border-transparent">
          View All
        </button>
      </div>

      <SidebarDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </div>
  );
};

export default HotDealsCardList;

