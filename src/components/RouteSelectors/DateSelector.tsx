import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

export const DateSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    
    // Use ISO date format for initial state
    const [departureDate, setDepartureDate] = useState("2022-11-07");
    const [returnDate, setReturnDate] = useState("2022-11-13");

    // Format function to convert date to desired display format
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "2-digit"
        });
    };

    return (
        <div className="relative border border-[#79747E] p-3 rounded-md flex items-center gap-3 text-sm">
           <span className="absolute -top-2 left-3 bg-slate-100 px-1 text-xs text-[#79747E]">Department - Return</span>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center gap-3 text-sm hover:border-gray-400 transition-colors"
            >
                <span className="font-medium text-[13px] ">
                    {formatDate(departureDate)} - {formatDate(returnDate)}
                </span>
                <FaCalendarAlt className="text-[#79747E] ml-auto" />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-20 ">
                    <div className="p-4 grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="departureDate" className="text-xs text-[#79747E] mb-2">Depart: </label>
                            <input
                                id="departureDate"
                                type="date" 
                                value={departureDate} 
                                onChange={(e) => {
                                    setDepartureDate(e.target.value);
                                }} 
                                className="w-full p-2 border rounded"
                            />      
                        </div>
                        <div>
                            <label htmlFor="returnDate" className="text-xs text-[#79747E] mb-2">Return: </label>
                            <input 
                                id="returnDate"
                                type="date" 
                                value={returnDate} 
                                onChange={(e) => {
                                    setReturnDate(e.target.value);
                                    setIsOpen(false);
                                }}
                                className="w-full p-2 border rounded"
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}