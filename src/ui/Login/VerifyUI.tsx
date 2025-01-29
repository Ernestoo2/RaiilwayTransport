import FooterUi from "../Footer/FooterUi";
import HeaderUi from "../Header/HeaderUi";
import React, { Component } from "react";
import VerifyCode from "../../pages/Login/VerifyLogin";

export class VerifyUI extends Component {
  render() {
    return (
      <div>
        <HeaderUi />
        <VerifyCode />
        <FooterUi />
      </div>
    )
  }
}

export default VerifyUI