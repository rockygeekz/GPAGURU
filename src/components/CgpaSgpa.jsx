import React from 'react'
import { Link } from 'react-router-dom'


const CgpaSgpa = () => {
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

    <Link to = "/c_scheme22"> <button type="button" className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white hover:text-black hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring- focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500">
  CGPA
  </button></Link>
  <Link to="/s_scheme22"><button type="button" className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white hover:text-black hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring- focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500">
  SGPA
  </button></Link>
    </div>
    </div> 
  )
}

export default CgpaSgpa
