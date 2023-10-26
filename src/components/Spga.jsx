import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Results from './Sheet.jsx';

const Spga = () => {

  const [inputText, setinputText] = useState(
    {
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
    console.log(inputText)
  };

  const [clicked,setclick]=useState(false);

  const modSubmit = (e) => {
    e.preventDefault();
    setclick(true)
  };

  const reset = (e) => {
    setinputText( 
      {
        sub1: null,
        sub2: null,
        sub3: null,
        sub4: null,
        sub5: null,
        sub6: null,
        sub7: null,
        sub8: null,
      }
    )
    setclick(false)
  }


  return (
    <div className="absolute top-0 left-0 min-h-fit min-w-full container mt-10">
      <form action="" onSubmit={modSubmit}>
        <div className="inputs ">
          <div className="left flex flex-col gap-y-8 text-white min-h-screen min-w-full p-9  font-mono">
            <label htmlFor="">
              sub1
              <input
                type="numbenull"
                name="sub1"
                value={inputText.sub1}
                className="m-3 rounded-lg text-black"
                placeholder="Marks"
                onChange={modchange}
              />
            </label>
            <label htmlFor="">
              sub2
              <input
                type="number"
                name="sub2"
                value={inputText.sub2}
                className=" rounded-lg mx-3  text-black"
                placeholder="Marks"
                onChange={modchange}
              />
            </label>
            <label htmlFor="">
              sub3
              <input
                type="number"
                name="sub3"
                value={inputText.sub3}
                className=" rounded-lg mx-3  text-black"
                placeholder="Marks"
                onChange={modchange}
              />
            </label>
            <label htmlFor="">
              sub4
              <input
                type="number"
                name="sub4"
                value={inputText.sub4}
                className=" rounded-lg mx-3  text-black"
                placeholder="Marks"
                onChange={modchange}
              />
            </label>
            <label htmlFor="">
              sub5
              <input
                type="number"
                name="sub5"
                value={inputText.sub5}
                className=" rounded-lg mx-3 text-black"
                placeholder="Marks"
                onChange={modchange}
              />
            </label>
            <label htmlFor="">
              sub6
              <input
                type="number"
                name="sub6"
              value={inputText.sub6}
                className=" rounded-lg mx-3 text-black"
                placeholder="Marks"
                onChange={modchange}
              />
            </label>
            <label htmlFor="">
              sub7
              <input
                type="number"
                name="sub7"
                value={inputText.sub7}
                className=" rounded-lg mx-3  text-black"
                placeholder="Marks"
                onChange={modchange}
              />
            </label>
            <label htmlFor="">
              sub8
              <input
                type="number"
                name="sub8"
                value={Number(inputText.sub8)}
                className=" rounded-lg mx-3  text-black"
                placeholder="Marks"
                onChange={modchange}
              />
            </label>
            <div className="last-btn flex justify-center items-center gap-3  ">
            <button
                type="submit"
                onClick={modSubmit}
                className=" w-24  flex justify-center rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
              >
                SUBMIT
              </button>
              <button
                type="reset"
                className=" w-24  flex justify-center rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                onClick={reset}
              >
                RESET
              </button>
              { clicked ? <Results score={inputText}/> : null }
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Spga;
