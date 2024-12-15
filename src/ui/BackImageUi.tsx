import BackImage, { BackImageData } from "../components/BackImage";
import React, { Component } from "react";

export class BackImageUi extends Component {
  render() {
    return (
        <div className=" w-full md:w-2/3 h-auto flex flex-col text-center gap-[20px] mx-auto p-[20px] ">
      
        <div className="w-full">
        <h1 className="font-semibold text-black text-base">Popular Route Destinations!</h1>
        </div>
        <div className="w-full h-auto flex gap-[20px]">
        {BackImageData.map((card) => (
            <BackImage
            key={card.id}
            id={card.id}
            location={card.location}
            description = {card.description}
            src={card.src}
  
            />
        ))}
        </div>
       
        </div>
    )
  }
}

export default BackImageUi