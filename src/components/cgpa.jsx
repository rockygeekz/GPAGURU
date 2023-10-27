import React from "react";
import { Link } from "react-router-dom";

const Cgpa = () => {
  return (
    <div className="absolute top-0 left-0 min-h-fit min-w-full  ">
      <div className="main-text pt-40">
        <p className="text-lg text-white font-semibold text-center flex items-center justify-center">
          Which sem you are currently in ?
        </p>
        <p className="text-lg text-white font-semibold  flex items-center justify-center mt-10">
          Select your sem
        </p>
      </div>
      <div className="buttons flex items-center justify-center flex-wrap space-x-5 mt-5  ">
        <Link to="/2ndsem">
          {" "}
          <button
            type="button"
            className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white hover:text-black hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring- focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500 m-3"
          >
            2nd
          </button>
        </Link>
        <Link to="/3rdsem">
          <button
            type="button"
            className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white hover:text-black hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring- focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500 m-3 "
          >
            3rd
          </button>
        </Link>
        <Link to="/4thsem">
          <button
            type="button"
            className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white hover:text-black hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring- focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500 m-3 "
          >
            4th
          </button>
        </Link>
        <Link to="/5thsem">
          <button
            type="button"
            className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white hover:text-black hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring- focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500 m- "
          >
            5th
          </button>
        </Link>
        <Link to="/6thsem">
          <button
            type="button"
            className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white hover:text-black hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring- focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500 m-2 "
          >
            6th
          </button>
        </Link>
        <Link to="/7thsem">
          <button
            type="button"
            className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white hover:text-black hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring- focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500 m-2 "
          >
            7th
          </button>
        </Link>
        <Link to="/8thsem">
          <button
            type="button"
            className="py-[.688rem] px-4 inline-flex justify-center items-center gap-2 rounded-md border-2 border-gray-200 font-semibold text-white hover:text-black hover:bg-white hover:border-black focus:outline-none focus:ring-2 focus:ring- focus:ring-offset-2 transition-all text-sm dark:border-gray-700 dark:hover:border-blue-500 m-2 "
          >
            8th
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cgpa;
