import React from "react";
import logo from "../assets/round-logo.png";

const Header = () => {
  return (
    <>
      <nav className=" bg-[#ffffffb9] fixed h-20 min-w-full lg:backdrop-filter  lg:backdrop-blur-lg bg-opacity-90">
        <img src={logo} alt="logo" className="absolute w-24 pt-2 px-3" />
      </nav>
      {/* <Body/> */}
    
    </>
  );
};

export default Header;
