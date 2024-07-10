"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MdCall } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";

const customTextColor = "#ff7f9b";

let navbarItemsClass =
  "relative z-10 text-black text-sm block  after:block after:content-[''] after:absolute after:h-[2px] after:text-logoOrange after:bg-logoOrange after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center cursor-pointer";

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
    link: "/why-liquid-salt",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "FAQ",
    link: "/faq",
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
    <nav className="flex flex-row w-[100vw] border-primaryColor h-[15vh] lg:h-[17.5vh] absolute top-0 items-center justify-between bg-transparent px-4 lg:px-0 z-50">
      <div className=" w-5/12 lg:w-3/12 h-full hidden lg:flex flex-row justify-start items-center ">
        <a
          href="https://evocaresalts.com/"
          target="_blank"
          className="flex h-[8vh] w-[8vh] mx-8 cursor-pointer relative"
        >
          <Image
            src={"/evocarelogo.png"}
            objectFit="contain"
            layout="fill"
            objectPosition="bottom"
          />
        </a>
      </div>
      <div className=" lg:flex w-full px-2 lg:w-6/12 lg:px-8  flex-col items-center">
        <div className="flex flex-row items-center justify-center gap-x-4">
          <a
            onClick={() => {
              router.push("/");
            }}
            className=" w-[30vw] h-[6vh] lg:h-[8vh] lg:w-[11vw] cursor-pointer relative"
          >
            <Image src={"/swaadlogo.png"} layout="fill" />
          </a>
        </div>
        <div className=" hidden lg:flex w-full  mt-6 flex-row justify-between items-baseline ">
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
                className={`${navbarItemsClass}  `}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className=" flex lg:hidden w-full  mt-6 flex-row justify-between items-baseline ">
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
                className={`relative z-10 text-black text-sm block pb-[1px] border-b-[1px] border-logoOrange cursor-pointer `}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>

      <div className=" hidden lg:w-3/12 h-full lg:flex flex-row justify-end items-end "></div>
      {/* <div className=" w-5/12 lg:w-2/12 h-full flex lg:hidden flex-row justify-end items-center ">
        <button className=" px-1 lg:px-2 ml-2 h-[40px]  bg-logoGreen/5 text-sm text-white rounded-full">
          <MdOutlineMenu className="text-logoGreen text-xl" />
        </button>
      </div> */}
    </nav>
  );
};

export default Navbar;
