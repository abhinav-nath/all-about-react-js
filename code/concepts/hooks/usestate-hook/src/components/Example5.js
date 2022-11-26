import React from "react";
import "./styles.css";
import { useState } from "react";

/**
 * Functional setState
 *
 * The updater function returned from invoking useState can also take a function similar to the good ol' setState.
 */
const Example5 = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h4>Functional setState</h4>
      <p>Count value is: {count}</p>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Plus (+)
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Minus (-)
      </button>
    </div>
  );
};

export default Example5;
