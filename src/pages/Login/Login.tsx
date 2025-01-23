import React, { useState } from "react";
import axios from "axios";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    <div className="flex flex-col bg-[#F4FFF8]  md:flex-row items-center justify-between max-w-5xl w-full h-auto mx-auto p-6 rounded-lg shadow-md  ">
      {/* Left Side: Form */}
      <div className="md:w-1/2  h-auto">
        <h1 className="text-3xl font-bold text-[#2D3748]">Login</h1>
        <p className="text-[#4A5568]">Login to access your Golobe account.</p>

        {error && (
          <div className="text-red-600 text-sm font-medium">{error}</div>
        )}

        <form onSubmit={handleLogin} className="relative space-y-6 mt-4">
          {/* Email Input */}
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 bg-white px-1 text-sm text-[#4A5568]"
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

          {/* Password Input */}
          <div className="relative">
            <label
              htmlFor="password"
              className="absolute -top-2 left-3 bg-white px-1 text-sm text-[#4A5568]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-600"
              placeholder="●●●●●●●●"
              required
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-red-600 focus:ring-red-500"
              />
              <span className="text-sm text-[#4A5568]">Remember me</span>
            </label>
            <Link
              to="/forget-password"
              className="text-sm text-red-600 hover:underline"
            >
              Forgot Password
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#8DD3BB] text-white py-3 px-6 rounded-md hover:bg-red-700 transition"
          >
            Login
          </button>
        </form>


        {/* Sign-up and Social Login */}
        <div className="text-center relative">
          <p className="text-sm text-[#4A5568]">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-red-600 hover:underline">
              Sign up
            </Link>
          </p>

          {/* Divider with Text */}
          <div className="relative w-full mt-4">
            <div className="h-[1px] w-full bg-[#112211]" />
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F4FFF8] px-2 text-sm text-[#4A5568]">
              Or login with
            </p>
          </div>
          <div className="flex items-center justify-center space-x-4 mt-4"
            title="button"
          >
            {/* Facebook */}
            <Link
              title="button"
              to={"https://www.facebook.com"}
              className="flex items-center justify-center w-24 h-10 border border-gray-300 rounded-md hover:bg-gray-100">
              <FaFacebookF className="text-blue-600 w-5 h-5" />
            </Link>
            {/* Google */}
            <Link
              title="button"
              to={"/verify-email"}
              className="flex items-center justify-center w-24 h-10 border border-gray-300 rounded-md hover:bg-gray-100">
              <FaGoogle className="text-red-600 w-5 h-5" />
            </Link>
            {/* Apple */}
            <Link
              title="button"
              to={"/verify-email"}
              className="flex items-center justify-center w-24 h-10 border border-gray-300 rounded-md hover:bg-gray-100">
              <FaApple className="text-black w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side: Image */}
      <div className="mt-4 w-full h-auto   mx-auto  md:mt-0 md:ml-8 md:w-1/2">
        <div className="w-full h-auto  rounded-lg flex items-center justify-center">
          <img src="/Assets/Loginpic.png"
            className="w-2/3 md:w-full h-auto rounded-lg shadow-md"
            alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;