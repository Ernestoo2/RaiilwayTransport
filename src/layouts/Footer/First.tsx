import React, { useState } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { ImSkype } from "react-icons/im";
import { IoIosSend } from "react-icons/io";

const First = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validate email
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      alert(`Email submitted successfully: ${email}`);
      setEmail(""); // Reset the email input
    }
  };

  return (
    <div className="w-full p-14 h-auto bg-[#07561A] rounded-tr-[20px] border-[1px] rounded-bl-[20px]">
      {/* Header Section */}
      <div className="grid grid-cols-2 md:grid-cols-none md:flex ">
        {/* Naija Rails Title */}
        <h1 className="w-3/4  font-bold">
          <span className="text-white">Naija</span>
          <span className="text-black">Rails</span>
        </h1>

        {/* Description Section */}
        <div className="w-full flex flex-col h-auto">
          <h2 className="w-full h-auto text-white">Planning your next trip?</h2>
          <p className="w-full h-auto break-normal text-white">
            Naija Rails is a community-driven platform that connects Nigerians and locals with Nigerian businesses and services.
          </p>
        </div>

        {/* Email Form Section */}
        <div className="flex w-full h-auto">
          <form
            className="flex items-center  text-white"
            id="emailForm"
            onSubmit={handleSubmit}
          >
            <div className="relative w-full">
              {/* Email Input */}
              <input
                type="email"
                placeholder="email@gmail.com"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition ${error ? "border-red-500" : "border-gray-300"
                  }`}
              />

              {/* Submit Button as Icon */}
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700 transition"
              >
                <IoIosSend size={24} />
              </button>
            </div>

            {/* Error Message */}
            {error && (
              <p className="ml-4 text-sm text-red-500" id="errorMessage">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>



      {/* Footer Links and Social Icons Section */}
      <div className="flex flex-col mt-6">
        {/* Links Section */}
        <div
          className="flex flex-col md:flex-row flex-wrap w-full gap-4 md:gap-6 justify-center lg:justify-evenly text-base text-white"
        >
          <a href="/src/ui/MoreFirstUi.tsx" className="hover:underline">About us</a>
          <a href="/src/ui/MoreFirstUi.tsx" className="hover:underline">Mobile</a>
          <a href="/src/ui/MoreFirstUi.tsx" className="hover:underline">Privacy</a>
          <a href="/src/ui/MoreFirstUi.tsx" className="hover:underline">Terms of use</a>
          <a href="/src/ui/MoreFirstUi.tsx" className="hover:underline">Career</a>
          <a href="/src/ui/MoreFirstUi.tsx" className="hover:underline">Customer Service</a>
        </div>

        {/* Social Icons Section */}
        <span
          className="flex justify-center md:justify-evenly items-center gap-4 mt-6"
        >
          <FaSquareFacebook className="fill-[#E2E2ED] w-7 h-7 hover:scale-110 transition-transform" />
          <FaLinkedin className="fill-[#E2E2ED] w-7 h-7 hover:scale-110 transition-transform" />
          <FaGithubSquare className="fill-[#E2E2ED] w-7 h-7 hover:scale-110 transition-transform" />
          <ImSkype className="fill-[#E2E2ED] w-7 h-7 hover:scale-110 transition-transform" />
          <FaInstagramSquare className="fill-[#E2E2ED] w-7 h-7 hover:scale-110 transition-transform" />
        </span>
      </div>
    </div>
  );
};

export default First;