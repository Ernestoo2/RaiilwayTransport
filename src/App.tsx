import "./App.css";
import "./styles/Global.css";
import LandingPage from "./pages/LandingPage";
import ReviewBookingUi from "./ui/ReviewBookingUi";
import VerifyCode from "./components/VerifyLogin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className=" w-full h- bg-white   App">
      <LandingPage/>

        <ReviewBookingUi/>

        <VerifyCode/>





        <Router>
      <Routes>
        <Route path="/verify" element={<VerifyCode />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        {/* Other routes */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
