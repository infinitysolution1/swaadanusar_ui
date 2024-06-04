import React from "react";
import RevealOnScroll from "./RevealOnScroll";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-cream  md:py-[5vh] pb-[5vh] md:pb-[10vh]">
      <RevealOnScroll addedClasses="w-10/12 flex flex-col items-center animate-slideUp">
        <h1 className=" text-2xl md:text-4xl font-bold text-center text-darkBrown">
          Contact <span className=" text-logoGreen">Us</span>
        </h1>
        <p className="text-sm text-center text-darkBrown">
          Contact us for any queries or feedback.
        </p>
      </RevealOnScroll>
      <div className=" w-10/12 md:w-5/12 flex flex-col items-center justify-center">
        <form className="mt-8 w-full">
          <div className="mb-4 flex flex-col">
            <label
              htmlFor="name"
              className="block text-darkBrown text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className=" appearance-none border-b-[1px] border-logoGreen bg-cream w-full py-2 px-3 text-darkBrown leading-tight focus:outline-none focus:shadow-none"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-darkBrown text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className=" appearance-none border-b-[1px] border-logoGreen bg-cream w-full py-2 px-3 text-darkBrown leading-tight focus:outline-none focus:shadow-none"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-darkBrown text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              className=" appearance-none border-b-[1px] border-logoGreen bg-cream w-full py-2 px-3 text-darkBrown leading-tight focus:outline-none focus:shadow-none"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-logoGreen hover:bg-darkGreen text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
