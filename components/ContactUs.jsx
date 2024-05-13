import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-cream py-[5vh]">
      <div className="w-10/12 flex flex-col items-center">
        <h1 className=" text-2xl md:text-4xl font-bold text-center text-darkBrown">
          Contact <span className=" text-logoGreen">Us</span>
        </h1>
        <p className="text-sm text-center text-darkBrown">
          Contact us for any queries or feedback.
        </p>
      </div>
      <div className="w-10/12 flex flex-col items-center justify-center">
        <form className="mt-8 w-full max-w-md">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-darkBrown text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-darkBrown leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-darkBrown leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-darkBrown leading-tight focus:outline-none focus:shadow-outline"
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
