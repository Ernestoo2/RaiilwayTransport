import React, { useCallback, useState } from "react";

interface TrainDetails {
  id: number;
  trainName: string;
  runsOn: string;
  departureTime: string;
  arrivalTime: string;
  departureStation: string;
  arrivalStation: string;
  duration: string;
}

const trainsData: TrainDetails[] = [
  {
    id: 1,
    trainName: "12430 - PH ENUGU",
    runsOn: "Everyday",
    departureTime: "11:25 pm",
    arrivalTime: "7:25 am",
    departureStation: "Port Harcourt, Rivers",
    arrivalStation: "Enugu, Enugu",
    duration: "8 hours",
  },
  {
    id: 2,
    trainName: "12320 - EBLE",
    runsOn: "Everyday",
    departureTime: "11:25 pm",
    arrivalTime: "7:25 am",
    departureStation: "Port Harcourt, Rivers",
    arrivalStation: "Enugu, Enugu",
    duration: "8 hours",
  },
  {
    id: 3,
    trainName: "12320 - EBLE",
    runsOn: "Everyday",
    departureTime: "11:25 pm",
    arrivalTime: "7:25 am",
    departureStation: "Port Harcourt, Rivers",
    arrivalStation: "Enugu, Enugu",
    duration: "8 hours",
  },
  {
    id: 4,
    trainName: "12320 - EBLE",
    runsOn: "Everyday",
    departureTime: "11:25 pm",
    arrivalTime: "7:25 am",
    departureStation: "Port Harcourt, Rivers",
    arrivalStation: "Enugu, Enugu",
    duration: "8 hours",
  },
];

interface TrainCardProps {
  train: TrainDetails;
}

const TrainCard: React.FC<TrainCardProps> = ({ train }) => {
  return (
    <div className="border-b border-[#D1D5DB] pb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{train.trainName}</h3>
        <button className="text-sm text-[#16A34A] hover:underline">
          View train time table
        </button>
      </div>
      <p className="text-sm mt-2 text-[#6B7280]">Runs on: {train.runsOn}</p>
      <div className="flex justify-between mt-4">
        <div>
          <p className="text-sm font-medium">{train.departureTime}</p>
          <p className="text-sm text-[#6B7280]">{train.departureStation}</p>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-sm text-[#6B7280]">{train.duration}</span>
          <hr className="border-t border-[#D1D5DB] w-20 mt-2" />
        </div>
        <div className="text-right">
          <p className="text-sm font-medium">{train.arrivalTime}</p>
          <p className="text-sm text-[#6B7280]">{train.arrivalStation}</p>
        </div>
      </div>
    </div>
  );
};

const TrainSearchResults: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("Wed 16");
  const [breakpoint, setBreakpoint] = useState<string>("desktop");

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
    <div className="bg-[#FEF6E7] min-h-screen w-full flex flex-col lg:flex-row">
      {/* Left Section - Filters */}
      <div className="w-full lg:w-2/3 px-6 py-8">
        <h2 className="text-2xl font-semibold text-[#374151] mb-4">
          Your Search Results
        </h2>
        <div className="mb-6 ">
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
          <button className="w-full mt-4 bg-[#16A34A] text-white py-2 px-4 rounded-md text-sm font-medium">
            Search for trains
          </button>
        </div>
        <div className="flex justify-between items-center mb-4">
          {["Tue 15", "Wed 16", "Thu 17", "Fri 18", "Sat 19", "Sun 20"].map(
            (date) => (
              <button
                key={date}
                className={`text-sm rounded-md px-2 py-1 ${
                  selectedDate === date
                    ? "bg-[#16A34A] text-white"
                    : "text-[#374151] bg-white"
                }`}
                onClick={() => handleDateChange(date)}
              >
                {date}
              </button>
            )
          )}
        </div>
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
      <div className="w-full lg:w-2/3 px-6 py-8 bg-white overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#374151]">
            Available Trains
          </h2>
          <span className="text-sm text-[#6B7280]">
            {trainsData.length} trains available
          </span>
        </div>
        <div className="space-y-6">
          {trainsData.map((train) => (
            <TrainCard key={train.id} train={train} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainSearchResults;