import "./App.css";
import "./styles/Global.css";
import BackImage, { BackImageData } from "./components/BackImage";
import FooterUi from "./ui/FooterUi";
import HeaderUi from "./ui/HeaderUi";
import React from "react";
import ReviewUi from "./ui/ReviewUi";

function App() {
  return (
    <div className=" w-full h- bg-slate-200   App">
      <HeaderUi />
      
      <div className="w-full md:w-2/3 h-auto flex gap-[20px] mx-auto p-[20px] ">
      
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
      


      <ReviewUi/>


      

      <FooterUi />
      
    </div>
  );
}

export default App;
