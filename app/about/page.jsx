import React from "react";
import CTAVetical from "@/components/CTAVetical";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-cream pb-8">
      <div className=" w-11/12 flex flex-col md:flex-row justify-between mt-[17.5vh] lg:mt-[22.5vh]">
        <div className=" w-full md:w-[27.5%] flex flex-col items-center md:items-start">
          <h2 className="text-4xl font-bold text-center md:text-start text-darkBrown">
            About Us
          </h2>
          <p className="text-md text-darkBrown text-center md:text-start mt-2">
            {
              "Learn more about who we are, our mission, values, and what motivates us make a difference."
            }
          </p>

          <div className=" hidden lg:flex pr-8 w-full relative mt-[5vh]">
            <CTAVetical />
          </div>
        </div>
        <div className=" w-full md:w-[70%] mt-8 lg:mt-0 flex flex-col items-start">
          <div className=" flex flex-col items-start w-full border-[1px] border-darkBrown overflow-hidden rounded-2xl">
            <div className=" flex flex-col items-start w-full border-b-[1px] bg-quirkyMarineBlue/20  border-darkBrown px-4 py-4">
              <h3 className="text-xl font-bold text-logoGreen">DIRECTORS</h3>
            </div>
            <div className="w-full flex flex-col px-4 py-8">
              <div className=" flex flex-col lg:flex-row justify-start w-full items-center">
                <div className="h-[25vh] w-[25vh] relative rounded-md overflow-hidden">
                  <Image src={"/director1.png"} layout="fill" />
                </div>
                <div className=" flex flex-col items-center lg:items-start mt-8 lg:mt-0 w-full lg:w-8/12 lg:ml-8">
                  <div className="flex flex-row w-full justify-center lg:justify-start items-center ">
                    <p className=" text-logoGreen text-center lg:text-start text-xl font-medium">
                      {"Shubham Jain"}
                    </p>
                    <a
                      href="https://in.linkedin.com/in/shubham-jain-067914169"
                      target="_blank"
                      className=" lg:ml-2"
                    >
                      <FaLinkedin className="text-xl text-logoGreen lg:ml-2" />
                    </a>
                  </div>
                  <p className="text-darkBrown text-center lg:text-start text-md">
                    {"Director"}
                  </p>

                  <p className="text-darkBrown text-center lg:text-start text-md">
                    {
                      "The mastermind behind Evocare Essentials has been fascinated by salt since he was young, and his vision was to revolutionize the Salt industry with speciality liquid salt. A healthier table salt for everyone. Following his family's salt industry legacy, he graduated from Mumbai University and is now pursuing an MBA in Operations Management. He brings 4 years of field experience alongside his own initiatives."
                    }
                  </p>
                </div>
              </div>
              <div className=" flex flex-col lg:flex-row justify-start items-center mt-[5vh]">
                <div className="h-[25vh] w-[25vh] relative rounded-md overflow-hidden">
                  <Image src={"/director2.png"} layout="fill" />
                </div>
                <div className=" flex flex-col items-center lg:items-start mt-8 lg:mt-0 w-full lg:w-8/12 lg:ml-8">
                  <div className="flex flex-row justify-start items-center ">
                    <p className=" text-logoGreen text-xl font-medium">
                      {"Ashika Jain"}
                    </p>
                    <a
                      href="https://in.linkedin.com/in/shubham-jain-067914169"
                      target="_blank"
                      className=" ml-2"
                    >
                      <FaLinkedin className="text-xl text-logoGreen ml-2" />
                    </a>
                  </div>
                  <p className="text-darkBrown text-md">{"Director"}</p>

                  <p className="text-darkBrown text-center lg:text-start  text-md">
                    {
                      "Ashika Jain, is the marketing and creative strategist behind Evocare Essentials. She has 8 years of accounting experience . Leveraging her family's 35-year salt legacy, she is also a leader adept at team management and business organization."
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col items-start w-full border-[1px] border-darkBrown overflow-hidden mt-[5vh] rounded-2xl">
            <div className=" flex flex-col items-start w-full border-b-[1px] bg-quirkyMarineBlue/20  border-darkBrown px-4 py-4">
              <h3 className="text-xl font-bold text-logoGreen">
                PROBLEM IN THE INDUSTRY
              </h3>
            </div>
            <div className="w-full flex flex-col p-4">
              <p className="text-darkBrown text-md">
                {
                  "We noticed a gap in the market of specialized salts as most of the Indian salt market is disordered. In India salt consumption is increasing day by day. (WHO recommends only 5-6 gms per day). High sodium intake leads to healthy problems and a lack of readily available multi-minerals for a balanced diet. Evocare Essentials saw an opportunity to create a unique solution in the form of Liquid Salt with High Alkalinity (with pH more than 8) which didn’t exist in the Indian market."
                }
              </p>
            </div>
          </div>
          <div className=" flex flex-col items-start w-full  border-[1px] border-darkBrown overflow-hidden mt-[5vh]  rounded-2xl">
            <div className=" flex flex-col items-start w-full border-b-[1px] bg-quirkyMarineBlue/20  border-darkBrown px-4 py-4">
              <h3 className="text-xl font-bold text-logoGreen">
                CONCEPT OF THE PRODUCT
              </h3>
            </div>
            <div className="w-full flex flex-col p-4">
              <p className="text-darkBrown text-md">
                {
                  "We saw an opportunity to create a unique solution in the form of Liquid Salt with High Alkalinity (with pH more than 8) which didn’t exist in the India market. After years of expertise in this line of work, we have challenged ourselves to create an unique solution which has multi-minerals & alkaline level upto 8.5pH. Inspired by a desire for healthier table salt we wanted our salt to be a finisher salt."
                }
              </p>
            </div>
          </div>
          <div className=" flex flex-col items-start w-full  border-[1px] border-darkBrown overflow-hidden mt-[5vh]  rounded-2xl">
            <div className=" flex flex-col items-start w-full border-b-[1px] bg-quirkyMarineBlue/20  border-darkBrown px-4 py-4">
              <h3 className="text-xl font-bold text-logoGreen">
                Our brand - SWAAD ANUSAR
              </h3>
            </div>
            <div className="w-full flex flex-col p-4">
              <p className="text-darkBrown text-md">
                {
                  "Our Product, Swaad Anusar Table Salt is India’s 1st Liquid Alkaline Salt. We have developed a new age table salt which will act as finisher salt. With a unique multi mineral blend boasting an alkaline level of up to 8.5 pH, it contains 75% less sodium than regular iodized salt."
                }
              </p>
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

export default AboutUs;
