import React from "react";
import { useSelector } from "react-redux";

const CounterValue = () => {
  const count = useSelector((state) => state.counter);

  return <h3>Counter Value: {count}</h3>;
};

export default CounterValue;
