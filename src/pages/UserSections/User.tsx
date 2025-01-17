import Account from "./Account";
import Payment from "./Payment";
import React, { useState } from "react";
import Tickets from "./Tickets";

const User: React.FC = () => {
  const [user] = useState({
    name: "Eze Ernest",
    email: "ezeernest@gmail.com",
    phone: "+234 70 466 479 41",
    address: "Umuchima, Futo",
    dob: "17-08-2008",
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
      airlineLogo: "/Assets/emir.png",
    },
    {
      id: 2,
      departure: "Newark (EWR)",
      arrival: "Newark (EWR)",
      time: "1:00 PM - 7:00 PM",
      date: "13-11-2022",
      gate: "B14",
      seat: "132",
      airlineLogo: "/Assets/emir.png",
    },
  ];

  const [methods, setMethods] = useState([
    {
      id: 1,
      name: "Credit Card",
      icon: "/Assets/creditcard.png",
      description: "Pay with your credit card.",
      isSelected: false,
    },
    {
      id: 2,
      name: "PayPal",
      icon: "/Assets/paypal.jpeg",
      description: "Pay via PayPal.",
      isSelected: false,
    },
  ]);

  const handleMethodSelect = (id: number) => {
    setMethods((prev) =>
      prev.map((method) =>
        method.id === id
          ? { ...method, isSelected: true }
          : { ...method, isSelected: false }
      )
    );
  };

  return (
    <div className="w-full p-3">
      {/* Header Section */}
      <div className="w-full mx-auto relative rounded-lg">
        <div
          className="w-full h-auto bg-center bg-cover rounded-t-lg"
          style={{ backgroundImage: "url('public/Assets/image.png')" }}
        ></div>
        <div className="flex flex-col justify-center items-center mx-auto">
          <div className="w-36 h-36 overflow-hidden bg-gray-300 border-4 rounded-full">
            <img
              src="/Assets/Ellipse1.png"
              alt="Profile"
              className="object-fill w-full h-full"
            />
          </div>
          <h1 className="mt-4 text-xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>


      {/* Tabs */}
      <div className="flex justify-center mt-5 space-x-2">
        <button
          onClick={() => setActiveTab("account")}
          className={`px-3 py-2 rounded-t-lg ${
            activeTab === "account" ? "bg-white" : "bg-slate-100"
          }`}
        >
          Account
        </button>
        <button
          onClick={() => setActiveTab("tickets")}
          className={`px-3 py-2 rounded-t-lg ${
            activeTab === "tickets" ? "bg-white" : "bg-slate-100"
          }`}
        >
          Tickets/Bookings
        </button>
        <button
          onClick={() => setActiveTab("payment")}
          className={`px-2 py-2 rounded-t-lg ${
            activeTab === "payment" ? "bg-white" : "bg-slate-100"
          }`}
        >
          Payment Methods
        </button>
      </div>

      {/* Content Section */}
      <div className="p-6 md:px-20 lg:px-40  mt-4 rounded-lg  shadow-md">
        {/* Account Tab */}
        {activeTab === "account" && <Account user={user} />}

        {/* Tickets/Bookings Tab */}
        {activeTab === "tickets" && <Tickets tickets={tickets} />}

        {/* Payment Methods Tab */}
        {activeTab === "payment" && (
          <Payment methods={methods} onMethodSelect={handleMethodSelect} />
        )}
      </div>
    </div>
  );
};

export default User;
