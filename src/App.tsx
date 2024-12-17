import "./App.css";
import "./styles/Global.css";
import BookingSuccessUi from "./ui/BookingSuccessUi";
import LandingPage from "./pages/LandingPage";
import LoginUi from "./ui/LoginUi";
import ReviewBookingUi from "./ui/ReviewBookingUi";
import SignUp from "./pages/Signup";
import TrainSearch from "./ui/TrainSearch";
import UserUi from "./ui/UserUi";
import VerifyCode from "./pages/VerifyLogin";

function App() {
  return (
    <div className="w-full bg-white h- App">
      <LandingPage/>

        <ReviewBookingUi/>

        <VerifyCode/>

        <SignUp/>

        <LoginUi/>

        <UserUi/>

        <BookingSuccessUi/>

        <TrainSearch/>
     
    </div>
  );
}

export default App;
