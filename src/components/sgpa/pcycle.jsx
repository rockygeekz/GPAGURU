import React, { useState } from "react";
import { Link } from "react-router-dom";
import Results from "./SgpaSheet.jsx";

const Pcycle = () => {
  const [inputText, setinputText] = useState({
    sub1: null,
    sub2: null,
    sub3: null,
    sub4: null,
    sub5: null,
    sub6: null,
    sub7: null,
    sub8: null,
  });

  const modchange = (e) => {
    var value = e.target.value;
    const name = e.target.name;
    if (value.length > 3) {
      value = value.slice(0, 3);
    }
    if (value > 100) {
      value = 100;
    }
    setinputText((old) => {
      return { ...old, [name]: value };
    });
    console.log(inputText);
  };

  const [clicked, setclick] = useState(false);

  const modSubmit = (e) => {
    e.preventDefault();
    setclick(true);
  };

  const changing = () => {
    setclick(false);
  };

  const reset = (e) => {
    setinputText({
      sub1: null,
      sub2: null,
      sub3: null,
      sub4: null,
      sub5: null,
      sub6: null,
      sub7: null,
      sub8: null,
    });
    setclick(false);
  };

  return (
    <div className="absolute top-0 left-0 min-h-fit min-w-full container mt-10">
      <form action="" className="lg:mt-32 " onSubmit={modSubmit}>
        <div className="text-white inputs font-serif grid gap-y-8 lg:gap-y-8 mt-20 lg:mt-12 lg:grid-cols-2 lg:grid-rows-4 text-center max-h-[50rem] lg:text-xl">
          <div className="I-1">
            <label htmlFor="" className="">
              ENGINEERING PHYSICS<br></br>
              <input
                type="number"
                name="sub1"
                className="mx-3 rounded-lg text-black btn-class mt-3 h-10 w-56 outline-none px-8  "
                placeholder="Marks [4-credits]"
                min={0}
                max={100}
                value={inputText.sub1}
                onChange={modchange}
                required
              />
            </label>
          </div>
          <label htmlFor="">
            ENGINEERING MATHEMATICS [M1/M2]
            <br />
            <input
              type="number"
              name="sub2"
              value={inputText.sub2}
              className="mx-3 rounded-lg text-black btn-class mt-3 h-10 w-56 outline-none px-8 "
              placeholder="Marks [4-credits]"
              onChange={modchange}
              min={0}
              max={100}
              required
            />
          </label>

          <label htmlFor="">
            C PROGRAMING
            <br />
            <input
              type="number"
              name="sub3"
              value={inputText.sub3}
              className="mx-3 rounded-lg text-black btn-class mt-3 h-10 w-56 outline-none px-8 "
              placeholder="Marks [3-credits]"
              onChange={modchange}
              min={0}
              max={100}
              required
            />
          </label>
          <label htmlFor="">
            CIVIL/ELECTRICAL/ELECTRONICS/C-PGM/ MECHANICAL ENGINEERING
            <br />
            <input
              type="number"
              name="sub4"
              value={inputText.sub4}
              className="mx-3 rounded-lg text-black btn-class mt-3 h-10 w-56 outline-none px-8 "
              placeholder="Marks [3-credits]"
              onChange={modchange}
              min={0}
              max={100}
              required
            />
          </label>
          <label htmlFor="">
            ETC-1 / PLC-1
            <br />
            <input
              type="number"
              name="sub5"
              value={inputText.sub5}
              className="mx-3 rounded-lg text-black btn-class mt-3 h-10 w-56 outline-none px-8 "
              placeholder="Marks [3-credits]"
              onChange={modchange}
              min={0}
              max={100}
              required
            />
          </label>
          <label htmlFor="">
            ENGLISH
            <br />
            <input
              type="number"
              name="sub6"
              value={inputText.sub6}
              className="mx-3 rounded-lg text-black btn-class mt-3 h-10 w-56 outline-none px-8 "
              placeholder="Marks [1-credit]"
              onChange={modchange}
              min={0}
              max={100}
              required
            />
          </label>
          <label htmlFor="">
            IC / KANNADA
            <br />
            <input
              type="number"
              name="sub7"
              value={inputText.sub7}
              className="mx-3 rounded-lg text-black btn-class mt-3 h-10 w-56 outline-none px-8 "
              placeholder="Marks [1-credit]"
              onChange={modchange}
              min={0}
              max={100}
              required
            />
          </label>
          <label htmlFor="">
            SFH / IDT
            <br />
            <input
              type="number"
              name="sub8"
              value={inputText.sub8}
              className="mx-3 rounded-lg text-black btn-class mt-3 h-10 w-56 outline-none px-8 "
              placeholder="Marks [1-credit]"
              onChange={modchange}
              min={0}
              max={100}
              required
            />
          </label>
        </div>
        <div className="buttons flex items-center justify-center mt-24 ">
          <button
            type="submit"
            className=" w-24  flex justify-center rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] m-5  "
          >
            SUBMIT
          </button>
          <button
            type="reset"
            className=" w-24  flex justify-center rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] m-5   "
            onClick={reset}
          >
            RESET
          </button>
          {clicked ? <Results score={inputText} click={changing} /> : null}
        </div>
      </form>
      <div className="back">
        <Link to="/GPAGURU/s_scheme22">
          <button
            type="button"
            className="text-black bg-gradient-to-r from-white via-white to-white hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white/50 dark:shadow-sm dark:shadow-white/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 rotate-180  top-[3.5rem] left-4 absolute "
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

export default Pcycle;
