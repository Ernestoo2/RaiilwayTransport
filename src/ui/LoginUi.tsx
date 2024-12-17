import FooterUi from "./FooterUi";
import HeaderUi from "./HeaderUi";
import Login from "../pages/Login";
import React, { Component } from "react";
import SignUp from "../pages/Signup";

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