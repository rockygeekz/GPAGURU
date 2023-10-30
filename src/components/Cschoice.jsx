import React from "react";
import { Link } from "react-router-dom";

const CgpaSgpa = () => {
  return (
    <div className="absolute top-0 left-0 min-h-fit min-w-full  ">
      <div className="main-text pt-40 mt-5">
        {/* <div className="main text-white font-extrabold text-xl font-mono flex items-center justify-center ">
      Welcome to GPA GURU</div> */}

        <p className=" text-white font-semibold font-serif text-center  flex items-center justify-center  ">
          Calculate your SGPA and CPGA according to latest 22 scheme!
        </p>
        <p className="text-lg text-white font-bold font-serif  flex items-center justify-center mt-10">
          What do you want to Calculate?
        </p>
      </div>
      <div className="buttons flex items-center justify-center flex-wrap space-x-5 mt-5">
        <Link to="/GPAGURU/cg_scheme22">
          <button
            type="button"
            className="text-black bg-gradient-to-r from-white via-white to-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white/50 dark:shadow-md dark:shadow-white/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          >
            CGPA
          </button>
        </Link>
        <Link to="/GPAGURU/s_scheme22">
          <button
            type="button"
            className="text-black bg-gradient-to-r from-white via-white to-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white/50 dark:shadow-md dark:shadow-white/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          >
            SGPA
          </button>
        </Link>
      </div>
      <div className="back top-0 ">
        <Link to="/GPAGURU">
          <button
            type="button"
            className="text-black bg-gradient-to-r from-white via-white to-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white/50 dark:shadow-sm dark:shadow-white/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rotate-180 absolute top-[5.9rem] left-6 "
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
  );
};

export default CgpaSgpa;
