import FooterUi from "./FooterUi";
import Header1Ui from "./Header1Ui";
import React, { Component } from "react";

export class BookingInterface extends Component {
  render() {
    return (
      <div>
        <Header1Ui/>
        <BookingInterface/>
        <FooterUi/>
      </div>
    )
  }
}

export default BookingInterface