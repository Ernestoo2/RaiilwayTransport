import React, { Component } from "react";

export class Nav extends Component {
  render() {
    return (
      <div className="w-full max-w-full  py-3 mx-auto  text-black ">
        <nav className="w-full flex  justify-evenly gap-[10px] md:gap-[10px]  h-auto   ">
            <a className="lg:text-lg md:text-base sm:text-xs transition-colors hover:text-white" href="/">Trains Schedule </a>
            <a className="lg:text-lg md:text-base sm:text-xs  transition-colors hover:text-white" href="/">FAQ</a>
            <a className="lg:text-lg md:text-base sm:text-xs  transition-colors hover:text-white" href="/">HelpDesk</a>
        </nav>
      </div>
    )
  }
}

export default Nav