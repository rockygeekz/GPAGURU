import React from "react";

const CgpaResult = (props) =>{

        var total = 0;
        for (const key in props.score){
            total +=props.score[`${key}`]
        }
        console.log(total)
        const totalcgpa = (total/(Object.keys(props.score).length)).toFixed(2)
        const handleOnClose = (e) => {
            if(e.target.id === "container")
            props.click();
          };
        return (
            <div
            id="container"
              onClick={handleOnClose}
              className=" fixed bg-black bg-opacity-30 backdrop-blur-sm  inset-0 flex items-center justify-center "
            >
              <div className="bg-white p-2 rounded-lg">{totalcgpa}</div>
            </div>
          );
          console.log(totalcgpa);
}

export default CgpaResult