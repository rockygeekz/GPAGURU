import React, { useState } from "react";
import CgpaResult from './cgpasheet.jsx';
import  {Link} from "react-router-dom"
import CgpaResult2 from './cgpasheet2.jsx';


const Sem8 = () =>{

    const [inputText, setinputText] = useState(
        {
          sem1: 0,
          sem2: 0,
          sem3: 0,
          sem4: 0,
          sem5: 0,
          sem6: 0,
          sem7: 0,
          sem8: 0,
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
            sem1: 0,
            sem2: 0,
            sem3: 0,
            sem4: 0,
            sem5: 0,
            sem6: 0,
            sem7: 0,
            sem8: 0,
          }
        )
        setclick(false)
      }


      const changing = () => {
        setclick(false)
      }


    return (
      <><div className="container min-h-screen min-w-full 
      bg-center bg-cover bg-fixed  bg-no-repeat h-[75rem] lg:h-[55rem] bg-[#0F1E26]" >
        
      </div>
        <div className="absolute top-0 text-xl left-0 min-h-fit min-w-full container mt-10">
        <form action="" onSubmit={modSubmit}>
          <div className="inputs ">
            <div className="text-white inputs grid gap-y-8 lg:gap-y-8 mt-20 lg:mt-20 lg:grid-cols-2 lg:grid-rows-4 text-center max-h-[50rem] lg:text-xl">
              <label htmlFor="">
                1st semester 
                <input
                  type="number"
                  name="sem1"
                  className="m-3 rounded-lg text-black h-10 w-56 px-8"
                  placeholder="Sgpa"
                  onChange={modchange}
                  min={0}
                max={10}
                step={0.001}
                required
                />
              </label>

              <label htmlFor="">
                2nd semester
                <input
                  type="number"
                  name="sem2"
                  className="m-3 rounded-lg text-black h-10 w-56 px-8 "
                  placeholder="Sgpa"
                  onChange={modchange}
                  min={0}
                max={10}
                step={0.001}
                required
                />
              </label>


              <label htmlFor="">
                3rd semester
                <input
                  type="number"
                  name="sem3"
                  className="m-3 rounded-lg text-black h-10 w-56 px-8"
                  placeholder="Sgpa"
                  onChange={modchange}
                  min={0}
                max={10}
                step={0.001}
                required
                />
              </label>


              <label htmlFor="">
                4th semester
                <input
                  type="number"
                  name="sem4"
                  className="m-3 rounded-lg text-black h-10 w-56 px-8"
                  placeholder="Sgpa"
                  onChange={modchange}
                  min={0}
                max={10}
                step={0.001}
                required
                />
              </label>


              <label htmlFor="">
                5th semester
                <input
                  type="number"
                  name="sem5"
                  className="m-3 rounded-lg text-black h-10 w-56 px-8"
                  placeholder="Sgpa"
                  onChange={modchange}
                  min={0}
                max={10}
                step={0.001}
                required
                />
              </label>


              <label htmlFor="">
                6th semester
                <input
                  type="number"
                  name="sem6"
                  className="m-3 rounded-lg text-black h-10 w-56 px-8"
                  placeholder="Sgpa"
                  onChange={modchange}
                  min={0}
                max={10}
                step={0.001}
                required
                />
              </label>

              <label htmlFor="">
                7th semester
                <input
                  type="number"
                  name="sem7"
                  className="m-3 rounded-lg text-black h-10 w-56 px-8"
                  placeholder="Sgpa"
                  onChange={modchange}
                  min={0}
                max={10}
                step={0.001}
                required
                />
              </label>

              <label htmlFor="">
                8th semester
                <input
                  type="number"
                  name="sem8"
                  className="m-3 rounded-lg text-black h-10 w-56 px-8"
                  placeholder="Sgpa"
                  onChange={modchange}
                  min={0}
                max={10}
                step={0.001}
                required
                />
              </label>

              
            </div>
            <div className="last-btn flex mt-44 justify-center items-center gap-3  ">
              <button
                  type="submit"
                  className=" w-24  flex justify-center rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] m-4"
                >
                  SUBMIT
                </button>
                <button
                  type="reset"
                  className=" w-24  flex justify-center rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]  m-4"
                  onClick={reset}
                >
                  RESET
                </button>
                {clicked ? <CgpaResult2 score={inputText} click={changing} /> : null}
              </div>
          </div>
        </form>
        <div className="back">
      <Link to="/GPAGURU/cg_scheme22" ><button
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
</button></Link>
      </div>
      </div>
      </>
    )

}

export default Sem8