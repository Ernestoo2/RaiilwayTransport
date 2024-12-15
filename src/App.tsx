import "./App.css";
import "./styles/Global.css";
import LandingPage from "./pages/LandingPage";
import ReviewBookingUi from "./ui/ReviewBookingUi";

function App() {
  return (
    <div className=" w-full h- bg-white   App">
      <LandingPage/>

        <ReviewBookingUi/>

    </div>
  );
}

export default App;
