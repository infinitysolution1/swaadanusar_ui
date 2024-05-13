"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import WhyUsHome from "@/components/WhyUsHome";
import OurSocial from "@/components/OurSocial";
import Testimonials from "@/components/Testimonials";
import AsSeenOn from "@/components/AsSeenOn";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full 2xl:w-9/12 items-center z-0 bg-white  justify-between">
      <div className="flex flex-col items-start md:h-[90vh] w-full relative">
        <div className=" absolute bottom-0 w-screen h-[40vh]">
          <Image
            src={"/wave.png"}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className=" opacity-80  "
          />
        </div>
        <div className="flex flex-col md:flex-row w-full h-full bg-quirkyMarineBlue/10 relative items-center p-8 justify-between pt-[15vh] px-[5vw]">
          <div className="flex flex-col items-center w-full md:w-1/2 h-full justify-center">
            <div className="flex flex-col items-center">
              <div className="flex h-[8vh] w-[8vh] relative">
                <Image
                  src={"/evocarelogo.png"}
                  objectFit="contain"
                  layout="fill"
                  objectPosition="bottom"
                />
              </div>
              <div className="flex h-[30vh] w-[40vh] -mt-6 relative">
                <Image
                  src={"/swaadlogo.png"}
                  objectFit="contain"
                  layout="fill"
                />
              </div>
              <p className="text text-sm md:mx-[15vh] text-center font-light text-darkBrown">
                {
                  "Transforming Taste, Elevating Health: Introducing Swaad Anusar, India's Pioneer Liquid Alkaline Salt!"
                }
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/2 h-full justify-center relative">
            <div className="flex flex-col items-center">
              <div className="flex h-[40vh] w-[25vh] md:h-[60vh] md:w-[35vh] z-10 relative">
                <Image src={"/product.png"} objectFit="contain" layout="fill" />
              </div>
              <div className=" absolute animate-rotate right-[27.5%] z-20 bottom-0 md:bottom-[7vh] w-[10vh] h-[10vh] md:w-[15vh] md:h-[15vh]  ">
                <Image src={"/asset4.png"} objectFit="contain" layout="fill" />
              </div>
              <div className="absolute right-[15%] md:right-[22.5%] z-0 top-[10vh] flex justify-center items-center h-[12.5vh] w-[12.5vh] md:h-[20vh] md:w-[20vh]">
                <Image
                  src={"/asset2.svg"}
                  objectFit="contain"
                  layout="fill"
                  className="shaddow-sm -z-10"
                />
                <p className=" text-white text-[10px] md:text-sm text-center w-1/2 mt-2 md:leading-5 rotate-12">
                  A Spray to healthier life
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyUsHome />
      <OurSocial />
      <Testimonials />
      <AsSeenOn />
      <ContactUs />
    </main>
  );
}
