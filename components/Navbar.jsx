"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MdCall } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";

const customTextColor = "#ff7f9b";

let navbarItemsClass =
  "relative z-10 text-black text-sm block after:block after:content-[''] after:absolute after:h-[2px] after:text-logoOrange after:bg-logoOrange after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center cursor-pointer";

// const navbarItems = [
//   { title: "Home", link: "/" },
//   { title: "About Us", link: "/" },
//   { title: "Services", link: "/" },
//   { title: "Our Doctors", link: "/" },
//   { title: "Blogs", link: "/" },
//   { title: "Contact Us", link: "/" },
// ];

const navbarItems = [
  {
    title: "Why Liquid Salt ?",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "R&D",
    link: "/research",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

const Navbar = ({}) => {
  const router = useRouter();
  const [currentHover, setCurrentHover] = useState("");

  return (
    <nav className="flex flex-row w-[100vw] border-primaryColor h-[15vh] md:h-[15vh] absolute top-0 items-center justify-between bg-transparent px-4 lg:px-0 z-50">
      <div className=" w-5/12 md:w-3/12 h-full hidden md:flex flex-row justify-end items-center "></div>
      <div className=" w-5/12 md:w-2/12 h-full flex md:hidden flex-row justify-end items-end "></div>
      <div className=" md:flex w-full md:w-6/12 md:px-8 flex flex-col items-center">
        <div className="flex flex-row items-center justify-center gap-x-4">
          <div className=" w-[30vw] h-[7vh] md:h-[6vh] md:w-[8vw] relative">
            <Image src={"/swaadlogo.png"} layout="fill" />
          </div>
        </div>
        <div className=" hidden md:flex w-full  mt-6 flex-row justify-between items-baseline ">
          {navbarItems.map((item, index) => {
            return (
              <Link
                onMouseEnter={() => {
                  setCurrentHover(item.title);
                }}
                key={index}
                href={item.link}
                onClick={() => {
                  router.push(item.link + "");
                }}
                className={`${navbarItemsClass} `}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>

      <div className=" w-5/12 md:w-3/12 h-full hidden md:flex flex-row justify-end items-end ">
        <button
          onClick={() => {
            router.push("/appointments");
          }}
          className="px-2 md:px-8 h-full font-semibold border-[2px] border-logoGreen bg-logoGreen text-xs md:text-sm text-white"
        >
          Try Liquid Salt
        </button>
        <button className=" px-1 md:px-4 h-full  bg-logoOrange/70 text-sm text-white">
          <MdCall className="text-logoGreen text-xl" />
        </button>
      </div>
      <div className=" w-5/12 md:w-2/12 h-full flex md:hidden flex-row justify-end items-center ">
        <button className=" px-1 md:px-2 ml-2 h-[40px]  bg-logoGreen/5 text-sm text-white rounded-full">
          <MdOutlineMenu className="text-logoGreen text-xl" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
