import "../App.css";
import React, { Component, useState } from "react";
import Route from "../components/Route";
import { FaPlane, FaTrain } from "react-icons/fa6";

import { 
  initialTravelData,
  TripTypes,
  ClassTypes,
  PassengerCount,
  TravelFormState,
  TravelRoute

} from "../utils/types/types";

export const RouteUi = () => {
  const [selectedFilter, setSelectedFilter] = useState("flights"); 
  const [routes, setRoutes] = useState<TravelRoute[]>(initialTravelData);

  // Update a specific route based on its ID
  const handleRouteUpdate = (id: number, updatedData: Partial<TravelRoute>) => {
    setRoutes((prevRoutes) =>
      prevRoutes.map((route) =>
        route.id === id ? { ...route, ...updatedData } : route
      )
    );
  };
   
  
    // Filter data based on selected filter
  const filteredData =
  selectedFilter === "flights"
    ? routes.filter((card) => card.id === 1 || card.id === 2)
    : routes.filter((card) => card.id === 3 || card.id === 4);

    return (
      <div className="bg-container mb-36 md:mb-[100px]">
        {/* Hero Content */}
        <div className="hero-content">
          <h2 className="text-2xl md:text-3xl mb-2">Helping Others</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Live & Travel</h1>
          <p className="text-lg md:text-xl">Ember Special offers to suit your travel comforts</p>
        </div>

        {/* Route Container */}
        <div className="route-container md:pb-[-150px] px-[20px]">
          <div className="w-full  bg-slate-100 flex  rounded shadow-md shadow-slate-600 flex-col">
            {/* Filter Buttons */}
            <div className="flex justify-center  items-center gap-4 mt-4">
              {/* Flights Button */}
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer ${
                  selectedFilter === "flights"
                    ? "border border-[#79747E] bg-gray-200"
                    : "bg-gray-100"
                }`}
                onClick={() => setSelectedFilter("flights")}
              >
                <FaPlane className="text-[#79747E]" />
                <span className="text-sm font-medium text-[#79747E]">Flights</span>
              </div>

              {/* Stays Button */}
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer ${
                  selectedFilter === "stays"
                    ? "border border-[#79747E] bg-gray-200"
                    : "bg-gray-100"
                }`}
                onClick={() => setSelectedFilter("stays")}
              >
                <FaTrain className="text-[#79747E]" />
                <span className="text-sm font-medium text-[#79747E]">Stays</span>
              </div>
            </div>

            {/* Routes Display */}
            <div className="w-full h-auto gap-[40px] flex  flex-col  px-7 mx-auto my-7">
              {filteredData.map((card:any) => (
                <Route
                  key={card.id}
                  id={card.id}
                  from={card.from}
                  to={card.to}
                  trip={card.trip}
                  Depart={card.Depart}
                  Return={card.Return}
                  passenger={card.passenger}
                  Class={card.Class}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default RouteUi;