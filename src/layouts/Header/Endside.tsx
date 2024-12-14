import React from "react";

export function Endside() {
  return (
    <div className="flex w-full gap-3 px-1 py-2 md:px-5">
      <button 
        className="w-1/2 h-[40px] text-xs md:text-sm lg:text-lg text-black rounded-[12px] bg-white border-[2px] border-[#7780A1]"
      >
        Login
      </button>
      <button
        className="w-1/2  h-[40px] rounded-[12px] text-white bg-[#07561A] font-Sora font-[600] text-xs md:text-sm lg:text-lg"
      >
        Sign Up
      </button>
    </div>
  );
}

export default Endside;