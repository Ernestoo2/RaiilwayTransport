import React from "react";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div className="w-full   py-3 mx-auto text-black">
      <nav className="flex justify-center gap-4 md:gap-16 h-auto">
        <Link
          className="text-center text-sm md:text-base lg:text-lg transition-colors hover:text-green-600" 
          to="/"
        >
          Trains Schedule
        </Link>
        <Link 
          className="text-center text-sm md:text-base lg:text-lg transition-colors hover:text-green-600" 
          to="/"
        >
          FAQ
        </Link>
        <Link
          className="text-center text-sm md:text-base lg:text-lg transition-colors hover:text-green-600" 
          to="/"
        >
          HelpDesk
        </Link>
      </nav>
    </div>
  );
}

export default Nav;