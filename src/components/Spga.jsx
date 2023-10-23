import React, { useState } from 'react'


const Spga = () => {
  const [inputText,setinputText] = useState([
    {
      sub1:"",
      sub2:"",
      sub3:"",
      sub4:"",
      sub5:"",
      sub6:"",
      sub7:"",
      sub8:""
    },

  ]);
  
  const modchange = (e)=>{
    console.log(e.target.value);
    const value = e.target.value;
    const name = e.target.name;
    setinputText((old)=>{
      return {...old,[name]:value}
    })
  }
  const modSubmit = (e)=>{
    e.preventDefault();
    console.log(inputText);
  }
  return (
    
  <div className='absolute top-0 left-0 min-h-fit min-w-full container mt-10'  >
      <form action="" onSubmit={modSubmit}>
        
      <div className="inputs ">
      <div className="left flex flex-col gap-y-8 text-white min-h-screen min-w-full p-9  font-mono">
        <label htmlFor="">
          sub1
        <input type="text" inputmode="numeric" name="sub1" id=""  className='m-3 rounded-lg text-black' placeholder='Marks' onChange={modchange}/>
        </label>
        <label htmlFor="">
          sub2
          <input type="text" inputmode="numeric" name="sub1" id="" className=' rounded-lg mx-3  text-black' placeholder='Marks' onChange={modchange} />
        </label>
        <label htmlFor="">
          sub3
          <input type="text" inputmode="numeric" name="sub1" id="" className=' rounded-lg mx-3  text-black'
          placeholder='Marks' onChange={modchange} />
        </label>
        <label htmlFor="">
          sub4
          <input type="text" inputmode="numeric" name="sub1" id=""className=' rounded-lg mx-3  text-black' placeholder='Marks' onChange={modchange} />
        </label>
        <label htmlFor="">
          sub5
          <input type="text" inputmode="numeric" name="sub1" id=""className=' rounded-lg mx-3 text-black' placeholder='Marks' onChange={modchange} />
        </label>
        <label htmlFor="">
          sub6
          <input type="text" inputmode="numeric" name="sub1" id=""className=' rounded-lg mx-3 text-black' placeholder='Marks'onChange={modchange}  />
        </label>
        <label htmlFor="">
          sub7
          <input type="text" inputmode="numeric" name="sub1" id=""className=' rounded-lg mx-3  text-black' placeholder='Marks' onChange={modchange}  />
        </label>
        <label htmlFor="">
          sub6
          <input type="text" inputmode="numeric" name="sub1" id=""className=' rounded-lg mx-3  text-black' placeholder='Marks' onChange={modchange}  />
        </label>
<div className="last-btn flex justify-center items-center gap-3  ">
<button
  type="submit" onClick={modSubmit}
  className=" w-24  flex justify-center rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]">
  SUBMIT
</button>
        <button
  type="reset"
  className=" w-24  flex justify-center rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]">
  Reset
</button>
</div>
      </div>
      </div>
      </form>
  </div>
  )
}

export default Spga
