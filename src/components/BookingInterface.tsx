import React from "react";
import train from "../Assets/Train1.png";
import { Link } from "react-router-dom";

 

const BookingInterface: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-auto max-w-5xl p-6 mx-auto rounded-lg shadow-md md:flex-row md:items-center md:justify-between">
      {/* Left Side: Text and Inputs */}
      <div className="space-y-6 md:w-1/2">
        <div className="w-[163px] justify-center text-center ">
          <h2 className="bg-[#07561A] text-sm  text-white w-full h-auto rounded-lg py-1 mx-auto">
            Hello Travellers
          </h2>
        </div>

        <h1 className="text-4xl font-bold text-[#2D3748]">
          Make your booking experience easy!
        </h1>
        <p className="text-[#4A5568]">
          Train booking is a process of choosing and purchasing train seats
          online. It is an easy process but we are here to make it much better
          & simple.
        </p>

        {/* Input Section */}
        <div className="grid items-center justify-center grid-cols-2 gap-5 ">
          <div>
            <label
              htmlFor="departure"
              className="block text-[#4A5568] font-medium"
            >

            </label>
            <input
              type="text"
              id="departure"
              className="w-full border-t-0 border-b-2 border-x-0 focus:outline-none focus:border-green-600"
              placeholder="Elelewon Railway Station"
            />
          </div>
          <div>
            <label htmlFor="arrival" className="block text-[#4A5568] font-medium">

            </label>
            <input
              type="text"
              id="arrival"
              className="w-full border-t-0 border-b-2 border-x-0 focus:outline-none focus:border-green-600"
              placeholder="Umuahia Junction"
            />
          </div>
          <div >
            <label htmlFor="date" className="block text-[#4A5568] font-medium">
              
            </label>
            <input
              type="date"
              id="date"
              value={new Date().toISOString().split("T")[0]}
              placeholder="Wed, 16 Nov 2022"
              className="w-full text-gray-500 border-t-0 border-b-2 border-x-0 focus:outline-none focus:border-green-600"
            />
          </div>
        </div>

        {/* Search Button */}
        <div className="flex items-center w-full mx-auto text-center">
          <Link to="/train-search" className="w-full px-6 py-3 text-white transition bg-green-600 rounded-md hover:bg-green-700">
            Search for trains
          </Link>
        </div>
      </div>

      {/* Right Side: Image Placeholder */}
      <div className="mt-6 md:mt-0 md:ml-8 md:w-1/2">
        <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">

          <img src={train} className="w-full h-full rounded-md object-cover" alt="" />        </div>

      </div>
    </div>
  );
};

export default BookingInterface;