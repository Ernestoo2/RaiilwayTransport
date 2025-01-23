import React from "react";
import Tripselector from "./RouteSelectors/Tripselector";
import { RouteComponentProps } from "../utils/types/types";
import { DateSelector } from "./RouteSelectors/DateSelector";
import { FromToSelector } from "./RouteSelectors/FromToSelector";
import { PassengerClassSelector } from "./RouteSelectors/PassengerClassSelector";

export default function Route( { route, onUpdate} : RouteComponentProps ){
    return (
        <div className="flex flex-col flex-wrap sm:flex-row sm:justify-center sm:items-center w-full gap-4">
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

