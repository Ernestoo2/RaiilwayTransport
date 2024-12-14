import CardComponent, { CardData } from "../components/CardComponent";
import React, { Component } from "react";

export class ReviewUi extends Component {
  render() {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 mx-auto gap-6 p-4">
        {CardData.map((card, index) => (
          <div
            key={card.id}
            className='relative w-full sm:w-3/4 mx-auto'
          >
            {/*Background div*/}
            <div
              className={`absolute top-4 left-0 right-0 h-full shadow-md rounded-md ${index === (3) ? "bg-[#8DD3BB66]" : "bg-[#84e9c666]"
                }`}
            ></div>


            <div className="relative right-3 z-10 bg-white shadow-lg rounded-md p-4">
              <CardComponent
                id={card.id}
                title={card.title}
                description={card.description}
                name={card.name}
                from={card.from}
                to={card.to}
                src={card.src}
              />
            </div>

          </div>
        ))}
      </div>
    )
  }
}

export default ReviewUi