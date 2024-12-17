import BookingSuccess from "../components/BookingSuccess";
import FooterUi from "./FooterUi";
import HeaderUi from "./HeaderUi";
import React, { Component } from "react";

export class BookingSuccessUi extends Component {
  render() {
    return (
      <div>
        <HeaderUi/>
            <BookingSuccess/>
        <FooterUi/>
      </div>
    )
  }
}

export default BookingSuccessUi