"use client";
import React from "react";
import { FaLink } from "react-icons/fa";
import { useRouter } from "next/navigation";

const TryLiquidSalt = () => {
  const router = useRouter();
  return (
    <a
      onClick={() => {
        router.push("/appointment");
      }}
      className="flex flex-col fixed right-0 top-1/3 h-auto  cursor-pointer bg-logoGreen z-40 animate-slideInRight px-3 py-4 rounded-l-md items-center transition-all translate-x-5"
    >
      <FaLink className="text-white mb-2 -rotate-90 text-sm" />
      <p
        style={{ writingMode: "vertical-rl" }}
        className="  text-white rotate-180  text-sm"
      >
        Try Liquid Salt
      </p>
    </a>
  );
};

export default TryLiquidSalt;
