import "./App.css";
import "./styles/Global.css";
import BookingSuccess from "./components/BookingSuccess";
import LandingPage from "./pages/LandingPage";
import ReviewBookingUi from "./ui/ReviewBookingUi";
import SignUp from "./pages/Signup";
import TrainSearch from "./ui/TrainSearch";
import VerifyCode from "./pages/VerifyLogin";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className=" w-full h- bg-white   App">
      <LandingPage/>

        <ReviewBookingUi/>

        <VerifyCode/>

        <SignUp/>

        <BookingSuccess/>

        <TrainSearch/>
     
    </div>
  );
}

export default App;
   /* <Router>
      <Routes>
        <Route path="/verify" element={<VerifyCode />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        
        </Routes>
   </Router> */