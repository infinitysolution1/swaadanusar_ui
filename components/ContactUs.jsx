"use client";
import React, { useState, useEffect } from "react";
import RevealOnScroll from "./RevealOnScroll";
import { set, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

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
    <div className="flex flex-col items-center justify-center w-full bg-cream  py-[5vh] md:py-[10vh]">
      <RevealOnScroll addedClasses="w-10/12 flex flex-col items-center animate-slideUp">
        <h2 className="text-3xl md:text-4xl font-bold text-start text-darkBrown">
          Contact <span className=" text-logoGreen">Us</span>
        </h2>
        <p className="text-sm text-center text-darkBrown">
          Contact us for any queries or feedback.
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
              <p className=" text-xs text-red-500">{errors.email.message}</p>
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
              <p className=" text-xs text-red-500">{errors.message.message}</p>
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
  );
};

export default ContactUs;
