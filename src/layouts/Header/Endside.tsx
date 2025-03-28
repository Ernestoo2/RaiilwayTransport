
import { Link } from "react-router-dom";

export function Endside() {
  return (
    <div className="flex w-full   pb-3 ">
      <div className="flex justify-center items-center w-full max-w-md">
        <Link
          to="/login"
          className="flex justify-center font-bold items-center w-1/2 h-10 text-xs md:text-sm lg:text-lg text-black rounded-lg bg-[#F4FFF8]   transition-transform transform hover:scale-105"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="flex  font-bold justify-center items-center w-1/2 h-10 text-xs md:text-sm lg:text-lg text-white bg-[#07561A] rounded-lg  font-Sora transition-transform transform hover:scale-105"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Endside;
