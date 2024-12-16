import React, { useState } from "react";
import { IoIosSend } from "react-icons/io";

function Newsletter() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate email
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email address.");
        } else {
            setError("");
            alert(`Email submitted successfully: ${email}`);
            setEmail(""); // Reset the email input
        }
    };

    return (
        <div className="flex w-full  md:w-4/5 mx-auto bg-[#CDEAE1] items-center justify-between rounded-md p-8 lg:p-16">
            <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2D3748] mb-4">
                    Subscribe Newsletter
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-[#4A5568] mb-4">
                    The Travel
                </h3>
                <p className="text-base md:text-lg text-[#4A5568] mb-6">
                    Get inspired! Receive travel discounts, tips and behind the scenes stories.
                </p>
                <div className="w-full max-w-md">
                    <form 
                        className="relative flex items-center"
                        onSubmit={handleSubmit}
                    >
                        <div className="relative w-full">
                            <input
                                type="email"
                                placeholder="email@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full px-4 py-3 pr-12 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#48BB78] transition duration-300 ${
                                    error 
                                    ? "border-red-500 text-red-500" 
                                    : "border-gray-300 text-gray-700"
                                }`}
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#48BB78] hover:text-[#2F855A] transition duration-300"
                            >
                                <IoIosSend size={28} />
                            </button>
                        </div>
                    </form>
                    {error && (
                        <p className="text-sm text-red-500 mt-2">
                            {error}
                        </p>
                    )}
                </div>
            </div>
            <div className="w-2/3 md:w-1/2 flex justify-center items-center">
                <img 
                    src="/Assets/mailbox.png" 
                    alt="Mailbox" 
                    className="w-full h-auto md:max-w-md object-contain"
                />
            </div>
        </div>
    )
}

export default Newsletter;