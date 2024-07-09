"use client";
import React from "react";
import Image from "next/image";

const AsSeenOn = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-[5vh] bg-cream">
      <div className="w-10/12 flex flex-col items-center">
        <h2 className=" text-3xl lg:text-4xl text-center font-semibold text-darkBrown">
          <span className={` text-logoGreen`}>SWAAD ANUSAR </span>
          is now available on
        </h2>
      </div>
      <div className="flex flex-col items-center mt-8">
        <div className="h-[15vh] w-[15vh] relative">
          <Image
            src="/amazon.webp"
            alt="Swaad Logo"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <button
          onClick={() => {
            window.open("https://www.amazon.in/");
          }}
          className="bg-darkBrown text-white px-4 py-2 mt-4 lg:mt-8 rounded-xl"
        >
          Shop Now
        </button>
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
