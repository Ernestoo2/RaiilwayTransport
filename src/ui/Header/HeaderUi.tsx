import Endside from "../../layouts/Header/Endside";
import Logo from "../../layouts/Header/Logo";
import Nav from "../../layouts/Header/Nav";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function HeaderUi() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full h-auto max-w-full px-4 py-2  mx-auto shadow relative">
      <div>
        <div className="flex items-center ">
          <Logo />
          <Nav />

          {/* Desktop Navigation */}
          <div className="hidden w-2/3  md:flex items-center">

            <Endside />

          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-2xl focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#F4FFF8] shadow-lg z-50">

            <Endside />
          </div>
        )}
      </div>
      {/* <div>
         <RouteList />
        </div> */}
    </div>
  );
}

export default HeaderUi;