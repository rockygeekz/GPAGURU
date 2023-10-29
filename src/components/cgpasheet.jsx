import React from "react";

const CgpaResult = (props) =>{

        var total = 0;
        for (const key in props.score){
            total +=props.score[`${key}`]
        }
        // console.log(total)
        const totalcgpa = (total/(Object.keys(props.score).length)).toFixed(2)
        const handleOnClose = (e) => {
            if(e.target.id === "container"  || e.target.id === "close" )
            props.click();
          };
          console.log(totalcgpa);
        return (
          <div
          id="container"
            onClick={handleOnClose}
            className=" fixed bg-black bg-opacity-30 backdrop-blur-sm  inset-0 flex items-center justify-center "
          >
            <div className="bg-white p-2 relative rounded-xl w-64 h-52 flex flex-col items-center justify-center ">
              <div className="top text-center text-4xl font-bold text-black" >CGPA<br />
              </div>
              <div className="res m-7 text-center bg-green-700 text-5xl rounded-2xl p-2 text-white ">{totalcgpa}</div>
            <img src="/src/assets/close.png" className="w-5 absolute top-2 right-2" alt="" onClick={handleOnClose} id="close" />
            </div>
          </div>
          );
          
}

export default CgpaResult