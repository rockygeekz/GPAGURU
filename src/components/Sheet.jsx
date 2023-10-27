import React from "react";
import MyModel from "./MyModel";

const Results = (props) => {
  var gradepoints = [];
  for (const key in props.score) {
    if (props.score[`${key}`] >= 100) {
      gradepoints.push(10);
    } else {
      gradepoints.push(Math.floor(props.score[`${key}`] / 10) + 1);
    }
  }

  const fourcr = (gradepoints[0] + gradepoints[1]) * 4;
  const threecr = (gradepoints[2] + gradepoints[3] + gradepoints[4]) * 3;
  const onecr = gradepoints[5] + gradepoints[6] + gradepoints[7];
  const totalsgpa = ((fourcr + threecr + onecr) / 20).toFixed(2);

  gradepoints = [];

  return (
    <div className="sgpa-div">
      {/* <h1>SGPA</h1> */}
      <div>{totalsgpa}</div>
      <div> <MyModel result={totalsgpa} /> </div>
    </div>
  );
};

export default Results;
