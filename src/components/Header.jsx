import React from 'react'
import  logo  from "../assets/round-logo.png";
import  Home  from "./Home.jsx";



const Header = () => {
  return (
    <div className="container min-h-screen min-w-full bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('src/assets/bggg.jpg')]
    bg-center bg-cover bg-fixed bg-no-repeat">

    <nav className=' bg-amber-50 h-20 min-w-full backdrop-filter backdrop-blur-lg bg-opacity-40'>
      <img src={logo} alt=""  className='absolute w-24 pt-2 px-3' />
    </nav>
  {/* <Csgpa/> */}
  {/* <Scheme22/> */}
    </div>
  )
}

export default Header
