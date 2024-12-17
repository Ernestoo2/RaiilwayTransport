import React, { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdAirlineSeatReclineNormal, MdDateRange } from "react-icons/md";

/* eslint-disable @typescript-eslint/no-unused-vars */

const User: React.FC = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@gmail.com",
    phone: "+1 000-000-0000",
    address: "St 32 main downtown, Los Angeles, California, USA",
    dob: "01-01-1992",
  });

  const [activeTab, setActiveTab] = useState("account");

  const tickets = [
    {
      id: 1,
      departure: "Newark (EWR)",
      arrival: "Newark (EWR)",
      time: "12:00 PM - 6:00 PM",
      date: "12-11-2022",
      gate: "A12",
      seat: "128",
      airlineLogo: "/Assets/emir.png", // Placeholder image
    },
    {
      id: 2,
      departure: "Newark (EWR)",
      arrival: "Newark (EWR)",
      time: "1:00 PM - 7:00 PM",
      date: "13-11-2022",
      gate: "B14",
      seat: "132",
      airlineLogo: "/Assets/emir.png", // Placeholder image
    },
  ];

  return (
    <div className="w-full   p-3 ">
      {/* Header Section */}
      <div className=" w-full mx-auto   relative  rounded-lg">
        <div
          className="h-auto bg-center  bg-cover rounded-t-lg"
          style={{ backgroundImage: "url('/placeholder-cover.jpg')" }}
        ></div>
        <div className=" flex flex-col  justify-center items-center mx-auto    ">
          <div className="w-24 h-24  overflow-hidden bg-gray-300 border-4 rounded-full">
            <img
              src="/placeholder-profile.jpg"
              alt="Profile"
              className="object-fill w-full h-full"
            />
          </div>
          <h1 className="mt-4 text-xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-20 space-x-2">
        <button
          onClick={() => setActiveTab("account")}
          className={`px-3 py-2 rounded-t-lg ${activeTab === "account" ? "bg-white" : "bg-slate-100"
            }`}
        >
          Account
        </button>
        <button
          onClick={() => setActiveTab("tickets")}
          className={`px-3 py-2 rounded-t-lg ${activeTab === "tickets" ? "bg-white" : "bg-slate-100"
            }`}
        >
          Tickets/Bookings
        </button>
        <button
          onClick={() => setActiveTab("payment")}
          className={`px-2 py-2 rounded-t-lg ${activeTab === "payment" ? "bg-white" : "bg-slate-100"
            }`}
        >
          Payment Methods
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6 mt-4 rounded-lg shadow-md">
        {/* Account Tab */}
        {activeTab === "account" && (
          <div>
            <h2 className="mb-4 text-lg font-bold">Account</h2>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="font-bold">Name</p>
                <p>{user.name}</p>
              </div>
              <button className="col-start-3 px-4 py-2 text-white bg-green-500 rounded">Change</button>

              <div>
                <p className="font-bold">Email</p>
                <p>{user.email}</p>
              </div>
              <button className="col-start-3 px-4 py-2 text-white bg-green-500 rounded">Change</button>

              <div>
                <p className="font-bold">Phone number</p>
                <p>{user.phone}</p>
              </div>
              <button className="col-start-3 px-4 py-2 text-white bg-green-500 rounded">Change</button>

              <div>
                <p className="font-bold">Address</p>
                <p>{user.address}</p>
              </div>
              <button className="col-start-3 px-4 py-2 text-white bg-green-500 rounded">Change</button>

              <div>
                <p className="font-bold">Date of birth</p>
                <p>{user.dob}</p>
              </div>
              <button className="col-start-3 px-4 py-2 text-white bg-green-500 rounded">Change</button>
            </div>
          </div>
        )}

        {/* Tickets/Bookings Tab */}
        {activeTab === "tickets" && (
          <div>
            <div className="flex items-center gap-2 justify-between">
              <h2 className="text-lg font-bold">Tickets/Bookings</h2>
              <select className=" py-2 rounded" title="select">
                <option value="" disabled hidden>Select a Ticket </option> {/* Placeholder */}
                <option value="all">Ticket</option>
                <option value="upcoming">Upcoming</option>
                <option value="past">Past</option>
              </select>

            </div>

            <div className="mt-6">
              {tickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="flex items-center  justify-between py-4 px-auto mb-4 rounded shadow"
                >
                  {/* Ticket Info */}
                  <div className="flex items-center pl-2 space-x-2">
                    {/* Placeholder for Airline Logo */}
                    <div className="w-16 h-20   bg-gray-200 rounded-lg">
                      <img src={ticket.airlineLogo} alt="Airline Logo" className="object-cover w-full h-full" />
                    </div>
                    <div>
                      <p className="font-bold text-xs md:text-base lg:text-lg w-full  flex-wrap flex-1">{ticket.departure} → {ticket.arrival}</p>
                      <p className="text-gray-600 text-xs md:text-base lg:text-lg">{ticket.time}</p>

                      {/* Additional Info */}
                      <div className="flex items-center mt-2 space-x-1  text-sm text-gray-600">
                        <div className="flex items-center">
                          <MdDateRange size={20} className="mr-1 text-gray-500" />
                          <p className="text-xs md:text-base lg:text-lg">{ticket.date}</p>
                        </div>
                        <div className="flex items-center">
                          <HiOutlineLocationMarker size={20} className="mr-1 text-gray-500" />
                          <p className="text-xs md:text-base lg:text-lg">Gate {ticket.gate}</p>
                        </div>
                        <div className="flex items-center">
                          <MdAirlineSeatReclineNormal size={20} className="mr-1 text-gray-500" />
                          <p className="text-xs md:text-base lg:text-lg">Seat {ticket.seat}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Download Button */}
                  <button className="px-2 text-xs md:text-base lg:text-lg py-2 text-white bg-green-500 rounded">Download Ticket</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Payment Methods Tab */}
        {activeTab === "payment" && (
          <div>
            <h2 className="mb-4 text-lg font-bold">Payment Methods</h2>
            <p>Payment methods content goes here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;