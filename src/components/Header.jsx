import React from "react";
import logo from "../assets/round-logo.png";

const Header = () => {
  return (
    <div
      className="container min-h-screen min-w-full 
    bg-center bg-cover bg-fixed  bg-no-repeat h-[70rem] lg:h-[55rem] bg-[#0F1E26] "
    >
      <nav className=" bg-[#ffffffb9] fixed h-20 min-w-full lg:backdrop-filter  lg:backdrop-blur-lg bg-opacity-90">
        <img src={logo} alt="logo" className="absolute w-24 pt-2 px-3" />
      </nav>
    </div>
  );
};

export default Header;
