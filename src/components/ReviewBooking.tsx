import BookingLeft from "./BookingLeft";
import React from "react";
import { TrainDetails } from "../utils/types/types";
import { BookingRight } from "./BookingRight";

interface ReviewBookingProps {
  train: TrainDetails;
}

const ReviewBooking: React.FC<ReviewBookingProps> = ({train}) => {
 

  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 p-6 bg-gray-50 min-h-screen">

      {/* Left Section: Traveler and Contact Details */}
      <BookingLeft/>

      {/* Right Section: Boarding and Billing Details */}
      <BookingRight train={train}/>
    </div>
  );
};

export default ReviewBooking;