import React from "react";
import { Link } from "react-router-dom";

const Cgpa = () => {
  return (
    <>
    <div className="container min-h-screen min-w-full 
    bg-center bg-cover bg-fixed  bg-no-repeat  lg:h-[55rem] bg-[#0F1E26]" >
      
    </div>
    <div className="absolute top-0 left-0 mt-14 min-h-fit min-w-full  ">
      <div className="main-text pt-40">
        <p className="text-xl text-white font-semibold font-serif text-center flex items-center justify-center">
          Which sem you are currently in ?
        </p>
        <p className="text-xl font-serif text-white font-bold   flex items-center justify-center mt-10">
          Select your sem
        </p>
      </div>
      <div className="buttons flex items-center justify-center flex-wrap space-x-5 mt-5  ">
        <Link to="/GPAGURU/2ndsem">
          {" "}
          <button
            type="button"
            className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white hover:text-black hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring- focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500 m-3"
          >
            2nd
          </button>
        </Link>
        <Link to="/GPAGURU/3rdsem">
          <button
            type="button"
            className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white hover:text-black hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring- focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500 m-3 "
          >
            3rd
          </button>
        </Link>
        <Link to="/GPAGURU/4thsem">
          <button
            type="button"
            className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white hover:text-black hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring- focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500 m-3 "
          >
            4th
          </button>
        </Link>
        <Link to="/GPAGURU/5thsem">
          <button
            type="button"
            className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white hover:text-black hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring- focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500 m- "
          >
            5th
          </button>
        </Link>
        <Link to="/GPAGURU/6thsem">
          <button
            type="button"
            className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white hover:text-black hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring- focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500 m-2 "
          >
            6th
          </button>
        </Link>
        <Link to="/GPAGURU/7thsem">
          <button
            type="button"
            className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white hover:text-black hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring- focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500 m-2 "
          >
            7th
          </button>
        </Link>
        <Link to="/GPAGURU/8thsem">
          <button
            type="button"
            className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white hover:text-black hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring- focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500 m-2 "
          >
            8th
          </button>
        </Link>
      </div>
      <div className="back top-0 ">
        <Link to="/GPAGURU/cschoice">
          <button
            type="button"
            className="text-black bg-gradient-to-r from-white via-white to-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white/50 dark:shadow-sm dark:shadow-white/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rotate-180 absolute top-[2.3rem] left-5 "
          >
            <svg
              className="w-4 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default Cgpa;
