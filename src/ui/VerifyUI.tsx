import FooterUi from "./FooterUi";
import HeaderUi from "./HeaderUi";
import React, { Component } from "react";
import VerifyCode from "../pages/Login/VerifyLogin";

export class VerifyUI extends Component {
  render() {
    return (
      <div>
        <HeaderUi/>
        <VerifyCode/>
        <FooterUi/>
      </div>
    )
  }
}

export default VerifyUI