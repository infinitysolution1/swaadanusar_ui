import React from "react";

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
        </div>
        <div className=" w-full md:w-[70%] mt-8 lg:mt-0 flex flex-col items-start">
          <div className=" flex flex-col items-start w-full border-[1px] border-darkBrown overflow-hidden rounded-2xl">
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
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
