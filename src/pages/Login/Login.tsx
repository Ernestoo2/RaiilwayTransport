import React, { useState } from "react";
import axios from "axios";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://naijarails.onrender.com/Login", {
        email,
        password,
      });
      console.log("Login Success:", response.data);
      // Handle successful login (e.g., redirect or update UI)
    } catch (err: any) {
      console.error("Login Error:", err.response?.data || err.message);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl w-full mx-auto p-6 rounded-lg shadow-md  ">
      {/* Left Side: Form */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-3xl font-bold text-[#2D3748]">Login</h1>
        <p className="text-[#4A5568]">Login to access your Golobe account.</p>

        {error && (
          <div className="text-red-600 text-sm font-medium">{error}</div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-[#4A5568] font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b-2 border-x-0 border-t-0 focus:outline-none focus:border-green-600"
              placeholder="john.doe@gmail.com"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-[#4A5568] font-medium"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b-2 border-x-0 border-t-0 focus:outline-none focus:border-green-600"
              placeholder="●●●●●●●●"
              required
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span className="text-sm text-[#4A5568]">Remember me</span>
            </label>
            <a
              href="/verify-login"
              className="text-sm text-green-600 hover:underline"
            >
              Forgot Password
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>

        {/* Sign-up and Social Login */}
        <div className="text-center">
          <p className="text-sm text-[#4A5568]">
            Don’t have an account?{" "}
            <a href="/signup" className="text-green-600 hover:underline">
              Sign up
            </a>
          </p>
          <p className="text-sm text-[#4A5568] mt-4">Or login with</p>
          <div className="flex items-center justify-center space-x-4 mt-2"
          title="button"
          >
            {/* Facebook */}
            <button
             title="button"
            className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full hover:bg-gray-100">
              <FaFacebookF className="text-blue-600 w-5 h-5" />
            </button>
            {/* Google */}
            <button 
            title="button"
           className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full hover:bg-gray-100">
              <FaGoogle className="text-red-600 w-5 h-5" />
            </button>
            {/* Apple */}
            <button 
             title="button"
            className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full hover:bg-gray-100">
              <FaApple className="text-black w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="mt-6 md:mt-0 md:ml-8 md:w-1/2">
        <div className="w-3/4 h-64 bg-gray-300 rounded-lg flex items-center justify-center">
          <img src="/Assets/Loginpic.png"
          className="rounded-lg shadow-md"
          alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;