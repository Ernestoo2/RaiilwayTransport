import FooterUi from "./FooterUi";
import HeaderUi from "./HeaderUi";
import Login from "../pages/Login/Login";
import React, { Component } from "react";

export class LoginUi extends Component {
  render() {
    return (
      <div>
        <HeaderUi/>
        <Login/>
        <FooterUi/>
      </div>
    )
  }
}

export default LoginUi