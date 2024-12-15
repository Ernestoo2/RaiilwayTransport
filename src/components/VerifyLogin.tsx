import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const VerifyCode: React.FC = () => {
  const [code, setCode] = useState("");
  const [showCode, setShowCode] = useState(false);
  const navigate = useNavigate();

  const handleVerify = () => {
    // Simulate verification logic
    if (code === "77889MGX") {
      alert("Code Verified Successfully!");
      navigate("/dashboard"); // Redirect user after successful verification
    } else {
      alert("Invalid Verification Code");
    }
  };

  const handleResend = () => {
    alert("A new verification code has been sent to your email.");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      {/* Back to Login */}
      <button
        onClick={() => navigate("/login")}
        className="self-start text-green-500 text-sm flex items-center space-x-1 mb-6"
      >
        <span>&larr;</span>
        <span>Back to login</span>
      </button>

      {/* Verify Code Section */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify code</h2>
        <p className="text-gray-600 mb-6">
          An authentication code has been sent to your email.
        </p>

        {/* Enter Code */}
        <div className="relative mb-4">
          <input
            type={showCode ? "text" : "password"}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="peer w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder=" "
          />
          <label
            className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-600"
          >
            Enter Code
          </label>
          <button
            type="button"
            onClick={() => setShowCode(!showCode)}
            className="absolute right-4 top-2.5 text-gray-500"
          >
            <AiOutlineEye className="text-xl" />
          </button>
        </div>

        {/* Resend Code */}
        <p className="text-sm text-gray-600 mb-4">
          Didn’t receive a code?{" "}
          <button
            onClick={handleResend}
            className="text-green-500 hover:underline"
          >
            Resend
          </button>
        </p>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
        >
          Verify
        </button>
      </div>
    </div>
  );
};

export default VerifyCode;

 