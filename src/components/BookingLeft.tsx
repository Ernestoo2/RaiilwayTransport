import React, { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface Traveler {
  name: string;
  age: string;
  gender: string;
  nationality: string;
  berthPreference: string;
}

const BookingLeft: React.FC = () => {
  const [travelers, setTravelers] = useState<Traveler[]>([]);
  const [newTraveler, setNewTraveler] = useState<Traveler>({
    name: "",
    age: "",
    gender: "",
    nationality: "",
    berthPreference: "",
  });
  const [nairaRailsID, setNairaRailsID] = useState("");

  const addTraveler = () => {
    if (
      newTraveler.name &&
      newTraveler.age &&
      newTraveler.gender &&
      newTraveler.nationality &&
      newTraveler.berthPreference
    ) {
      setTravelers([...travelers, newTraveler]);
      setNewTraveler({
        name: "",
        age: "",
        gender: "",
        nationality: "",
        berthPreference: "",
      });
    } else {
      alert("Please fill in all fields before adding a traveler.");
    }
  };

  const removeTraveler = (index: number) => {
    setTravelers(travelers.filter((_, i) => i !== index));
  };

  const handleNairaRailsVerification = () => {
    if (nairaRailsID.trim()) {
      alert(`Naira Rails ID "${nairaRailsID}" verified successfully!`);
    } else {
      alert("Please enter a valid Naira Rails User ID.");
    }
  };

  return (
    <div className="flex-1 space-y-6">
      <h2 className="text-2xl font-semibold text-[#07561A]">Review your booking</h2>

      {/* Traveler Details */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-md font-semibold text-gray-800">Traveler Details</h3>
          <p className="text-sm text-gray-600">
            As per IRCTC guidelines, you can book up to 6 travelers at once.
          </p>
<<<<<<< HEAD
          <img src="/Assets/plussign.png" className="object-scale-down w-10 h-10" alt="" />
=======
          <img src="../Assets/plussign.png" className="object-scale-down w-10 h-10" alt="" />
>>>>>>> c5ac88b (Trials)
        </div>

        <ol className="space-y-4">
          {travelers.map((traveler, index) => (
            <li key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-gray-800 font-medium">{traveler.name}</span>
                <button
                  title="button"
                  onClick={() => removeTraveler(index)}
                  className="text-red-500 hover:text-red-600"
                >
                  <FaTrash />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <span className=" text-gray-600 text-sm">{traveler.age}</span>
                <span className="text-gray-600 text-sm">{traveler.gender}</span>
                <span className="text-gray-600 text-sm">{traveler.nationality}</span>
                <span className="text-gray-600 text-sm">{traveler.berthPreference}</span>
              </div>
            </li>
          ))}
        </ol>

        <div className=" gap-4 mt-4 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Name of Traveller"
              value={newTraveler.name}
              onChange={(e) => setNewTraveler({ ...newTraveler, name: e.target.value })}
              className="w-full border-t-0 border-x-0 border-b-2 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Age"
              value={newTraveler.age}
              onChange={(e) => setNewTraveler({ ...newTraveler, age: e.target.value })}
              className="w-full border-t-0 border-x-0 border-b-2 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <div className="relative w-full">
              <select
                value={newTraveler.gender}
                onChange={(e) => setNewTraveler({ ...newTraveler, gender: e.target.value })}
                className="w-full appearance-none border-t-0 border-x-0 border-b-2 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 bg-transparent"
              >
                <option className="text-gray-500" value="" disabled hidden>
                  Gender
                </option>
                <option value="M">M</option>
                <option value="F">F</option>
              </select>
              
            </div>
            <input
              type="text"
              placeholder="Nationality"
              value={newTraveler.nationality}
              onChange={(e) => setNewTraveler({ ...newTraveler, nationality: e.target.value })}
              className="w-full border-t-0 border-x-0 border-b-2 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Berth Preference"
              value={newTraveler.berthPreference}
              onChange={(e) => setNewTraveler({ ...newTraveler, berthPreference: e.target.value })}
              className="w-full border-t-0 border-x-0 border-b-2 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            onClick={addTraveler}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </div>

      {/* Naira Rails Login */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Naira Rails Login</h3>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Enter Naira Rails User ID"
            value={nairaRailsID}
            onChange={(e) => setNairaRailsID(e.target.value)}
            className="flex-1 border-t-0 border-x-0 border-b-2 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Link
            to="/verify-login"
            onClick={handleNairaRailsVerification}
            className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
          >
            Verify
          </Link>
        </div>
      </div>

      {/* Contact Details */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="w-4/5 items-center flex justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-800 ">Contact Details</h3>
          <p className="text-sm">Your ticket info will be sent here</p>
        </div>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Mobile Number"
            className="w-full border-t-0 border-x-0 border-b-2 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            placeholder="Email ID"
            className="w-full border-t-0 border-x-0 border-b-2 border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingLeft;