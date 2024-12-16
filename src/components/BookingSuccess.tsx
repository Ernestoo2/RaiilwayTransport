import React, { useState } from "react";

const BookingSuccess: React.FC = () => {
    const [ticketDetails] = useState({
        pnr: "1234567890",
        transactionId: "3515118519256378",
        train: "12430 - NDLS LKO AC SF",
        date: {
            departure: "Nov 16",
            arrival: "Nov 17",
        },
        time: {
            departure: "11:25 pm",
            arrival: "7:25 am",
        },
        locations: {
            departure: "Port Harcourt, Rivers",
            arrival: "Enugu, Enugu",
        },
        email: "Ejigou Izuuna (Primary)\nejigouizunna@gmail.com",
        traveller: {
            name: "Ejigou Izuuna",
            age: "24 Yrs",
            gender: "Male",
            status: "Confirmed (CNF)",
            seat: "44 (Lower berth), A1",
        },
        fare: "35000.00",
    });

    return (
        <div className="bg-[#FEF6E7] min-h-screen w-full flex flex-col items-center p-6">
            {/* Success Icon and Message */}
            <div className="text-center">
                <div className="flex justify-center items-center mb-4">
                    <div className="w-16 h-16 bg-[#16A34A] rounded-full flex justify-center items-center">
                        <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>
                <h1 className="text-2xl font-semibold text-[#16A34A]">
                    Congratulations! You have successfully booked tickets
                </h1>
                <p className="text-sm text-[#6B7280] mt-2">
                    Please carry SMS / Email sent to your contact details, along with a relevant ID proof while travelling
                </p>
            </div>

            {/* Ticket Details Container */}
            <div className="w-full max-w-4xl mt-8 flex flex-col lg:flex-row gap-6">
                {/* Left Section - Ticket Details */}
                <div className="w-full lg:w-2/3 border border-[#D1D5DB] bg-white rounded-md p-6">
                    <div className="flex justify-between items-center text-sm text-[#374151]">
                        <span>PNR No: {ticketDetails.pnr}</span>
                        <span>Transaction ID: {ticketDetails.transactionId}</span>
                    </div>

                    <h2 className="text-lg font-bold mt-4">{ticketDetails.train}</h2>

                    {/* Date and Locations */}
                    <div className="flex justify-between mt-4">
                        <div>
                            <p className="text-sm font-medium">{ticketDetails.date.departure}</p>
                            <p className="text-sm">{ticketDetails.time.departure}</p>
                            <p className="text-sm">{ticketDetails.locations.departure}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-sm text-[#9CA3AF]">8 hours</span>
                            <hr className="border-t border-[#D1D5DB] w-24 mt-2" />
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-medium">{ticketDetails.date.arrival}</p>
                            <p className="text-sm">{ticketDetails.time.arrival}</p>
                            <p className="text-sm">{ticketDetails.locations.arrival}</p>
                        </div>
                    </div>

                    {/* Email and Traveller Details */}
                    <p className="text-sm font-medium mt-6">E-Tickets has been sent to:</p>
                    <p className="text-sm whitespace-pre-line">{ticketDetails.email}</p>

                    <div className="mt-6">
                        <h3 className="text-lg text-center font-medium">Traveller Details</h3>
                        <span>
                            <p className="text-sm">{ticketDetails.traveller.name}</p>
                        </span>

                        <span className="flex justify-between">
                            <p className="text-sm">Age: </p>
                            <p>{ticketDetails.traveller.age}</p>
                        </span>

                        <span className="flex justify-between">
                            <p className="text-sm">Gender: </p>
                            <p>{ticketDetails.traveller.gender}</p>

                        </span>

                        <span className="flex justify-between">
                            <p className="text-sm">Booking Status: </p> <p>{ticketDetails.traveller.status}</p>
                        </span>


                        <span className=" flex justify-between ">
                            <p className="text-sm">Seat/Coach No.:</p> <p className="flex">{ticketDetails.traveller.seat}</p>
                        </span>
                    </div>

                    {/* Total Fare */}
                    <div className="mt-6 flex justify-between border-t border-[#D1D5DB] pt-4">
                        <span className="text-sm font-medium">Total Fare</span>
                        <span className="block text-lg font-bold">₹{ticketDetails.fare}</span>
                    </div>
                </div>

                {/* Right Section - QR Code and Actions */}
                <div className="w-full lg:w-1/3 flex flex-col items-center bg-white border border-[#D1D5DB] rounded-md p-6">
                    <div className="flex justify-center items-center">
                        <div className="w-32 h-32 bg-gray-200 rounded-md flex items-center justify-center">
                            {/* Placeholder for QR Code */}
                            <span className="text-gray-500">QR Code</span>
                        </div>
                    </div>
                    <p className="text-sm mt-4 text-center text-[#6B7280]">
                        Scan the code to view in any device
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 w-full flex flex-col gap-3">
                        <button className="w-full bg-[#16A34A] text-white py-2 px-4 rounded-md text-sm font-medium">
                            Print Ticket (English)
                        </button>
                        <button className="w-full bg-[#10B981] text-white py-2 px-4 rounded-md text-sm font-medium">
                            Book another ticket
                        </button>
                        <button className="w-full bg-[#10B981] text-white py-2 px-4 rounded-md text-sm font-medium">
                            Download Ticket
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-12 text-center text-sm text-[#6B7280]">
                <p>Cancellation Policy | Terms & Conditions | Travel Insurance</p>
            </div>
        </div>
    );
};

export default BookingSuccess;