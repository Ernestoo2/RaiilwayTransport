import FooterUi from "./FooterUi";
import HeaderUi from "./HeaderUi";
import React, { Component } from "react";
import SignUp from "../pages/Signup";

export class SignUpUi extends Component {
  render() {
    return (
      <div>
        <HeaderUi/>
        <SignUp/>
        <FooterUi/>
      </div>
    )
  }
}

export default SignUpUi