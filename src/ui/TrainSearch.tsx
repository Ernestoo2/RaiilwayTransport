import FooterUi from "./FooterUi";
import HeaderUi from "./HeaderUi";
import React, { Component } from "react";
import TrainSearchResults from "../pages/TrainSearchResult";

export class TrainSearch extends Component {
  render() {
    return (
      <div>
        <HeaderUi/>
            <TrainSearchResults/>
        <FooterUi/>
      </div>
    )
  }
}

export default TrainSearch