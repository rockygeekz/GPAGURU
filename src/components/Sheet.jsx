import React from "react";


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
          <div className="bg-white p-2 rounded-lg">{totalsgpa}</div>
        </div>
      );
    };
};

export default Results;
