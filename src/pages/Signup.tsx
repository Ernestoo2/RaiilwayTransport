import React, { useState } from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

const SignUp: React.FC = () => {
  // State variables for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  // State for handling API response
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Basic validation
    if (!isAgreed) {
      setErrorMessage("You must agree to the terms and privacy policy.");
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Prepare data payload for API call
    const payload = {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
    };

    try {
      // API call to send data to the server
      const response = await fetch("https://your-api-endpoint.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      // Handle server response
      if (response.ok) {
        setSuccessMessage("Account created successfully!");
        setErrorMessage("");
        // Reset form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setPassword("");
        setConfirmPassword("");
        setIsAgreed(false);
      } else {
        setErrorMessage(data.message || "Something went wrong. Please try again.");
        setSuccessMessage("");
      }
    } catch (error) {
      setErrorMessage("Failed to connect to the server. Please try again later.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center min-h-screen bg-gray-50">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center py-10 md:py-0">
        <img
          src="/Assets/Signup.png"
          alt="Placeholder"
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sign Up</h2>
        <p className="text-gray-600 mb-6">
          Let’s get you all set up so you can access your personal account.
        </p>

        {/* Error Message */}
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}

        {/* Success Message */}
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div className="relative">
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="peer w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
            <label
              htmlFor="firstName"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600"
            >
              First Name
            </label>
          </div>

          {/* Last Name */}
          <div className="relative">
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="peer w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
            <label
              htmlFor="lastName"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Last Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Email
            </label>
          </div>

          {/* Phone Number */}
          <div className="relative">
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="peer w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
            <label
              htmlFor="phoneNumber"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Phone Number
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Password
            </label>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="peer w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
            <label
              htmlFor="confirmPassword"
              className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600"
            >
              Confirm Password
            </label>
          </div>

          {/* Agreement Checkbox */}
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
                className="mr-2"
              />
              I agree to all the Terms and Privacy Policies
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            Create Account
          </button>
        </form>

        {/* Social Sign-Up */}
        <div className="mt-6">
          <p className="text-center text-gray-600">Or Sign up with</p>
          <div className="flex justify-center space-x-4 mt-4">
            <FaFacebook className="text-blue-600 text-2xl cursor-pointer" />
            <FaGoogle className="text-red-600 text-2xl cursor-pointer" />
            <FaApple className="text-black text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
