import FooterUi from "../Footer/FooterUi";
import HeaderUi from "../Header/HeaderUi";
import React, { Component } from "react";
import SignUp from "../../pages/Login/Signup";

export class SignUpUi extends Component {
  render() {
    return (
      /* The code `<div className="bg-[#F4FFF8]">` is creating a `<div>` element with a CSS class of
      `bg-[#F4FFF8]`. This class is likely used to apply a background color or some other styling to the
      `<div>` element. The value `#F4FFF8` represents a specific color in hexadecimal format. */
      <div className="bg-[#F4FFF8]">
        <HeaderUi />
        <SignUp />
        <FooterUi />
      </div>
    )
  }
}

export default SignUpUi