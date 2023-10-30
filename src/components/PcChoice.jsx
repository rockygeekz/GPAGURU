import React from 'react'
import { Link } from 'react-router-dom'


const PcChoice = () => {
  return (
    <div className='absolute top-0 left-0 min-h-fit min-w-full  ' >
      <div className="main-text pt-40">
    {/* <div className="main text-white font-extrabold text-xl font-mono flex items-center justify-center ">
      Welcome to GPA GURU</div> */}
    
    <p className='text-lg text-white font-semibold text-center flex items-center justify-center'>Calculate your SGPA and CPGA according to latest 22 scheme!</p>
    <p className='text-lg text-white font-semibold  flex items-center justify-center mt-10' >
      What do you want to Calculate?
    </p>
    </div>
    <div className="buttons flex items-center justify-center flex-wrap space-x-5 mt-5">

    <Link to = "/GPAGURU/c_scheme22"><button type="button" class="text-black bg-gradient-to-r from-white via-white to-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white/50 dark:shadow-md dark:shadow-white/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">C-cycle</button></Link>
  <Link to="/GPAGURU/p_scheme22"><button type="button" class="text-black bg-gradient-to-r from-white via-white to-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white/50 dark:shadow-md dark:shadow-white/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Pcycle</button></Link>
    </div>
    </div> 
  )
}

export default PcChoice;
