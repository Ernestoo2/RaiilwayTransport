import FooterUi from "../Footer/FooterUi";
import HeaderUi from "../Header/HeaderUi";
import { Component } from "react";
import VerifyEmail from "../../pages/Login/VerifyEmail";

export class VerifyUI extends Component {
  render() {
    return (
      <div>
        <HeaderUi />
        <VerifyEmail />
        <FooterUi />
      </div>
    )
  }
}

export default VerifyUI