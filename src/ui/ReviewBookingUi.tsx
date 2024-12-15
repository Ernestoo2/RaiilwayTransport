import FooterUi from "./FooterUi";
import HeaderUi from "./HeaderUi";
import React, { Component } from "react";
import ReviewBooking from "../components/ReviewBooking";

export class ReviewBookingUi extends Component {
  render() {
    return (
      <div>
        <HeaderUi/>

        <ReviewBooking/>

        <FooterUi/>
      </div>
    )
  }
}

export default ReviewBookingUi