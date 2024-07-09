"use client";
import React from "react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { posts } from "@/utils/consts";
import { InstagramEmbed } from "react-social-media-embed";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const ImageSection = ({ image }) => {
  return (
    <div className="h-[20vh] w-[20vh] md:h-[40vh] md:w-[40vh] relative group bg-logoGreen">
      <Image
        src={image}
        objectFit="cover"
        layout="fill"
        className="hover:opacity-60"
      />
    </div>
  );
};

const OurSocial = () => {
  return (
    <div className="flex flex-col relative items-center justify-center w-full h-full py-[5vh] lg:py-[10vh] bg-cream">
      <div className="w-11/12 md:w-10/12 flex flex-col md:flex-row justify-start items-center  ">
        <RevealOnScroll addedClasses="w-full flex flex-col items-center justify-end h-full p-8 animate-slideUp">
          <h2 className="text-3xl md:text-4xl font-bold text-start text-darkBrown">
            Our Social Media
          </h2>
          <p className="text-center text-md text-darkBrown">
            Follow us on our social media platforms to stay updated with our
            latest products and offers.
          </p>
          <button
            onClick={() => {
              window.open(
                "https://www.instagram.com/swaadanusar_salts/",
                "_blank"
              );
            }}
            className="bg-logoGreen text-white px-4 py-2 rounded-lg mt-4"
          >
            Follow Us
          </button>
        </RevealOnScroll>
      </div>
      <div className="hidden w-full lg:flex flex-row gap-x-4 mt-[2.5vh] lg:mt-[5vh]">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {posts.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    zIndex: 10,
                  }}
                  onMouseEnter={() => {
                    setCurrentPointer("a");
                  }}
                  onMouseLeave={() => {
                    setCurrentPointer("");
                  }}
                >
                  <InstagramEmbed height={600} width={330} url={item} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className=" w-full flex lg:hidden flex-row gap-x-4 mt-[2.5vh] lg:mt-[5vh]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {posts.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    zIndex: 10,
                  }}
                  onMouseEnter={() => {
                    setCurrentPointer("a");
                  }}
                  onMouseLeave={() => {
                    setCurrentPointer("");
                  }}
                >
                  <InstagramEmbed height={600} width={330} url={item} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default OurSocial;
