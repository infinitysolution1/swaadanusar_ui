import React from "react";
import Image from "next/image";

const AsSeenOn = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:h-[40vh] bg-cream py-8">
      <div className="w-10/12 flex flex-col items-start">
        <h1 className="text-xl text-center text-darkBrown">As Seen On</h1>
      </div>
      <div className="w-10/12 grid grid-cols-2 md:grid-cols-6 gap-8 md:gap-0 justify-between mt-8">
        <div className="h-[15vh] w-[15vh] relative">
          <Image src="/zomato.png" alt="Evocare Logo" layout="fill" />
        </div>
        <div className="h-[15vh] w-[15vh] relative">
          <Image
            src="/blinkit.jpeg"
            alt="Swaad Logo"
            objectFit="cover"
            layout="fill"
          />
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
        </div>
        <div className="h-[15vh] w-[15vh] relative">
          <Image
            src="/amazon.webp"
            alt="Swaad Logo"
            objectFit="cover"
            layout="fill"
          />
        </div>
        <div className="h-[15vh] w-[15vh] relative">
          <Image
            src="/flipkart.png"
            alt="Swaad Logo"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default AsSeenOn;
