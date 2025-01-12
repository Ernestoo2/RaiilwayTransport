import React, { useState } from "react";
import Tripselector from "./RouteSelectors/Tripselector";
import { FaCaretDown, FaRoute, FaTrain } from "react-icons/fa6";
import { DateSelector } from "./RouteSelectors/DateSelector";
import { FromToSelector } from "./RouteSelectors/FromToSelector";
import { PassengerClassSelector } from "./RouteSelectors/PassengerClassSelector";

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
            <FromToSelector/>

            {/* 2. Trip */}
            <Tripselector/>

            {/* 3. Depart - Return */}
            <DateSelector/>

            {/* 4. Passenger - Class */}
            <PassengerClassSelector/>
        </div>
    );
}

