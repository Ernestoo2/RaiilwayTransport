import React, { useState } from "react";
import { FaCheckCircle, FaEdit, FaTrash } from "react-icons/fa";

const ReviewBooking: React.FC = () => {
  // State variables for form fields
  const [travelerName, setTravelerName] = useState("Ejigbo Izunna");
  const [isEditing, setIsEditing] = useState(false);
  const [nationality, setNationality] = useState("");
  const [berthPreference, setBerthPreference] = useState("");
  const [nairaRailsID, setNairaRailsID] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [applyCode, setApplyCode] = useState("");

  const [totalCharge, setTotalCharge] = useState(35000);

  // Functions to handle interactions
  const handleSaveTravelerDetails = () => {
    setIsEditing(false);
    alert("Traveler details saved successfully!");
  };

  const handleApplyOffer = (discount: number) => {
    const newCharge = totalCharge - discount;
    setTotalCharge(newCharge);
    alert(`Discount of ₦${discount} applied successfully!`);
  };

  const handleApplyCode = () => {
    if (applyCode === "FIRSTTIME") {
      handleApplyOffer(1000);
    } else {
      alert("Invalid code! Please try again.");
    }
    setApplyCode("");
  };

  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 p-6 bg-gray-50 min-h-screen">
      {/* Left Section: Traveler and Contact Details */}
      <div className="flex-1 space-y-6">
        {/* Traveler Details */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Traveler Details</h3>
          <p className="text-sm text-gray-600 mb-4">
            As per IRCTC guidelines, you can book up to 6 travelers at once.
          </p>

          {/* Traveler Info */}
          <div className="flex items-center gap-4">
            {isEditing ? (
              <input
                type="text"
                value={travelerName}
                onChange={(e) => setTravelerName(e.target.value)}
                className="w-full border-t-0 border-x-0 border-b-2 border-gray-300  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            ) : (
              <p className="text-gray-800 font-medium">{travelerName}</p>
            )}
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-green-500 hover:text-green-600"
            >
              <FaEdit />
            </button>
            <button
              onClick={() => setTravelerName("")}
              className="text-red-500 hover:text-red-600"
            >
              <FaTrash />
            </button>
          </div>

          {/* Additional Traveler Details */}
          {isEditing && (
            <div className="mt-4 space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Nationality"
                  value={nationality}
                  onChange={(e) => setNationality(e.target.value)}
                  className="w-full border-t-0 border-x-0 border-b-2 border-gray-300  px-4 py-2   focus:ring-green-500"
                />
                <input
                  type="text"
                  placeholder="Berth Preference"
                  value={berthPreference}
                  onChange={(e) => setBerthPreference(e.target.value)}
                  className="w-full border-t-0 border-x-0 border-b-2   border-gray-600  px-4 py-2   focus:border-green-500 "
                />
              </div>
              <button
                onClick={handleSaveTravelerDetails}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Save
              </button>
            </div>
          )}
        </div>

        {/* Naira Rails Login */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Naira Rails Login</h3>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Enter Naira Rails User ID"
              value={nairaRailsID}
              onChange={(e) => setNairaRailsID(e.target.value)}
              className="flex-1 border-t-0 border-x-0 border-b-2 border-gray-300  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={() => alert("Naira Rails ID Verified")}
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
            >
              Verify
            </button>
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Details</h3>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              className="w-full border-t-0 border-x-0 border-b-2 border-gray-300  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-t-0 border-x-0 border-b-2 border-gray-300  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
      </div>

      {/* Right Section: Boarding and Billing Details */}
      <div className="w-full md:w-1/3 space-y-6">
        {/* Boarding Details */}
        <div className="bg-green-50 p-4 rounded-lg border-dashed border-[2px] border-[#07561A] shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Boarding Details</h3>
          <p className="text-gray-600">
            <span className="font-medium">Class 2A</span> &bull; Tatkal Quota
          </p>
          <p className="text-gray-600">12430 - PH, ENUGU</p>
          <p className="text-gray-600">Nov 16, 11:25 pm - Nov 17, 7:25 am</p>
          <button className="text-green-500 hover:underline border border-solid border-[#07561A] rounded-md mt-2">Change boarding station</button>
        </div>

        {/* Offers */}
        <div className="bg-white p-4 rounded-lg border-[2px] border-dashed border-[#07561A] shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Offers</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <p className="text-gray-600 flex gap-2">
                <img src="/Assets/Vector.png" alt="" />
                50% off up to ₦100 | Use code <span className="font-medium">BOOKNOW</span>
              </p>
              <button
                onClick={() => handleApplyOffer(100)}
                className="text-green-500 hover:underline"
              >
                Apply
              </button>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600 flex gap-2">
              <img src="/Assets/Vector.png" alt="" />
                20% off | Use code <span className="font-medium">FIRSTTIME</span>
              </p>
              <button
                onClick={() => handleApplyOffer(200)}
                className="text-green-500 hover:underline"
              >
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Apply Code */}
        <div className="bg-white p-4 rounded-lg shadow-md">

          <h3 className="text-lg font-semibold flex gap-2 text-gray-800 mb-2">
          <img src="/Assets/Vector.png" alt="" />
            Apply Code</h3>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Enter Code"
              value={applyCode}
              onChange={(e) => setApplyCode(e.target.value)}
              className="flex-1 border-t-0 border-x-0 border-b-2 border-gray-300  px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={handleApplyCode}
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
            >
              Apply
            </button>
          </div>
        </div>

        {/* Bill Details */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Bill Details</h3>
          <p className="text-gray-600">Base Ticket Fare: ₦30,000.00</p>
          <p className="text-gray-600">Total Travelers: 1</p>
          <p className="text-gray-600">Taxes & GST: ₦5,000.00</p>
          <p className="text-lg font-bold text-gray-800 mt-4">Total Charge: ₦{totalCharge}</p>
        </div>

        {/* Book Now Button */}
        <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
          Book Now
        </button>
        <button className="w-full text-red-500 py-2 mt-2">Cancel</button>
      </div>
    </div>
  );
};

export default ReviewBooking;