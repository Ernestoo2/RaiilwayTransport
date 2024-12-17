import FooterUi from "./FooterUi";
import HeaderUi from "./HeaderUi";
import React, { Component } from "react";

export class UserUi extends Component {
  render() {
    return (
      <div>
        <HeaderUi/>
        <UserUi/>
        <FooterUi/>
      </div>
    )
  }
}

export default UserUi