import React from "react";

export function Nav() {
  return (
    <div className="w-full   py-3 mx-auto text-black">
      <nav className="flex justify-center gap-4 md:gap-16 h-auto">
        <a 
          className="text-center text-sm md:text-base lg:text-lg transition-colors hover:text-green-600" 
          href="/"
        >
          Trains Schedule
        </a>
        <a 
          className="text-center text-sm md:text-base lg:text-lg transition-colors hover:text-green-600" 
          href="/"
        >
          FAQ
        </a>
        <a 
          className="text-center text-sm md:text-base lg:text-lg transition-colors hover:text-green-600" 
          href="/"
        >
          HelpDesk
        </a>
      </nav>
    </div>
  );
}

export default Nav;