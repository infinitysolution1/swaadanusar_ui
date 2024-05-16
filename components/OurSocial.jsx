import React from "react";
import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

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
    <div className="flex flex-col relative items-center justify-center w-full md:h-[90vh] py-8 bg-cream">
      <div className="w-11/12 md:w-10/12 flex flex-col md:flex-row justify-start items-center  ">
        <RevealOnScroll addedClasses="w-full md:w-6/12 flex flex-col items-start justify-end h-full p-8 animate-slideInLeft">
          <h1 className="text-3xl md:text-4xl font-bold text-start text-darkBrown">
            Our Social Media
          </h1>
          <p className="text-start text-md text-darkBrown">
            Follow us on our social media platforms to stay updated with our
            latest products and offers.
          </p>
          <button className="bg-logoGreen text-white px-4 py-2 rounded-lg mt-4">
            Follow Us
          </button>
        </RevealOnScroll>
        <div className="flex flex-row w-full md:w-6/12">
          <ImageSection image={"/social1.png"} />
          <ImageSection image={"/social2.png"} />
        </div>
      </div>
      <div className="w-11/12 md:w-10/12 grid grid-cols-2 md:grid-cols-4 justify-start items-center  ">
        <ImageSection image={"/social1.png"} />
        <ImageSection image={"/social2.png"} />
        <ImageSection image={"/social3.png"} />
        <ImageSection image={"/social4.png"} />
      </div>
    </div>
  );
};

export default OurSocial;
