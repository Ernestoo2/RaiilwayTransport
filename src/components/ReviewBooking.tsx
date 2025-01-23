import BookingLeft from "./BookingLeft";
import BookingRight from "./BookingRight";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewBooking: React.FC = () => {
 

  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 p-6 bg-gray-50 min-h-screen">

      {/* Left Section: Traveler and Contact Details */}
      <BookingLeft/>

      {/* Right Section: Boarding and Billing Details */}
      <BookingRight/>
    </div>
  );
};

export default ReviewBooking;