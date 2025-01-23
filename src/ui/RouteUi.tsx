import "../App.css";
import React, { useEffect, useState } from "react";
import Route from "../components/Route";
import { FaPlane, FaTrain } from "react-icons/fa6";
import { fetchTravelRoutes } from "../utils/api";
import { ApiResponse, TravelRoute } from "../utils/types/types";

export const RouteUi = () => {
  const [selectedFilter, setSelectedFilter] = useState<"flights" | "stays">("flights");
  const [routes, setRoutes] = useState<TravelRoute[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response: ApiResponse<TravelRoute[]> = await fetchTravelRoutes();
      if (response.success) {
        setRoutes(response.data);
      } 
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleRouteUpdate = (id: number, updatedData: Partial<TravelRoute>) => {
    setRoutes((prevRoutes) =>
      prevRoutes.map((route) =>
        route.id === id ? { ...route, ...updatedData } : route
      )
    );
  };

  const getRandomRoute = () => {
    const filteredData =
      selectedFilter === "flights"
        ? routes.filter((route) => route.id === 1 || route.id === 2) // Adjust IDs for flights
        : routes.filter((route) => route.id === 3 || route.id === 4); // Adjust IDs for stays

    if (filteredData.length === 0) {
      return null;
    }

    // Randomly pick one route
    const randomIndex = Math.floor(Math.random() * filteredData.length);
    return filteredData[randomIndex];
  };

  const randomRoute = getRandomRoute();

  return (
    <div className="bg-container  mb-36 md:mb-[100px]">
      {/* Hero Content */}
      <div className="hero-content">
        <h2 className="text-2xl md:text-3xl mb-2">Helping Others</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Live & Travel</h1>
        <p className="text-lg md:text-xl">Ember Special offers to suit your travel comforts</p>
      </div>

      {/* Route Container */}
      <div className="route-container md:pb-[-150px] px-[20px]">
        <div className="w-full bg-slate-100 flex rounded shadow-md shadow-slate-600 flex-col">
          {/* Filter Buttons */}
          <div className="flex mx-5  sm:pr-11 sm:mx-20  gap-4 mt-4">
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
          {loading ? (
            <div className="w-full h-auto text-center my-7">Loading...</div>
          ) : randomRoute ? (
            <div className="w-full   justify-center h-auto px-7 mx-auto my-7">
              <Route
                key={randomRoute.id}
                route={randomRoute}
                onUpdate={(updatedRoute) =>
                  handleRouteUpdate(randomRoute.id, updatedRoute)
                }
              />
            </div>
          ) : (
            <div className="w-full h-auto text-center my-7">
              No routes available for {selectedFilter}.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RouteUi;
