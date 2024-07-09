"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";
import { set, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const ContactUs = () => {
  const [loading, setLoading] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    emailjs
      .send(
        "service_q98fd3h",
        "template_hw82f9f",
        {
          from_name: data.name,
          from_email: data.email,
          from_phoneNumber: data.phoneNumber,
          from_message: data.message,
        },
        {
          publicKey: "eoiAoMLjf6L-vxjBc",
        }
      )
      .then((res) => {
        setEmailSent(true);
        setLoading(false);
        reset();
      })
      .catch((err) => {
        setLoading(false);
        console.log("error", err);
      });
  };

  useEffect(() => {
    if (emailSent) {
      setTimeout(() => {
        setEmailSent(false);
      }, 2000);
    }
  }, [emailSent]);

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-cream pb-8">
      <div className=" w-11/12 flex flex-col md:flex-row justify-between mt-[17.5vh]">
        <div className="flex flex-col w-full h-full items-start relative justify-start  py-[2.5vh] ">
          <RevealOnScroll
            addedClasses={
              "flex flex-col items-center justify-center w-full p-8 animate-animateSlideUp"
            }
          >
            <h2
              className={` text-logoGreen text-[2.5rem] lg:text-[4rem] leading-[4rem] font-bold `}
            >
              Contact Us
            </h2>
            <p className=" text-darkBrown text-center text-sm">
              {
                " Reach out to us for any collaborations or queries. We are always here to help you."
              }
            </p>
          </RevealOnScroll>
          <div className=" flex flex-col items-center w-full mt-4 lg:mt-[5vh]">
            <form
              id="contact-form"
              onSubmit={handleSubmit(onSubmit)}
              className=" w-[80vw] lg:w-[40%] flex flex-col items-center justify-center"
            >
              <div className="flex flex-col items-center w-full">
                <input
                  type="text"
                  id="name"
                  placeholder="Name*"
                  {...register("name", { required: true, minLength: 5 })}
                  className="mb-4 w-full bg-transparent placeholder:text-darkBrown/70 focus:bg-transparent text-darkBrown  text-xl border-b-[1px] border-logoGreen"
                />
                {errors.name?.message ? (
                  <p className=" text-xs text-red-500">{errors.name.message}</p>
                ) : null}
              </div>
              <div className="flex flex-col items-center w-full mt-4">
                <input
                  id="email"
                  type="email"
                  placeholder="Email*"
                  {...register("email", {
                    required: true,
                    minLength: 5,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address",
                    },
                  })}
                  className="mb-4 w-full bg-transparent placeholder:text-darkBrown/70 focus:bg-transparent text-darkBrown  text-xl border-b-[1px] border-logoGreen"
                />
                {errors.email?.message ? (
                  <p className=" text-xs text-red-500">
                    {errors.email.message}
                  </p>
                ) : null}
              </div>
              <div className="flex flex-col items-center w-full mt-4">
                <input
                  id="phoneNumber"
                  type="phoneNumber"
                  placeholder="Phone Number"
                  {...register("phoneNumber")}
                  className="mb-4 w-full bg-transparent placeholder:text-darkBrown/70 focus:bg-transparent text-darkBrown  text-xl border-b-[1px] border-logoGreen"
                />
              </div>
              <div className="flex flex-col items-center w-full mt-4">
                <textarea
                  id="message"
                  placeholder="Message*"
                  {...register("message", { required: true })}
                  className="mb-4 w-full bg-transparent h-[10vh] placeholder:text-darkBrown/70 focus:bg-transparent text-darkBrown  text-xl border-b-[1px] border-logoGreen"
                />
                {errors.message?.message ? (
                  <p className=" text-xs text-red-500">
                    {errors.message.message}
                  </p>
                ) : null}
              </div>
              {emailSent ? (
                <button
                  type="submit"
                  disabled
                  className="bg-green-400 text-white px-8 py-2 mt-8 "
                >
                  Email Sent
                </button>
              ) : (
                <button
                  disabled={errors.name || errors.email || errors.message}
                  type="submit"
                  id="submit-button"
                  className=" bg-darkBrown disabled:bg-gray-700 text-white px-8 py-2 mt-2 z-20 lg:mt-8 "
                >
                  {loading ? "..." : "Submit"}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>

      <div className=" w-3/12 flex flex-row justify-center z-20 items-center gap-x-2 my-2 lg:my-8">
        <div className="h-[1px] bg-quirkyReddishOrange w-[45%]  border-white" />
        <p className=" text-xl text-quirkyReddishOrange">OR</p>
        <div className="h-[1px] bg-quirkyReddishOrange w-[45%]  border-white" />
      </div>

      <div className="flex flex-col items-center z-20 w-11/12 mb-[5vh] lg:w-6/12">
        <p className="text-logoGreen">Reach out to us on our Social media</p>
        <div className=" w-4/12 flex flex-row justify-between mt-4 lg:mt-8">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram size={24} className=" text-logoGreen" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook size={24} className=" text-logoGreen" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter size={24} className=" text-logoGreen" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
