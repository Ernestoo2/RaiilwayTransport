import FooterUi from "../Footer/FooterUi";
import HeaderUi from "../Header/HeaderUi";
import Login from "../../pages/Login/Login";
import React, { Component } from "react";

export class LoginUi extends Component {
  render() {
    return (
      <div className="bg-[#F4FFF8]">
        <HeaderUi />
        <Login />
        <FooterUi />
      </div>
    )
  }
}

export default LoginUi