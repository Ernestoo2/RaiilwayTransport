import FooterUi from "./FooterUi";
import Header1Ui from "./Header1Ui";
import HeaderUi from "./HeaderUi";
import React, { Component } from "react";
import ReviewBooking from "../components/ReviewBooking";

export class ReviewBookingUi extends Component {
  render() {
    return (
      <div>
        <Header1Ui/>

        <ReviewBooking/>

        <FooterUi/>
      </div>
    )
  }
}

export default ReviewBookingUi