import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (email) {
      alert("A password recovery link has been sent to your email.");
      navigate("/verify-login"); // Route to verify login page
    } else {
      alert("Please enter your email address.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F4FFF8] p-4">
      {/* Back to Login */}
      <button
        onClick={() => navigate("/login")}
        className="self-start text-black text-sm flex items-center space-x-1 mb-6"
      >
        <span>&larr;</span>
        <span>Back to login</span>
      </button>

      {/* Forget Password Section */}
      <div className="w-full max-w-md p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Forgot your password?</h2>
        <p className="text-gray-600 mb-6">
          Don’t worry, happens to all of us. Enter your email below to recover your password.
        </p>

        {/* Email Input */}
        <div className="relative mb-6">
          <label
            htmlFor="email"
            className="absolute -top-2 left-3 bg-[#F4FFF8] px-1 text-sm text-[#4A5568]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder="john.doe@gmail.com"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#8DD3BB] text-white py-2 rounded-md hover:bg-green-600 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;