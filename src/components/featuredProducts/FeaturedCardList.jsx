// FeaturedCardList.jsx file
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

import React, { useState, useEffect } from "react";
import FeaturedCard from "./FeaturedCard";
import productsData from "../../../public/productData.json";
import SidebarDrawer from "@/app/(routes)/_component/SidebarDrawer";

const FeaturedCardList = () => {

  const [products, setProducts] = useState([]);

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="mt-16 ">
      <div className="max-w-screen-xl mx-auto">
        <div className=" lg:flex justify-between ml-5 lg:ml-0 ">
          <div>
            <h2 className="text-2xl font-semibold lg:my-10">
              Featured Products
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
              <FeaturedCard
                product={product}
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

export default FeaturedCardList;
