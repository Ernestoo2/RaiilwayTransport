import FooterUi from "./FooterUi";
import HeaderUi from "./HeaderUi";
import React, { Component } from "react";
import VerifyEmail from "../pages/Login/VerifyEmail";

export class VerifyUI extends Component {
    render() {
      return (
        <div>
          <HeaderUi/>
          <VerifyEmail/>
          <FooterUi/>
        </div>
      )
    }
  }
  
  export default VerifyUI