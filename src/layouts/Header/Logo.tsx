import "../../Assets/Logo.png";
import logoImg from "../../Assets/Logo.png";
import { Component } from "react";

export class Logo extends Component {
  render() {
    return (
      <div className="w-1/3 h-auto ">
        <img src={logoImg} alt="for logo" className="w-full h-auto" />

      </div>
    )
  }
}

export default Logo