import "./App.css";
import "./styles/Global.css";
import BackImageUi from "./ui/BackImageUi";
import FooterUi from "./ui/FooterUi";
import HeaderUi from "./ui/HeaderUi";
import React from "react";
import ReviewUi from "./ui/ReviewUi";
import RouteUi from "./ui/RouteUi";

function App() {
  return (
    <div className=" w-full h- bg-white   App">
      <HeaderUi />

      <div className="p-8 ">
        <RouteUi />
        <BackImageUi />
        <ReviewUi />
      </div>


      <FooterUi />

    </div>
  );
}

export default App;
