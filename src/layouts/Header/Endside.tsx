import React, { Component } from "react";

export class Endside extends Component {
  render() {
    return (
      <div className="flex w-full gap-2 mx-1 h-52px">
        <button 
        className="w-1/2 h-[52px] lg:text-lg md:text-sm sm:text-xs  text-black rounded-[12px] bg-white  border-[2px] border-[#7780A1]">
          Login
        </button>
        <button
          className="w-2/3 h-[52px] rounded-[12px] text-white bg-[#07561A] font-Sora font-[600] lg:text-lg md:text-sm sm:text-xs ">
          Sign Up
        </button>
      </div>
    )
  }
}

export default Endside