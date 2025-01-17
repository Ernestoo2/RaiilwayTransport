import "./App.css";
import "./styles/Global.css";
import BookingSuccessUi from "./ui/BookingSuccessUi";
import LandingPage from "./pages/LandingPage";
import LoginUi from "./ui/LoginUi";
import ReviewBookingUi from "./ui/ReviewBookingUi";
import SignUpUi from "./ui/SignUpUi";
import SkeletonScreenComponent from "./components/SkeletonScreen";
import TrainSearch from "./ui/TrainSearch";
import UserUi from "./ui/UserUi";
import VerifyUI from "./ui/VerifyUI";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/review-booking" element={<ReviewBookingUi />} />
        <Route path="/verify-login" element={<VerifyUI />} />
        <Route path="/signup" element={<SignUpUi />} />
        <Route path="/login" element={<LoginUi />} />
        <Route path="/user" element={<UserUi />} />
        <Route path="/booking-success" element={<BookingSuccessUi />} />
        <Route path="/train-search" element={<TrainSearch />} />
        
        <Route path="/place" element={<SkeletonScreenComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
