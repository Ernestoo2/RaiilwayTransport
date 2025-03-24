import FooterUi from "../Footer/FooterUi";
import HeaderUi from "../Header/HeaderUi";
import { Component } from "react";
import User from "../../pages/UserSections/User";

export class UserUi extends Component {
  render() {
    return (
      <div>
        <HeaderUi />
        <User />
        <FooterUi />
      </div>
    )
  }
}

export default UserUi