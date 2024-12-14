import Endside from "../layouts/Header/Endside";
import Logo from "../layouts/Header/Logo";
import Nav from "../layouts/Header/Nav";
import React from "react";

function HeaderUi() {
  return (
    <div className="w-full h-auto max-w-full px-4 py-2 mx-auto shadow">
      <div className="flex items-center justify-center text-sm sm:text-base md:text-lg lg:text-xl">
        <Logo />
        <Nav />
        <Endside />
      </div>
    </div>
  );
}

export default HeaderUi;