"use client";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";

import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("./category.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

// https://i.ibb.co/Z88zHqt/Polo-Shirts.png
// https://i.ibb.co/xhQQWP5/Half-Sleeve.png
// https://i.ibb.co/dJtsNQd/Panjabi.png
// https://i.ibb.co/D1N6XKR/Shirts.png
// https://i.ibb.co/ryXHwk1/Pants.png

  return (
    <div className="mt-16 pb-16 lg:mx-14 lg:rounded-xl cursor-pointer">
      <div className="flex justify-between mx-10">
        <div className="lg:my-16">
          <h2 className="text-xl text-[#3b3939] lg:text-3xl font-semibold">
          Explore Categories
          </h2>



        </div>

        <div className="mt-14 hidden lg:block">
          <button className="bg-transparent hover:bg-[#fb124c] text-[#fb124c] font-semibold hover:text-white py-2 px-20 border-2 border-[#fb124c] hover:border-transparent">
            View All
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={2}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        spaceBetween={-30}
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
            <CategoryCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-14 lg:hidden flex justify-center">
        <button className="bg-transparent hover:bg-[#fb124c] text-[#fb124c] font-semibold hover:text-white py-2 px-10 lg:px-20 border-2 border-[#fb124c] hover:border-transparent">
          View All
        </button>
      </div>
    </div>
  );
};

export default CategoryList;