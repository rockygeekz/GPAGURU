import React from 'react';

const counterName = 'myHitCounter';
const useCounter = () => {
  const getVisitors = React.useCallback(() => {
    const visitorsCount = localStorage.getItem(counterName);
    return visitorsCount === null ? 1 : visitorsCount;
  }, []);

  const setVisitors = React.useCallback((newCount) => {
    localStorage.setItem(counterName, newCount);
  }, []);

  return {
    getVisitors,
    setVisitors,
  };
};

export default useCounter;