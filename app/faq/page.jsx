"use client";
import React, { useState, useEffect } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import Image from "next/image";

let faq = [
  {
    question: "What is Swaad Anusar?",
    answer:
      "Swaad Anusar is India's first Liquid Alkaline Salt. It is a new age table salt which will act as a finisher salt. With a unique multi mineral blend boasting an alkaline level of up to 8.5 pH, it contains 75% less sodium than regular iodized salt.",
  },
  {
    question: "What is the pH level of Swaad Anusar?",
    answer:
      "Swaad Anusar has an alkaline level of more than 8.5pH, which will help provide better immunity and digestion.",
  },
  {
    question: "What are the benefits of Swaad Anusar?",
    answer:
      "Swaad Anusar is a research based speciality salt for table use. Our formula comprises multi-minerals which will meet all dietary requirements. Our salt is backed by an alkaline level of more than 8.5pH, which will help provide better immunity and digestion.",
  },
  {
    question: "How can I use Swaad Anusar?",
    answer:
      "Swaad Anusar is easy to use salts for your table. You can use it as a finisher salt for your dishes.",
  },
  {
    question: "Where can I buy Swaad Anusar?",
    answer: "You can buy Swaad Anusar from our website.",
  },
  {
    question: "How can I contact you?",
    answer: "You can contact us through our website.",
  },
  {
    question: "What are the different sizes available?",
    answer: "Swaad Anusar is available in 500ml and 1L bottles.",
  },
];

const FAQ = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-cream pb-8">
      <div className=" w-11/12 flex flex-col md:flex-row justify-between mt-[22.5vh]">
        <div className=" w-full md:w-3/12 flex flex-col items-center md:items-start">
          <h2 className="text-4xl font-bold text-center md:text-start text-darkBrown">
            Frequently Asked Questions
          </h2>
          <p className="text-md text-darkBrown text-center md:text-start mt-4">
            Here are some of the frequently asked questions about Swaad Anusar.
          </p>
        </div>
        <div className=" w-full md:w-8/12 flex flex-col items-start">
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
        </div>
      </div>
    </div>
  );
};

export default FAQ;
