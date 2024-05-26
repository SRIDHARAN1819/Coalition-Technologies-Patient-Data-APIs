import React from "react";
import logo_svg from "../assets/svgs/TestLogo.svg";
import Navbar from "./shared-components/Navbar";
import Profile from "./shared-components/Profile";

const Header = () => {
  return (
    <header className="header_div w-full bg-custom-white py-2 px-8 rounded-[2rem] flex items-center justify-between">
      {/* Logo */}
      <div className="logo_container w-[200px]">
        <img src={logo_svg} alt="Take Care Logo" className="w-full cursor-pointer" />
      </div>

      {/* NavLinks */}
      <Navbar />

      {/* Profile */}
      <Profile />
    </header>
  );
};

export default Header;
