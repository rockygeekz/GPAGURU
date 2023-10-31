import React, { useState } from "react";
import useCounter from './useCounter';

const Visits = () =>{
  const [visitorsCount, setVisitorsCount] = React.useState(0);

  const { getVisitors, setVisitors } = useCounter();

  React.useEffect(() => {
    const visitors = getVisitors();
    setVisitorsCount(visitors);
    setVisitors(parseInt(visitors)+1);
  }, []);

  return (
    <div>
      This webite was visited {visitorsCount} times.
    </div>
  );
}

export default Visits

