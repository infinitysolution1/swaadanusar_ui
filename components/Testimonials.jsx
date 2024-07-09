"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { testimonials } from "@/utils/consts";
import { MdArrowForward } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMdQuote } from "react-icons/io";
import { FaQuoteRight } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import RevealOnScroll from "./RevealOnScroll";

const Testimonials = () => {
  return (
    <div className="flex flex-col relative items-center justify-center w-full md:h-[70vh] py-8 bg-cream">
      <div className="w-full h-[70vh] absolute bottom-0">
        <Image
          src={"/bgasset.png"}
          layout="fill"
          objectFit="cover"
          objectPosition="bottom"
        />
      </div>
      <RevealOnScroll addedClasses="flex flex-col items-center w-11/12 md:w-full animate-slideUp">
        <h2 className="text-3xl md:text-4xl font-bold text-start text-darkBrown">
          What Our <span className=" text-logoGreen">Customers Say</span>
        </h2>
        <p className="text-sm md:text-md text-darkBrown text-center">
          Here are some of the testimonials from our customers.
        </p>
      </RevealOnScroll>
      <div className="flex flex-col w-11/12 md:w-8/12 z-10">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className=" w-full h-[50vh] md:h-[50vh]"
        >
          {testimonials.map((testimonial, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-start justify-center w-full h-full  px-8 rounded-lg">
                  <div className="h-[8vh] w-[8vh] relative">
                    <Image src={"/quote.png"} objectFit="cover" layout="fill" />
                  </div>
                  <p className="text-darkBrown text-md md:text-xl text-start mt-4">
                    {testimonial.testimonials}
                  </p>
                  <div className="flex flex-row items-center justify-start w-full mt-8">
                    {/* <div className="h-[6vh] w-[6vh] relative rounded-full overflow-hidden">
                      <Image
                        src={"/person1.png"}
                        objectFit="contain"
                        layout="fill"
                      />
                    </div> */}
                    <div className="flex flex-col items-start">
                      <p className="text-darkBrown text-md font-bold">
                        {testimonial.name}
                      </p>
                      <p className="text-darkBrown text-xs font-bold">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
