import BackImageUi from "../ui/BackImageUi";
import BookingInterface from "../components/BookingInterface";
import FooterUi from "../ui/Footer/FooterUi";
import HeaderUi from "../ui/Header/HeaderUi";
import LandingPageSkeleton from "./LandingPageSkeleton";
import Newsletter from "../components/Newsletter";
import ReviewUi from "../ui/Trains/ReviewUi";
import RouteUi from "../ui/RouteUi";
import image from "../Assets/Train.png";
import { useEffect, useState } from "react";

function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demo purposes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LandingPageSkeleton />;
  }
  return (
    <div className="bg-[#F4FFF8]">
      <HeaderUi />

      <div className="p-3 ">
        <RouteUi />
        <BackImageUi />
        <BookingInterface />
        <ReviewUi />
        <img src={image} alt="" />
        <Newsletter />

      </div>
      <FooterUi />
    </div>
  )
}

export default LandingPage