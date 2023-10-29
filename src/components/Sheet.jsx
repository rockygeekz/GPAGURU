import React from "react";

const Results = (props) => {
  console.log(props);
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
    if (e.target.id === "container" || e.target.id === "close" ) props.click();
  };
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className=" fixed bg-black bg-opacity-30 backdrop-blur-sm  inset-0 flex items-center justify-center "
    >
      <div className="bg-white relative p-2 rounded-xl w-64 h-52 flex flex-col items-center justify-center  ">
        <div className="top text-center text-4xl font-bold ">
          SGPA
          <br />
        </div>
        <div className="res m-7 text-center bg-green-700 text-5xl rounded-2xl p-2 text-white ">
          {totalsgpa}
        <img src="./src/assets/close.png" className="w-5 absolute top-2 right-2 cursor-" alt="" onClick={handleOnClose} id="close"/>
        </div>
      </div>
    </div>
  );
};

export default Results;
