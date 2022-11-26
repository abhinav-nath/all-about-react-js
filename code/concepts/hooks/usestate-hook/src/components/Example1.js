import React from "react";
import "./styles.css";
import { useState } from "react";

const Example1 = () => {
  /**
   * Declaring a state variable is as simple as calling useState with some initial state value.
   */
  const [count] = useState(100);

  return (
    <div className="card">
      <h4>Declare State Variable</h4>
      <div>State variable is {count}</div>
    </div>
  );
};

export default Example1;
