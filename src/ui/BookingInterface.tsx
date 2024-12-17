import FooterUi from "./FooterUi";
import HeaderUi from "./HeaderUi";
import React, { Component } from "react";

export class BookingInterface extends Component {
  render() {
    return (
      <div>
        <HeaderUi/>
        <BookingInterface/>
        <FooterUi/>
      </div>
    )
  }
}

export default BookingInterface