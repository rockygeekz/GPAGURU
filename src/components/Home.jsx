import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='absolute top-0 left-0 min-h-fit min-w-full ' >
      <div className="main-text pt-40">
    <div className="main text-white font-serif font-extrabold text-xl flex items-center justify-center ">
      Welcome to GPA GURU</div>
    
    <p className='text-lg text-white font-semibold font-serif  flex items-center justify-center'>Calculate your SGPA and CPGA NOW!!</p>
    <p className='text-lg text-white font-semibold font-serif flex items-center justify-center mt-10' >
      Select your scheme 
    </p>
    </div>
    <div className="buttons flex items-center justify-center flex-wrap space-x-5 mt-5">

    {/* <Link to = ""><button type="button" class="text-black bg-gradient-to-r from-white via-white to-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white/50 dark:shadow-lg dark:shadow-white/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">22-scheme</button></Link> */}
  <Link to="/GPAGURU/cschoice"><button type="button" class="text-black bg-gradient-to-r from-white via-white to-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white/50 dark:shadow-md dark:shadow-white/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">22-scheme</button></Link>
    </div>
    </div>
  )
}

export default Home

