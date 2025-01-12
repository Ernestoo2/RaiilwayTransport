import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

const Tripselector = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedTrip, setselectedTrip] = useState("One-way");

    const tripOptions = ["One-way", "Round-trip", "Multi-city", "Return"] 

    return (
        <div className="relative border border-[#79747E] p-3 rounded-md flex items-center gap-3 text-sm">
            {/* {main button } */}
            <span
                className="absolute -top-2 left-3 bg-slate-100 px-1 text-xs text-[#79747E]"
                >Trip</span>
            <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full relative  rounded-md flex items-center gap-3 text-sm hover:boder-gray-400 transition-colors"
            >
                
                <span className="font-medium">{selectedTrip}</span>
                <FaCaretDown className={`text-[#77747E] ml-auto transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}/>
            </button>
            {/* {dropdown menu} */}
            {isOpen && (
                <div
                className="absolute top-full left-0 mt-1 bg-white border-gray-200 rounded-md shadow-lg z-10 "
                >
                    {tripOptions.map((option, index) => (
                        <button
                        key={option}
                        onClick={() => {
                            setselectedTrip(option)
                            setIsOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${selectedTrip === option ? "bg-gray-50 font-medium" : ""}`}
                        >
                            {option}
                        </button>
                    ))}
                    </div>
            )}
        </div>
    )
}

export default Tripselector
