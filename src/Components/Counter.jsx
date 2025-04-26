import React from "react";
import { useSelector } from "react-redux";
import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButton";

const Counter = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div
      className={theme === "light" ? "light_theme" : "dark_theme"}
      style={{ paddingLeft: "40px" }}
    >
      <h2>Counter App</h2>

      <CounterValue />

      <CounterButtons />
    </div>
  );
};

export default Counter;
