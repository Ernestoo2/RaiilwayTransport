import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SetPassword: React.FC = () => {
  const [password, setPassword] = useState(""); // For new password
  const [confirmPassword, setConfirmPassword] = useState(""); // For confirming new password
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Toggle confirm password visibility
  const navigate = useNavigate();

  const handleVerify = () => {
    

    // Ensure both password fields are filled
    if (password === "" || confirmPassword === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Check password length (must be exactly 8 characters)
    if (password.length !== 8) {
      alert("Password must be exactly 8 characters long.");
      return;
    }

    // Check if password contains at least one letter and one number
    const containsLetter = /[a-zA-Z]/.test(password);
    const containsNumber = /[0-9]/.test(password);
    if (!containsLetter || !containsNumber) {
      alert("Password must contain both letters and numbers.");
      return;
    }

    // Confirm passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    // If all validations pass
    alert("Password set successfully!");
    navigate("/login"); // Redirect user to login page after successfully setting password
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F4FFF8] p-4">
      {/* Back to Login */}
      <button
        onClick={() => navigate("/login")}
        className="self-start text-green-500 text-sm flex items-center space-x-1 mb-6"
      >
        <span>&larr;</span>
        <span>Back to login</span>
      </button>

      {/* Set Password Section */}
      <div className="w-full max-w-md p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Set a New Password</h2>
        <p className="text-gray-600 mb-6">
          Your previous password has been reset. Please set a new password to secure your account.
        </p>

        {/* Create Password */}
        <div className="relative mb-4">
          <label
            htmlFor="password"
            className="absolute -top-2 left-3 bg-[#F4FFF8] px-1 text-sm text-[#4A5568]"
          >
            Create Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Enter 8-character password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-2.5 text-gray-500"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible className="text-xl" />
            ) : (
              <AiOutlineEye className="text-xl" />
            )}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative mb-6">
          <label
            htmlFor="confirmPassword"
            className="absolute -top-2 left-3 bg-[#F4FFF8] px-1 text-sm text-[#4A5568]"
          >
            Re-enter New Password
          </label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Re-enter 8-character password"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-4 top-2.5 text-gray-500"
          >
            {showConfirmPassword ? (
              <AiOutlineEyeInvisible className="text-xl" />
            ) : (
              <AiOutlineEye className="text-xl" />
            )}
          </button>
        </div>

        {/* Set Password Button */}
        <button
          onClick={handleVerify}
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
        >
          Set Password
        </button>
      </div>
    </div>
  );
};

export default SetPassword;