import { useState } from "react";
import { FaTrain } from "react-icons/fa";

export const PassengerClassSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [Passengers, setPassengers] = useState(2);
    const [selectedClass, setSelectedClass] = useState("Economy");

    const classOptions = ["Economy", "Business", "First Class"];

    return (
        <div className="relative border border-[#79747E] p-3 rounded-md flex items-center gap-3 text-sm">
            <span
                className="absolute -top-2 left-3 bg-slate-100 px-1 text-xs text-[#79747E]"
            >Passenger - Class</span>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full relative border border-[#79747E] p-3 rounded-md flex items-center gap-3 text-sm "
            >

                <FaTrain className="text-[#79747E] ml-auto" />
                <span className="font-medium">
                    {Passengers} Passenger{Passengers > 1 ? "s" : ""} - {selectedClass}
                </span>
            </button>
            {isOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-20">
                    <div className="p-4">
                        <div className="mb-4">
                            <p className="text-xs text-[#79747E] mb-2">Pasengers:</p>
                            <div>
                                <button
                                    onClick={() => setPassengers(Math.max(1, Passengers - 1))}
                                    className="px-3 py-1 border rounded hover:bg-gray-50"
                                >
                                    -
                                </button>
                                <span>{Passengers}</span>
                                <button
                                    onClick={() => setPassengers(Math.min(10, Passengers + 1))}
                                    className="px-3 py-1 border rounded hover:bg-gray-50 ml-2"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                        <div>
                            <p>Class:</p>
                            {classOptions.map((option, index) => (
                                <button
                                key={option}
                                onClick={() => {
                                    setSelectedClass(option)
                                    setIsOpen(false)
                                }}
                                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors 
                                    ${selectedClass === option ? "bg-gray-50 font-medium" : ""}`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
