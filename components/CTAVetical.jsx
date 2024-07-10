"use client";
import React from "react";
import Image from "next/image";
import { FaChevronCircleRight } from "react-icons/fa";

const CTAVetical = () => {
  return (
    <div className="flex flex-col z-10 items-center relative rounded-md overflow-hidden justify-center w-full h-full py-[5vh] bg-[#F6AC44]">
      <div className=" absolute z-20 -right-8 -top-8 h-[5vh] w-[5vh] lg:h-[10vh] lg:w-[10vh] ">
        <Image src={"/asset9.png"} layout="fill" objectFit="cover" />
      </div>
      <div className=" absolute z-20 -bottom-8 -left-8 h-[5vh] w-[5vh] lg:h-[10vh] lg:w-[10vh] ">
        <Image src={"/asset9.png"} layout="fill" objectFit="cover" />
      </div>
      <div className=" absolute z-20 top-[10vh]  -left-[5vh]  lg:top-[15vh] lg:-left-[5vh] h-[10vh] w-[10vh]">
        <Image src={"/asset1.png"} layout="fill" objectFit="cover" />
      </div>
      <div className=" absolute z-20 bottom-[10vh] -right-[5vh] lg:bottom-[15vh] lg:-right-[5vh] h-[10vh] w-[10vh] ">
        <Image src={"/asset2.png"} layout="fill" objectFit="cover" />
      </div>

      <div className=" flex flex-col items-center px-[5vw] lg:px-[2.5vw]">
        <p className=" text-4xl lg:text-3xl font-bold text-center ">
          ORDER ONLINE <span className=" text-darkBrown">NOW</span>
        </p>
      </div>

      <div className=" w-full h-[40vh] relative mt-[2.5vh]">
        <Image src={"/product.png"} layout="fill" objectFit="contain" />
      </div>
      <button
        onClick={() => {
          window.open("https://amzn.in/d/02jvll2l", "_blank");
        }}
        className="text-white flex flex-row items-center  bg-logoGreen px-8 py-2 gap-x-2 rounded-lg"
      >
        <FaChevronCircleRight className=" text-white " />
        <p>Order Now</p>
      </button>
    </div>
  );
};

export default CTAVetical;
