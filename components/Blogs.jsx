import React from "react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";

const blogs = [
  {
    title: "Why You Should Eat Liquid Salt?",
    description:
      "Lorem ipsum dolor sit amet, Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    title: "Why You Should Eat Liquid Salt?",
    description:
      "Lorem ipsum dolor sit amet, Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    title: "Why You Should Eat Liquid Salt?",
    description:
      "Lorem ipsum dolor sit amet, Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
];

const Blogs = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-cream py-[5vh]">
      <RevealOnScroll addedClasses="w-10/12 flex flex-col items-center animate-slideUp">
        <h1 className=" text-2xl md:text-4xl font-bold text-center text-darkBrown">
          Blogs <span className=" text-logoGreen">Posts</span>
        </h1>
        <p className="text-sm text-center text-darkBrown">
          Check out our latest blogs and stay updated.
        </p>
      </RevealOnScroll>
      <div className="flex flex-col w-11/12 md:w-8/12 z-10 mt-[5vh]">
        <Swiper
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className=" w-full h-[50vh] md:h-[50vh]"
        >
          {blogs.map((testimonial, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-row justify-between items-center bg-logoOrange/90 w-full h-full rounded-lg">
                  <div className=" w-8/12 h-full relative">
                    <Image
                      src={"/social2.png"}
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                  <div className=" w-4/12 flex flex-col items-start px-4 justify-center">
                    <h1 className="text-darkBrown font-semibold text-base md:text-2xl text-start mt-4">
                      {testimonial.title}
                    </h1>
                    <p className="text-darkBrown text-base text-start mt-4">
                      {testimonial.description}
                    </p>
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

export default Blogs;
