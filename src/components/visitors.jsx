import React, { useState } from "react";
import useCounter from "./useCounter";

const Visits = () => {
  const [visitorsCount, setVisitorsCount] = React.useState(1239);

  const { getVisitors, setVisitors } = useCounter();

  React.useEffect(() => {
    const visitors = getVisitors();
    setVisitorsCount(visitors);
    setVisitors(parseInt(visitors) + 1);
  }, []);

  return (
    <div className="inset-0  left-[80%] flex items-center justify-center">
      <div className="top bg-[linear-gradient(to_bottom,rgba(61,58,58,0.9)50%,rgba(99,93,93,0.9))] text-xl w-[7rem] h-[2rem] font-serif absolute text- font-extrabold inset-0 left-[60%] px-2 pt-[0.1rem] rounded-lg text-white mt-7">
        Views:
      </div>
      <div className="bottom text-center font-serif font-extrabold text-2xl bg-[linear-gradient(to_bottom,rgba(61,58,58,0.9)50%,rgba(99,93,93,0.9))] w-[3.6rem] h-[2rem] text-white rounded-lg inset-0 absolute mt-7 left-[18rem]">
        {visitorsCount}
      </div>
    </div>
  );
};

export default Visits;
