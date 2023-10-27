import React from "react";

const CgpaResult = (props) =>{

        var total = 0;
        for (const key in props.score){
            total +=props.score[`${key}`]
        }
        console.log(total)
        const totalcgpa = (total/(Object.keys(props.score).length)).toFixed(2)
    return (
        <div className="sgpa-div">
        <h1>CGPA</h1>
        <div>{totalcgpa}</div>
        </div>)
}

export default CgpaResult