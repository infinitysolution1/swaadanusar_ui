import React from "react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

let sectionClass =
  "border-[1px] border-white bg-logoGreen py-4  px-2 h-[20vh] w-[20vh] md:h-[22.5vh] md:w-[22.5vh] rounded-full flex flex-col items-center justify-center";

let othersectionClass =
  "h-[10vh] w-[10vh] md:h-[15vh] md:w-[15vh] relative animate-slideUp ";

const WhyUsHome = () => {
  return (
    <div className="flex flex-col relative items-start justify-center w-full  md:h-[100vh] py-8 bg-logoOrange/90">
      <div className="flex flex-col md:flex-row items-center w-full justify-center mt-[2.5vh] px-[5vw]">
        <div className=" w-full md:w-[35vw] h-full flex flex-col justify-center">
          <h2 className="font-bold text-[3rem] leading-[3rem]">SWAAD ANUSAR</h2>
          <p className="text-darkBrown text-md"> The New Age of Table Salt</p>

          <p className="text-darkBrown text-sm mt-8">
            {
              "  Our Product, Swaad Anusar Table Salt is Indi's 1st Liquid Alkaline  Salt. We have developed a new age table salt which will act as finisher salt. With a unique multi mineral blend boasting an alkaline level of up to 8.5 pH, it contains 75% less sodium than regular iodized salt."
            }
          </p>
        </div>
        <div className=" hidden md:flex flex-col items-center justify-center relative h-full">
          <div className="flex h-[50vh] w-[30vh] relative">
            <Image src={"/product.png"} objectFit="cover" layout="fill" />
          </div>
        </div>
        <div className=" w-full md:w-[35vw] h-full flex flex-col justify-center mt-[5vh] md:mt-0 md:px-8">
          <div className="grid grid-cols-2 gap-y-8">
            <div className={sectionClass}>
              <p className="text-white text-center text-md">
                {"Research-based specialty salt for convenient table use."}
              </p>
            </div>
            <div className={sectionClass}>
              <p className="text-white text-center text-xs ">
                {"Formula meets dietary needs with essential multi-minerals."}
              </p>
            </div>
            <div className={sectionClass}>
              <p className="text-white text-center text-xs">
                {"Alkaline pH (>8.5) boosts immunity, aids digestion."}
              </p>
            </div>
            <div className={sectionClass}>
              <p className="text-white text-center text-md">
                {"Convenient salts for effortless table seasoning and use."}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 mt-[5vh] md:mt-0 items-center w-full md:h-[25vh] justify-center px-[5vw]">
        <RevealOnScroll addedClasses="flex flex-col items-center">
          <div className={othersectionClass}>
            <Image src={"/lowsodium.png"} layout="fill" />
          </div>
          <p className="text-white text-sm md:text-md">Low Sodium</p>
        </RevealOnScroll>
        <RevealOnScroll addedClasses="flex flex-col items-center">
          <div className={othersectionClass}>
            <Image src={"/minerals.png"} layout="fill" />
          </div>
          <p className="text-white text-sm md:text-md">Multi Mineral</p>
        </RevealOnScroll>
        <RevealOnScroll addedClasses="flex flex-col items-center">
          <div className={othersectionClass}>
            <Image src={"/lowph.png"} layout="fill" />
          </div>
          <p className="text-white text-sm md:text-md">Alkaline Upto 8.5 pH</p>
        </RevealOnScroll>
        <RevealOnScroll addedClasses="flex flex-col items-center">
          <div className={othersectionClass}>
            <Image src={"/cooked.png"} layout="fill" />
          </div>
          <p className="text-white text-sm md:text-md">Cooked Salt</p>
        </RevealOnScroll>

        <RevealOnScroll addedClasses="flex flex-col items-center">
          <div className={othersectionClass}>
            <Image src={"/iodine.png"} layout="fill" />
          </div>
          <p className="text-white text-sm md:text-md">Enriched with Iodine</p>
        </RevealOnScroll>
      </div>
    </div>
  );
};

export default WhyUsHome;
