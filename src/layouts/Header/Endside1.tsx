
import { Link } from "react-router-dom";

export function Endside() {
  return (
    <div className="flex w-full justify-center items-center px-4 pb-3 ">
      <div className="flex gap-4 w-full max-w-md">
        <Link
          to="/login"
          className="flex justify-center items-center w-1/2 h-10 text-xs md:text-sm lg:text-lg text-black rounded-lg bg-white border-2 border-[#7780A1] transition-transform transform hover:scale-105"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="flex justify-center items-center w-1/2 h-10 text-xs md:text-sm lg:text-lg text-white bg-[#07561A] rounded-lg font-medium font-Sora transition-transform transform hover:scale-105"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Endside;
