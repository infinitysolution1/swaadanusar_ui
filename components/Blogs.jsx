import React from "react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

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
      <div className="w-10/12 mt-[10vh] flex flex-col items-center">
        <div className="flex flex-row w-full justify-between">
          <div className="flex flex-col items-center group w-[30%]">
            <div className="h-[30vh] z-0 w-full bg-gray-200  overflow-hidden relative">
              <Image
                src="/social2.png"
                layout="fill"
                className=" transition-all group-hover:opacity-55 group-hover:scale-125 group-hover:duration-500"
              />
            </div>
            <div className="w-3/4 z-10 bg-logoOrange py-8 shadow flex flex-col items-center px-4 -translate-y-[5vh] transition-all group-hover:-translate-y-[15vh] group-hover:duration-500">
              <h1 className="text-white text-lg font-bold text-center mt-2">
                {"Why You Should Eat Liquid Salt?"}
              </h1>
              <p className=" text-cream text-sm text-center mt-4">
                {
                  "Lorem ipsum dolor sit amet, Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                }
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center group w-[30%]">
            <div className="h-[30vh] z-0 w-full bg-gray-200  overflow-hidden relative">
              <Image
                src="/social2.png"
                layout="fill"
                className=" transition-all group-hover:opacity-55 group-hover:scale-125 group-hover:duration-500"
              />
            </div>
            <div className="w-3/4 z-10 bg-logoOrange py-8 shadow flex flex-col items-center px-4 -translate-y-[5vh] transition-all group-hover:-translate-y-[15vh] group-hover:duration-500">
              <h1 className="text-white text-lg font-bold text-center mt-2">
                {"Why You Should Eat Liquid Salt?"}
              </h1>
              <p className=" text-cream text-sm text-center mt-4">
                {
                  "Lorem ipsum dolor sit amet, Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                }
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center group w-[30%]">
            <div className="h-[30vh] z-0 w-full bg-gray-200  overflow-hidden relative">
              <Image
                src="/social2.png"
                layout="fill"
                className=" transition-all group-hover:opacity-55 group-hover:scale-125 group-hover:duration-500"
              />
            </div>
            <div className="w-3/4 z-10 bg-logoOrange py-8 shadow flex flex-col items-center px-4 -translate-y-[5vh] transition-all group-hover:-translate-y-[15vh] group-hover:duration-500">
              <h1 className="text-white text-lg font-bold text-center mt-2">
                {"Why You Should Eat Liquid Salt?"}
              </h1>
              <p className=" text-cream text-sm text-center mt-4">
                {
                  "Lorem ipsum dolor sit amet, Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
