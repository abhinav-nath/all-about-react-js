import React from "react";
import "./styles.css";
import { useState } from "react";

/**
 * Use Object State Variable
 *
 * As opposed to strings and numbers, you could also use an object as the initial value passed on to useState.
 *
 * You have to pass the entire object to the useState updater function as the object is replaced NOT merged.
 */
const Example4 = () => {
  const [state, setState] = useState({ age: 19, siblingsNum: 4 });
  const handleClick = (val) =>
    setState({
      ...state,
      [val]: state[val] + 1
    });
  const { age, siblingsNum } = state;

  return (
    <div className="card">
      <h4>Use Object State Variable</h4>
      <p>Today I am {age} Years of Age</p>
      <p>I have {siblingsNum} siblings</p>

      <div>
        <button onClick={handleClick.bind(null, "age")}>Get older!</button>
        <button onClick={handleClick.bind(null, "siblingsNum")}>
          More siblings!
        </button>
      </div>
    </div>
  );
};

export default Example4;
