"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuBuilding } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useRouter } from "next/router";

let footerItemsClass =
  "text-base lg:text-sm hover:underline text-quirkyReddishOrange/80";

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
  // {
  //   title: "Blogs",
  //   link: "/blogs",
  // },
  {
    title: "Contact Us",
    link: "/contact",
  },
];

const webItems = [
  {
    title: "Terms & Conditions",
    link: "/terms",
  },
  {
    title: "Privacy Policy",
    link: "/privacy",
  },
  {
    title: "Disclaimer",
    link: "/disclaimer",
  },
  {
    title: "FAQ",
    link: "/faq",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#fff] border-[2px] border-logoOrange">
      <div className=" max-w-screen  bg-cream space-y-4 bg- px-4 pt-8 sm:px-6 lg:px-[5%]">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className=" w-[50vw] h-[10vh] md:w-[12.5vw] relative">
            <Image src={"/swaadlogo.png"} layout="fill" />
          </div>
        </div>
        <div className="my-8 h-[1px] w-full border-b-[1px] border-quirkyReddishOrange/20" />

        <div className="container  mx-auto w-full flex flex-col lg:flex-row flex-wrap justify-between items-top">
          <div className="w-full  lg:w-[22.5%] h-full flex flex-col gap-y-4">
            <a className="flex flex-row items-center gap-x-2">
              <div className="px-2 py-2 border-quirkyReddishOrange border-[1px] rounded-lg">
                <MdOutlineMail className="text-quirkyReddishOrange text-sm" />
              </div>
              <p className={`${footerItemsClass}`}>
                {"evocare.essentials@gmail.com"}
              </p>
            </a>
            <a className="flex flex-row items-center gap-x-2">
              <div className="px-2 py-2 border-quirkyReddishOrange border-[1px] rounded-lg">
                <IoMdCall className="text-quirkyReddishOrange text-sm" />
              </div>
              <p className={`${footerItemsClass} `}>{" +91-9119149944"}</p>
            </a>
          </div>
          <div className="w-full lg:w-[55%] mt-8 pl-[5%] lg:mt-0 grid grid-cols-2 md:grid-cols-3 mb-[15vh]">
            <div className="w-full flex flex-col items-left">
              <h3 className="text-xl font-semibold text-quirkyReddishOrange">
                Quick Links
              </h3>
              <ul className="mt-2">
                {navbarItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={item.link}
                        onClick={() => router.push(item.link)}
                        className={footerItemsClass}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full flex flex-col items-left ">
              <h3 className="text-xl font-semibold text-quirkyReddishOrange">
                Website
              </h3>
              <ul className="mt-2">
                {webItems.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={item.link}
                        onClick={() => router.push(item.link)}
                        className={footerItemsClass}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full flex flex-col items-left mt-[10%] md:mt-0">
              <h3 className="text-xl font-semibold text-quirkyReddishOrange">
                Social Links
              </h3>
              <div className="flex flex-row justify-start gap-x-2 mt-2">
                <a
                  onClick={() => {}}
                  className="p-2 border-quirkyReddishOrange rounded-md border-[1px]"
                >
                  <FaFacebookF className="text-quirkyReddishOrange text-sm" />
                </a>
                <a
                  onClick={() => {}}
                  className="p-2 border-quirkyReddishOrange rounded-md border-[1px]"
                >
                  <FaTwitter className="text-quirkyReddishOrange text-sm" />
                </a>
                <a
                  onClick={() => {}}
                  className="p-2 border-quirkyReddishOrange rounded-md border-[1px]"
                >
                  <FaLinkedinIn className="text-quirkyReddishOrange text-sm" />
                </a>
                <a
                  onClick={() => {}}
                  className="p-2 border-quirkyReddishOrange rounded-md border-[1px]"
                >
                  <FaInstagram className="text-quirkyReddishOrange text-sm" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-quirkyReddishOrange/30 mt-6 py-4 flex flex-col-reverse items-center  md:flex-row md:justify-between">
          <div className="w-3/12" />
          <p className="text-center text-sm text-quirkyReddishOrange">
            &copy; {new Date().getFullYear()}{" "}
            {"Swaad Anusar. All rights reserved."}
          </p>
          <div className="flex flex-row text-sm justify-center w-full md:w-3/12 mb-4 md:mb-0 text-quirkyReddishOrange">
            <p className="text-[12px]">Developed and Maintained By </p>
            <a
              href="https://theinfinitysolutions.net"
              className="underline ml-2 font-bold text-[12px] text-quirkyReddishOrange"
            >
              The Infinity Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
