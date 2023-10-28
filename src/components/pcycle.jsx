import React, { useState } from "react";
import { Link } from "react-router-dom";
import Results from "./Sheet.jsx";
import MyModel from "./MyModel.jsx";

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
    const value = e.target.value;
    const name = e.target.name;
    setinputText((old) => {
      return { ...old, [name]: Number(value) };
    });
    console.log(inputText);
  };

  const [clicked, setclick] = useState(false);

  const modSubmit = (e) => {
    e.preventDefault();
    setclick(true);
  };

  const changing = () => {
    setclick(false)
  }

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
        <div className="text-white inputs grid gap-y-8 lg:gap-y-8 mt-20 lg:mt-12 lg:grid-cols-2 lg:grid-rows-4 text-center max-h-[50rem] lg:text-xl">
          <div className="I-1">
            <label htmlFor="" className="">
              ENGINEERING PHYSICS<br></br>
              <input
                type="number"
                name="sub1"
                value={inputText.sub1}
                className="mx-3 rounded-lg text-black btn-class mt-3 h-10 w-56 outline-none px-8  "
                placeholder="Marks"
                onChange={modchange}
              />
            </label>
          </div>
          <label htmlFor="">
            ENGINEERING MATHEMATICS [M1/M2]
            <br />
            <input
              type="number"
              name="sub2"
              value={inputText.sub7}
              className="mx-3 rounded-lg text-black btn-class mt-3 h-10 w-56 outline-none px-8 "
              placeholder="Marks"
              onChange={modchange}
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
              placeholder="Marks"
              onChange={modchange}
            />
          </label>
          <label htmlFor="">
            CIVIL / ELECTRICAL / ELECTRONICS / C PROGRAMING / MECHANICAL ENGINEERING
            <br />
            <input
              type="number"
              name="sub4"
              value={inputText.sub4}
              className="mx-3 rounded-lg text-black btn-class mt-3 h-10 w-56 outline-none px-8 "
              placeholder="Marks"
              onChange={modchange}
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
              placeholder="Marks"
              onChange={modchange}
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
              placeholder="Marks"
              onChange={modchange}
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
              placeholder="Marks"
              onChange={modchange}
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
              placeholder="Marks"
              onChange={modchange}
            />
          </label>

        </div>
        <div className="buttons flex items-center justify-center mt-14 ">
          {/* {" "} */}
          <button
            type="submit"
            // onClick={modSubmit}
            onClick={
              modSubmit
            }
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
          {clicked ? (
            <Results
              score={inputText}
              click={changing}
              
            />
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Pcycle;
