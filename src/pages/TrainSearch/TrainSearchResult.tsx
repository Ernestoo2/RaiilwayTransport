import DateSlider from "./DateSlidder";
import React, { useCallback, useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import { getTrainDetails } from "../../utils/api";
import { TrainDetails } from "../../utils/types/types";
import { TrainCard } from "./TrainCard";

/* eslint-disable @typescript-eslint/no-unused-vars */




const TrainSearchResults: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("Wed 16");
  const [breakpoint, setBreakpoint] = useState<string>("desktop");
  const [trainDetails, setTrainDetails] = useState<TrainDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getTrainDetails().then((response) => {
      if (response.success) {
        setTrainDetails(response.data);
      }
      setLoading(false);
    });
  }, []);
  // Mock callback to detect breakpoints
  const handleBreakpointChange = useCallback(() => {
    const width = window.innerWidth;
    if (width < 768) {
      setBreakpoint("mobile");
    } else if (width < 1024) {
      setBreakpoint("tablet");
    } else {
      setBreakpoint("desktop");
    }
  }, []);

  React.useEffect(() => {
    handleBreakpointChange();
    window.addEventListener("resize", handleBreakpointChange);
    return () => window.removeEventListener("resize", handleBreakpointChange);
  }, [handleBreakpointChange]);

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen w-full flex flex-col md:flex-row">
      {/* Left Section - Filters */}
      <div className="w-full lg:w-2/3 px-6 py-8">
        <h2 className="text-2xl font-semibold text-[#374151] mb-4">
          Your Search Results
        </h2>
        <div className="mb-6 flex flex-col   ">
          <div className="flex gap-6 items-center">
            <div className="border-t-0 border-x-0 border-b-2 border-[#D1D5DB]  p-4 ">
              <p className="text-sm text-[#6B7280]">
                NDLS, New Delhi Railway Station
              </p>
            </div>
            <div className="border-t-0 w-1/2 border-x-0 border-b-2 border-[#D1D5DB]  p-4 ">

              <p className="text-sm text-[#6B7280]">LJN, Lucknow Junction</p>
            </div>
          </div>
          <div className="w-full h-auto flex text-center mt-4 items-center mx-auto ">
            <Link to="/booking-success" className="w-full  py-2 px-4 bg-[#16A34A]  text-white  rounded-md text-sm font-medium">
              Search for trains
            </Link>
          </div>
        </div>
        <DateSlider/>
        <div className="mb-6">
          <img
            src="/Assets/Searchpic.png"
            alt="Train Planning"
            className="rounded-md w-full h-auto mb-4"
          />
          <p className="text-sm font-medium">Planning your holidays?</p>
        </div>
        <div>
          <img
            src="/Assets/Searchpic.png"
            alt="Train Tourism"
            className="rounded-md w-full h-auto mb-4"
          />
          <p className="text-sm font-medium">Train tourism packages</p>
          <p className="text-sm text-[#6B7280]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            eleifend magna.
          </p>
        </div>
      </div>

      {/* Right Section - Train List */}
      <div className="w-full lg:w-2/3 px-6 py-8 bg-[#F5F5F5] overflow-y-auto">
        <div className=" justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#374151]">Available Trains</h2>
          <hr className="w-full h-1 bg-[#80808080]" />
                  
          {loading ? (
            Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} height={120} className="mb-4" />
            ))
          ) : (
            trainDetails.map((train) => (
              <TrainCard key={train.id} train={train} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainSearchResults;


