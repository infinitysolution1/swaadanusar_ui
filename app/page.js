"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import WhyUsHome from "@/components/WhyUsHome";
import OurSocial from "@/components/OurSocial";
import Testimonials from "@/components/Testimonials";
import AsSeenOn from "@/components/AsSeenOn";
import ContactUs from "@/components/ContactUs";
import Blogs from "@/components/Blogs";
import localFont from "next/font/local";

const sumac = localFont({ src: "../public/sumac-timber.woff2" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full 2xl:w-9/12 items-center z-0 bg-white  justify-between">
      <div className="flex flex-col items-start md:h-[100vh] w-full relative">
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
            <div className="flex flex-col items-start px-[5vw]">
              <div className="flex h-[12.5vh] w-[20vh] relative">
                <Image
                  src={"/swaadlogo.png"}
                  objectFit="contain"
                  layout="fill"
                />
              </div>
              <h2
                className={` ${sumac.className} text-[4.5rem] font-semibold leading-[4rem] text-logoGreen pr-8`}
              >
                {"India's first Alkaline liquid salt"}
              </h2>
              <p className="text text-md text-center md:text-start text-darkBrown mt-4">
                {
                  "Transforming Taste, Elevating Health: Introducing Swaad Anusar, India's Pioneer Liquid Alkaline Salt!"
                }
              </p>
              <button className="bg-logoGreen border-[2px] border-logoOrange text-white px-8 py-2 mt-4 rounded-full">
                Try Liquid Salt
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center w-full md:w-1/2 h-full justify-center relative">
            <div className="flex flex-col items-center">
              <div className="flex h-[40vh] w-[30vh] md:h-[60vh] md:w-[50vh] z-10 relative">
                <Image
                  src={"/vegetable.png"}
                  objectFit="contain"
                  layout="fill"
                />
              </div>

              <div className="absolute right-[15%] md:right-[22.5%] animate-bounce z-0 top-[2.5vh] md:top-[10vh] flex justify-center items-center h-[12.5vh] w-[15vh] md:h-[30vh] md:w-[30vh]">
                <Image
                  src={"/spray.png"}
                  objectFit="contain"
                  layout="fill"
                  className="shaddow-sm -z-10"
                />
              </div>
              <div className="absolute left-[15%] md:left-[22.5%] z-0 top-[5vh] md:top-[15vh] flex justify-center items-center h-[12.5vh] w-[12.5vh] md:h-[20vh] md:w-[20vh]">
                <Image
                  src={"/asset2.svg"}
                  objectFit="contain"
                  layout="fill"
                  className="shaddow-sm -z-10"
                />
                <p className=" text-white text-[10px] md:text-sm text-center w-1/2 mt-2 md:leading-5 -rotate-12">
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
      {/* <Blogs /> */}
      <ContactUs />
    </main>
  );
}
