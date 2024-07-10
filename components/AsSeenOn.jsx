"use client";
import React from "react";
import Image from "next/image";
import { FaChevronCircleRight } from "react-icons/fa";

const AsSeenOn = () => {
  return (
    <div className="flex flex-col z-10 items-center relative overflow-hidden justify-center w-full h-full py-[5vh] bg-[#F6AC44]">
      <div className=" absolute z-20 -right-8 -top-8 h-[10vh] w-[10vh] lg:h-[20vh] lg:w-[20vh] ">
        <Image src={"/asset9.png"} layout="fill" objectFit="cover" />
      </div>
      <div className=" absolute z-20 -bottom-8 -left-8 h-[10vh] w-[10vh] lg:h-[20vh] lg:w-[20vh] ">
        <Image src={"/asset9.png"} layout="fill" objectFit="cover" />
      </div>
      <div className=" absolute z-20 -top-[5vh]  -left-[5vh]  lg:top-[5vh] lg:left-[10vh] h-[10vh] w-[10vh] lg:h-[20vh] lg:w-[20vh]">
        <Image src={"/asset1.png"} layout="fill" objectFit="cover" />
      </div>
      <div className=" absolute z-20 -bottom-[5vh] -right-[5vh] lg:bottom-[5vh] lg:right-[10vh] h-[10vh] w-[10vh] lg:h-[20vh] lg:w-[20vh] ">
        <Image src={"/asset2.png"} layout="fill" objectFit="cover" />
      </div>
      <div className=" flex flex-row items-center w-full lg:w-7/12 justify-center ml-[5vh]">
        <div className=" flex flex-col h-[40vh] w-[30%] relative">
          <Image src={"/ctaimage.png"} layout="fill" objectFit="contain" />
        </div>
        <div className=" flex flex-col items-start  w-[60%] justify-between">
          <p className=" font-bold text-white text-[2.25rem] leading-[2rem] lg:text-[4rem] lg:leading-[3.75rem]">
            ORDER ONLINE <span className=" text-darkBrown">NOW!</span>
          </p>
          <div className=" h-[5vh] w-[10vw] lg:h-[10vh] lg:w-[10vw] relative lg:-ml-8">
            <Image src={"/asset8.png"} layout="fill" objectFit="contain" />
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
      </div>
    </div>
  );
};

export default AsSeenOn;

{
  /* <div className="h-[15vh] w-[15vh] relative">
<Image
  src="/flipkart.png"
  alt="Swaad Logo"
  objectFit="cover"
  layout="fill"
/>
</div>

<div className="h-[15vh] w-[15vh] relative">
<Image
  src="/blinkit.jpeg"
  alt="Swaad Logo"
  objectFit="cover"
  layout="fill"
/>

 <div className="h-[15vh] w-[15vh] relative">
          <Image src="/zomato.png" alt="Evocare Logo" layout="fill" />
        </div>
</div>
<div className="h-[15vh] w-[15vh] relative">
<Image
  src="/zepto.png"
  alt="Swaad Logo"
  objectFit="cover"
  layout="fill"
/>
</div>
<div className="h-[15vh] w-[15vh] relative">
<Image
  src="/instamart.jpeg"
  alt="Swaad Logo"
  objectFit="cover"
  layout="fill"
/>
</div> */
}
