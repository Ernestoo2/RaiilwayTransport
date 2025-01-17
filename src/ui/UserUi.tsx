import FooterUi from "./FooterUi";
import HeaderUi from "./HeaderUi";
import React, { Component } from "react";
import User from "../pages/UserSections/User";

export class UserUi extends Component {
  render() {
    return (
      <div>
        <HeaderUi/>
        <User/>
        <FooterUi/>
      </div>
    )
  }
}

export default UserUi