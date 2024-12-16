import BackImageUi from "../ui/BackImageUi";
import BookingInterface from "../components/BookingInterface";
import FooterUi from "../ui/FooterUi";
import HeaderUi from "../ui/HeaderUi";
import Newsletter from "../components/Newsletter";
import React from "react";
import ReviewUi from "../ui/ReviewUi";
import RouteUi from "../ui/RouteUi";

function LandingPage() {
  return (
    <div>
        <HeaderUi/>

        <div className="p-3 ">
        <RouteUi />
        <BackImageUi />
        <BookingInterface/>
        <ReviewUi />
        <img src="/Assets/Train.png" alt="" />
        <Newsletter/>

      </div>
      <FooterUi/>
    </div>
  )
}

export default LandingPage