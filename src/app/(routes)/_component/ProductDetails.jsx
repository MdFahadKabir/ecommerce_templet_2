"use client";

// ProductDetails.jsx file
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PiShoppingCartLight } from "react-icons/pi";
import axios from "axios";
import Link from "next/link";

import ImageSlider from "./ImageSlider";
import HotDealsCardList from "@/components/hotDeals/HotDealsCardList";
import { useCart } from "@/context/CartContext";
import CartSidebar from "./CartSidebar";
import SidebarDrawer from "./SidebarDrawer";

const ProductDetails = ({ product_id }) => {
  const { addToCart } = useCart();

  const { cartItems, removeFromCart } = useCart();

  const [product, setProduct] = useState(null);

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("http://localhost:8000/product");
        // console.log("API Response:", response.data);
        const productList = response.data;

        if (productList && productList.length > 0) {
          const productData = productList.find(
            (item) => parseInt(item.id) === parseInt(product_id)
          );
          if (productData) {
            setProduct(productData);
            console.log(productData);
          } else {
            console.error("Product not found with id:", product_id);
          }
        } else {
          console.error("No products found in the response");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();

    return () => {};
  }, [product_id]);

  console.log(product);

  // const addToCart = () => {
  //   localStorage.setItem("cartProduct", JSON.stringify(product));
  //   setOpenDrawer(true);
  // };

  // const [cartProduct, setCartProduct] = useState(
  //   JSON.parse(localStorage.getItem("cartProduct"))
  // );

  const addToCartHandler = () => {
    addToCart(product);
    localStorage.setItem("cartProduct", JSON.stringify(product));
    setOpenDrawer(true);
    // setCartProduct(product);
  };

  // const removeFromCartHandler = () => {
  //   localStorage.removeItem("cartProduct");
  //   setCartProduct(null);
  // };

  // https://i.ibb.co/5xM8gjF/tshirt1.png
  // https://i.ibb.co/Y2p7Zrg/tshirt2.png
  // https://i.ibb.co/Ksm25sm/tshirt3.png
  // https://i.ibb.co/RgVvYLY/tshirt4.png
  // https://i.ibb.co/BBbQXh9/tshirt5.png

  const images = [
    "https://i.ibb.co/5xM8gjF/tshirt1.png",
    "https://i.ibb.co/Y2p7Zrg/tshirt2.png",
    "https://i.ibb.co/Ksm25sm/tshirt3.png",
    "https://i.ibb.co/5xM8gjF/tshirt1.png",
    "https://i.ibb.co/BBbQXh9/tshirt5.png",
  ];

  return (
    <div className="max-w-screen-xl mx-auto">
      {product ? (
        <div className="lg:flex gap-16 max-w-[1405px] mx-auto mt-10">
          <div className=" lg:w-[50%] m-3 lg:m-0">
            <div className="mb-36 lg:mb-0">
              <ImageSlider images={images} initialImage={product?.imageSrc} />
            </div>
          </div>

          <div className="  bg-[#F6D9E0] rounded-lg lg:h-[565px] lg:w-[657px]">
            <h2 className="pt-5 lg:pt-0 ml-10 m-5 text-xl font-semibold">
              {product?.title}
            </h2>

            <p className="ml-10 text-sm mb-2">Regular Price</p>

            <div className="flex">
              <h2 className="ml-10 text-xl font-semibold text-[#464242]">
                ৳{product?.price}
              </h2>

              <p className="line-through ml-10 text-lg font-normal text-gray-500 ">
                ৳{product?.discountedPrice}
              </p>
            </div>

            <div className="pb-5 lg:pb-0  gap-2 lg:gap-5 mt-5">
              <button
                onClick={addToCartHandler}
                className="ml-10 mr-5 mt-3 h-12 rounded-md bg-transparent border-[#FF2157] hover:bg-[#FF2157] text-[#FF2157]  lg:font-semibold hover:text-white py-2 lg:px-4 border-2  hover:border-transparent"
              >
                <div className="flex lg:gap-3 justify-center px-2 ">
                  <span className="text-lg lg:text-2xl mt-[3px] lg:mt-0">
                    <PiShoppingCartLight />
                  </span>
                  <span className="text-base">Add to Cart</span>
                </div>
              </button>

              <button className="mt-3 bg-[#FF2157] hover:bg-[#fb124c] rounded-md w-32 h-12 text-white lg:font-semibold py-2 px-4 text-sm lg:text-base">
                <div className="flex">
                  <span className="mt-1.5 mr-2">{/* <BuyNow /> */}</span>
                  <span>Buy Now</span>
                </div>
              </button>
            </div>

            <div>
              <h2 className="w-[90%] mx-auto font-semibold text-justify mt-10">
                {product?.description}
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center font-semibold text-2xl mt-36">Loading...</p>
      )}

      {/* SidebarDrawer  */}
      <SidebarDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} product={product} />
      {/* SidebarDrawer end */}

      <div className="mt-36">
        <HotDealsCardList></HotDealsCardList>
      </div>
    </div>
  );
};

export default ProductDetails;
