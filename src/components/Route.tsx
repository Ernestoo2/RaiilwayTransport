import React, { useState } from "react";
import Tripselector from "./RouteSelectors/Tripselector";
import { FaCaretDown, FaRoute, FaTrain } from "react-icons/fa6";
import { DateSelector } from "./RouteSelectors/DateSelector";
import { FromToSelector } from "./RouteSelectors/FromToSelector";
import { PassengerClassSelector } from "./RouteSelectors/PassengerClassSelector";

export default function Route() {
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

