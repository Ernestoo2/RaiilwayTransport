import React from "react";
import { FaCaretDown, FaRoute, FaTrain } from "react-icons/fa6";

interface TextProps {
    id: number;
    from: string;
    to: string;
    trip: string;
    Depart: string;
    Return: string;
    passenger: string;
    Class: string;
}

export const travelData: TextProps[] = [
    {
        id:1,
        from: "Lahore",
        to: "Karachi",
        trip: "Return",
        Depart: "07 Nov 22",
        Return: "13 Nov 22",
        passenger: "1 Passenger",
        Class: "Economy",
    },
    {
        id: 2,
        from: "Islamabad",
        to: "Peshawar",
        trip: "One-way",
        Depart: "15 Dec 22",
        Return: " 20 Dec 22 ",
        passenger: "2 Passengers",
        Class: "Business",
    },
    {
        id: 3,
        from: "Isman",
        to: "Ihie",
        trip: "One-way",
        Depart: "17 Aug 24",
        Return: "30 Dec 24",
        passenger: "2 Passengers",
        Class: "Business",
    },
    {
        id: 4,
        from: "Festac",
        to: "Patapa",
        trip: "One-way",
        Depart: "7 March 22",
        Return: "4 Nov 24",
        passenger: "2 Passengers",
        Class: "Business",
    },
]


export default function Route({
    id,
    from,
    to,
    trip,
    Depart,
    Return,
    passenger,
    Class

}: TextProps) {
    return (
        <div className="flex flex-col   gap-4 w-full">
            {/* 1. From - To */}
            <div className="relative border border-[#79747E] p-3 rounded-md flex items-center gap-3 text-sm">
                <span className="absolute -top-2 left-3 bg-slate-100 px-1 text-xs text-[#79747E]">
                    From - To
                </span>
                <span className="font-medium">{from} - {to}</span>
                <FaRoute className="text-[#79747E] ml-auto" />
            </div>

            {/* 2. Trip */}
            <div className="relative border border-[#79747E] p-3 rounded-md flex items-center gap-3 text-sm">
                <span className="absolute -top-2 left-3 bg-slate-100 px-1 text-xs text-[#79747E]">
                    Trip
                </span>
                <span className="font-medium">{trip}</span>
                <FaCaretDown className="text-[#79747E] ml-auto" />
            </div>

            {/* 3. Depart - Return */}
            <div className="relative border border-[#79747E] p-3 rounded-md flex items-center gap-3 text-sm">
                <span className="absolute -top-2 left-3 bg-slate-100 px-1 text-xs text-[#79747E]">
                    Depart - Return
                </span>
                <span className="font-medium">{Depart} - {Return}</span>
            </div>

            {/* 4. Passenger - Class */}
            <div className="relative border border-[#79747E] p-3 rounded-md flex items-center gap-3 text-sm">
                <span className="absolute -top-2 left-3 bg-slate-100 px-1 text-xs text-[#79747E]">
                    Passenger - Class
                </span>
                <FaTrain className="text-[#79747E]" />
                <span className="font-medium">{passenger} - {Class}</span>
            </div>
        </div>
    );
}

