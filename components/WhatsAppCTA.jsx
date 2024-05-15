"use client";
import React from "react";
import Image from "next/image";

const WhatsAppCTA = () => {
  return (
    <a
      onClick={() => {
        window.open("", "_blank");
      }}
      className="fixed right-4 bottom-4 flex justify-center items-center rounded-md cursor-pointer bg-[#64B161] h-[6vh] w-[6vh] hover:bg-[#64B16199] z-50"
    >
      <div className="relative  h-[4vh] w-[4vh]">
        <Image src="/whatsapp.png" layout="fill" />
      </div>
    </a>
  );
};

export default WhatsAppCTA;
