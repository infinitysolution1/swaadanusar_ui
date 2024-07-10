import React from "react";
import Image from "next/image";
import CTAVetical from "@/components/CTAVetical";
const WhyUS = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-cream pb-8">
      <div className=" w-11/12 flex flex-col md:flex-row justify-between mt-[17.5vh] lg:mt-[22.5vh]">
        <div className=" w-full md:w-[27.5%] flex flex-col items-center md:items-start">
          <h2 className=" text-3xl  lg:text-[2.25rem] lg:leading-[2.rem] font-bold text-center md:text-start text-logoGreen">
            Why Swaad Anusar?
          </h2>
          <p className="text-md text-darkBrown text-center md:text-start mt-4">
            Here are some reasons why you should choose Swaad Anusar.
          </p>

          <div className=" hidden lg:flex pr-8 w-full relative mt-[5vh]">
            <CTAVetical />
          </div>
        </div>
        <div className=" w-full md:w-[70%] mt-8 lg:mt-0 flex flex-col items-start">
          <div className=" flex flex-col items-start w-full  border-[1px] border-darkBrown overflow-hidden  rounded-2xl">
            <div className=" flex flex-col items-start w-full border-b-[1px] bg-quirkyMarineBlue/20  border-darkBrown px-4 py-4">
              <h3 className="text-xl font-bold text-logoGreen">
                Why Liquid Salt?
              </h3>
            </div>
            <div className="w-full flex flex-col p-4">
              <ul className="list-disc pl-6 text-darkBrown flex flex-col gap-y-2">
                <li>{"Research based speciality salt for table use"}</li>
                <li>
                  {
                    " Our formula comprises multi-minerals which will meet all dietary requirements"
                  }
                </li>
                <li>
                  {
                    "Our salt is backed by an alkaline level of more than 8.5pH, which will help provide better immunity and digestion."
                  }
                </li>
                <li>{"Easy to use salts for your table"}</li>
                <li>{"Healthy option"}</li>
              </ul>
            </div>
          </div>
          <div className=" flex flex-col items-start w-full  border-[1px] border-darkBrown overflow-hidden mt-[5vh]  rounded-2xl">
            <div className=" flex flex-col items-start w-full border-b-[1px] bg-quirkyMarineBlue/20  border-darkBrown px-4 py-4">
              <h3 className="text-xl font-bold text-logoGreen">Our USP</h3>
            </div>
            <div className="w-full flex flex-col p-4">
              <ul className="list-disc pl-6 text-darkBrown flex flex-col gap-y-2">
                <li>
                  {
                    " Versatile and easy to use liquid salt Hygienic and supports overall health and well-being"
                  }
                </li>
                <li>{"It is a finisher salt with reduced sodium content"}</li>
                <li>
                  {
                    "Alkaline properties and essential minerals in a liquid salt format"
                  }
                </li>
                <li>{"It's a cooked salt which is enriched with iodine"}</li>
                <li>
                  {
                    "Spray technology - evenly spread on the food and can be dissolved easily"
                  }
                </li>
                <li>
                  {"Spray technology reduces the salt intake in a healthy way"}
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex flex-col items-start w-full  border-[1px] border-darkBrown overflow-hidden mt-[5vh]  rounded-2xl">
            <div className=" flex flex-col items-start w-full border-b-[1px] bg-quirkyMarineBlue/20  border-darkBrown px-4 py-4">
              <h3 className="text-xl font-bold text-logoGreen">Benefits</h3>
            </div>
            <div className="w-full flex flex-col p-4">
              <ul className="list-disc pl-6 text-darkBrown flex flex-col gap-y-2">
                <li>
                  {
                    "Significantly reduced sodium content compared to conventional iodized salt"
                  }
                </li>
                <li>
                  {
                    "Essential vitamins and minerals to support dietary requirements"
                  }
                </li>
                <li>
                  {
                    " Easy application as a finisher salt, evenly spread over food for consistent flavor and nutrient distribution"
                  }
                </li>
                <li>{"Alkaline properties for potential health benefits"}</li>
              </ul>
            </div>
          </div>

          <div className="flex lg:hidden   w-full relative my-[5vh]">
            <CTAVetical />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUS;
