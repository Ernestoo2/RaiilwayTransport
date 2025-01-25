import FooterUi from "./FooterUi";
import Header1Ui from "./Header1Ui";
import React from "react";
import ReviewBooking from "../components/ReviewBooking";
import { TrainDetails } from "../utils/types/types";

interface ReviewBookingProps {
  train: TrainDetails;
}

const ReviewBookingUi: React.FC<ReviewBookingProps> = ({train}) => { // Use a functional component
 
  return (
    <div>
      <Header1Ui />
      <ReviewBooking train={train} /> {/* Pass the train prop here */}
      <FooterUi />
    </div>
  );
};

export default ReviewBookingUi;

