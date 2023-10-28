import React, { useState } from "react";
import CgpaResult from './cgpasheet.jsx';


const Sem3 = () =>{

    const [inputText, setinputText] = useState(
        {
            sem1: null,
            sem2: null,
            sem3: null,
          });
    
    
      const modchange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setinputText((old) => {
          return { ...old, [name]: Number(value) };
        });
      };
    
      const [clicked,setclick]=useState(false);
    
      const modSubmit = (e) => {
        e.preventDefault();
        setclick(true)
      };
    
      const reset = (e) => {
        setinputText( 
          {
            sem1: null,
            sem2: null,
            sem3: null,
          }
        )
        setclick(false)
      }

      const changing = () => {
        setclick(false)
      }
    return (
        <div className="absolute top-0 left-0 min-h-fit min-w-full container mt-10">
        <form action="" onSubmit={modSubmit}>
          <div className="inputs ">
            <div className="left flex flex-col gap-y-8 mt-40 text-white  min-w-full p-9 text-center text-xl font-mono">
              <label htmlFor="">
                1st semester 
                <input
                  type="number"
                  name="sem1"
                  value={inputText.sem1}
                  className="m-3 rounded-lg text-black h-10 w-56 px-8 "
                  placeholder="Sgpa"
                  onChange={modchange}
                />
              </label>

              <label htmlFor="">
                2nd semester
                <input
                  type="number"
                  name="sem2"
                  value={inputText.sem2}
                  className="m-3 rounded-lg text-black h-10 w-56 px-8"
                  placeholder="Sgpa"
                  onChange={modchange}
                />
              </label>


              <label htmlFor="">
                3rd semester
                <input
                  type="number"
                  name="sem3"
                  value={inputText.sem3}
                  className="m-3 rounded-lg text-black h-10 w-56 px-8"
                  placeholder="Sgpa"
                  onChange={modchange}
                />
              </label>

              <div className="last-btn flex justify-center items-center gap-3  ">
              <button
                  type="submit"
                  onClick={modSubmit}
                  className=" w-24  flex justify-center rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] m-4"
                >
                  SUBMIT
                </button>
                <button
                  type="reset"
                  className=" w-24  flex justify-center rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] m-4"
                  onClick={reset}
                >
                  RESET
                </button>
                {clicked ? <CgpaResult score={inputText} click={changing} /> : null}
              </div>
            </div>
          </div>
        </form>
      </div>
    )

}

export default Sem3