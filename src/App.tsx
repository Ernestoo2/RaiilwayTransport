import "./App.css";
import "./styles/Global.css";
import FooterUi from "./ui/FooterUi";
import HeaderUi from "./ui/HeaderUi";
import React from "react";
import ReviewUi from "./ui/ReviewUi";

function App() {
  return (
    <div className=" w-full h-auto   App">
      <HeaderUi />
      <ReviewUi/>
    

      

      <FooterUi />
      
    </div>
  );
}

export default App;
