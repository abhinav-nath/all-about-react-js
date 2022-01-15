import React from "react";
import "./Counter.css";

const Counter = () => {
  return (
    <div className="Counter">
      <button onClick={increment}>+1</button>
      <span className="count">0</span>
    </div>
  );
};

const increment = () => {
  console.log("incremented");
};

export default Counter;
