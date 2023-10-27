import React from 'react'
import  logo  from "../assets/round-logo.png";
import  Home  from "./Home.jsx";
import bg from "../assets/bggg.jpg";



const Header = () => {
  return (
    <div className="container min-h-screen min-w-full bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('src/assets/bggg.jpg')]
    bg-center bg-cover bg-fixed bg-no-repeat h-[62rem] lg:h-[41rem]  ">

    <nav className=' bg-amber-50 h-20 min-w-full lg:backdrop-filter lg:backdrop-blur-lg bg-opacity-100'>
      <img src={logo} alt=""  className='absolute w-24 pt-2 px-3' />
      
    </nav>
    {/* <img src={bg} alt="" className="h-[55rem] lg:h-[41rem] min-w-full  " /> */}
  {/* <Csgpa/> */}
  {/* <Scheme22/> */}
    </div>
  )
}

export default Header
