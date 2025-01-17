import React, { useState } from "react";
import Tripselector from "./RouteSelectors/Tripselector";
import { FaCaretDown, FaRoute, FaTrain } from "react-icons/fa6";
import { RouteComponentProps } from "../utils/types/types";
import { DateSelector } from "./RouteSelectors/DateSelector";
import { FromToSelector } from "./RouteSelectors/FromToSelector";
import { PassengerClassSelector } from "./RouteSelectors/PassengerClassSelector";

export default function Route( { route, onUpdate} : RouteComponentProps ){
    return (
        <div className="flex flex-col w-full gap-4">
            {/* 1. From - To */}
            <FromToSelector/>

            {/* 2. Trip */}
            <Tripselector
            value={route.trip}
            onChange={(value) => onUpdate({...route, trip: value })}
            />

            {/* 3. Depart - Return */}
            <DateSelector/>

            {/* 4. Passenger - Class */}
            <PassengerClassSelector/>
        </div> 
    );
}

