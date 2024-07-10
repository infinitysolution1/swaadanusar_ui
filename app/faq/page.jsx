"use client";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import Image from "next/image";
import { faq } from "@/utils/consts";
import CTAVetical from "@/components/CTAVetical";

const FAQ = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-cream pb-8">
      <div className=" w-11/12 flex flex-col md:flex-row justify-between mt-[17.5vh] lg:mt-[22.5vh]">
        <div className=" w-full md:w-3/12 flex flex-col items-center md:items-start">
          <h2 className="text-4xl font-bold text-center md:text-start text-darkBrown">
            Frequently Asked Questions
          </h2>
          <p className="text-md text-darkBrown text-center md:text-start mt-4">
            Here are some of the frequently asked questions about Swaad Anusar.
          </p>

          <div className=" hidden lg:flex pr-8 w-full relative mt-[5vh]">
            <CTAVetical />
          </div>
        </div>
        <div className=" w-full md:w-8/12 mt-8 lg:mt-0 flex flex-col items-start">
          {faq.map((question, index) => {
            return (
              <a
                onClick={() =>
                  setCurrentQuestion(currentQuestion == index ? -1 : index)
                }
                key={index}
                className="flex cursor-pointer border-[0.5px] border-darkBrown/50 px-4 py-4 rounded-md  flex-col mb-4 items-start w-full "
              >
                <div className="flex flex-row w-full justify-between">
                  <h3 className="text-2xl font-semibold text-darkBrown">
                    {question.question}
                  </h3>
                  {currentQuestion === index ? (
                    <MdKeyboardArrowUp
                      className="text-3xl text-darkBrown cursor-pointer"
                      onClick={() => setCurrentQuestion(null)}
                    />
                  ) : (
                    <MdKeyboardArrowDown
                      className="text-3xl text-darkBrown cursor-pointer"
                      onClick={() => setCurrentQuestion(index)}
                    />
                  )}
                </div>
                {currentQuestion === index ? (
                  <p className="text-md text-darkBrown mt-2 animate-slideDown">
                    {question.answer}
                  </p>
                ) : null}
              </a>
            );
          })}

          <div className="flex lg:hidden  w-full relative my-[5vh]">
            <CTAVetical />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
