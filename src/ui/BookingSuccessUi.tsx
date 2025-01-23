import BookingSuccess from "../components/BookingSuccess";
import FooterUi from "./FooterUi";
import Header1Ui from "./Header1Ui";
import React, { Component } from "react";

export class BookingSuccessUi extends Component {
  render() {
    return (
      <div>
        <Header1Ui/>
            <BookingSuccess/>
        <FooterUi/>
      </div>
    )
  }
}

export default BookingSuccessUi