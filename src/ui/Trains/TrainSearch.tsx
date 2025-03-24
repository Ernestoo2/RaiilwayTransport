import FooterUi from "../Footer/FooterUi";
import Header1Ui from "../Header/Header1Ui";
import  { Component } from "react";
import TrainSearchResults from "../../pages/TrainSearch/TrainSearchResult";

export class TrainSearch extends Component {
  render() {
    return (
      <div className="bg-[#F5F5F5">
        <Header1Ui />
        <TrainSearchResults />
        <FooterUi />
      </div>
    )
  }
}

export default TrainSearch