import React, { Component } from "react";

export class Third extends Component {
    render() {
        return (
            <div className="w-full py-[20px] rounded-tr-[10px] rounded-br-[10px] px-[48px] h-full rounded-tr-20 rounded-br-20 border-[1px]">
                <p className="mt-[30px] text-[#7780A1] w-[367px] h-[72px]  ">Nibh volutpat, aliquam id sagittis elementum. Pellentesque laoreet velit, sed egestas in. Id nam semper dolor tellus vulputate eget turpis. </p>
                <div className="flex px-[48px] mt-[200px] items-center   w-[367px] h-[52px] bg-[#FFFFFF] shadow-[#0607141A] rounded-[16px] justify-between ">
                    <span className="font-light text-[#7780A1]">Newsletter</span>
                    <span className="text-[#2A27C9] font-semibold">Sign in</span>
                </div>
            </div>
        )
    }
}

export default Third