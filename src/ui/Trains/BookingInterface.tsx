import FooterUi from "../Footer/FooterUi";
import Header1Ui from "../Header/Header1Ui";
import  { Component } from "react";

export class BookingInterface extends Component {
  render() {
    return (
      <div>
        <Header1Ui />
        <BookingInterface />
        <FooterUi />
      </div>
    )
  }
}

export default BookingInterface