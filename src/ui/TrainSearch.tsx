import FooterUi from "./FooterUi";
import Header1Ui from "./Header1Ui";
import React, { Component } from "react";
import TrainSearchResults from "../pages/TrainSearch/TrainSearchResult";

export class TrainSearch extends Component {
  render() {
    return (
      <div>
        <Header1Ui/>
            <TrainSearchResults/>
        <FooterUi/>
      </div>
    )
  }
}

export default TrainSearch