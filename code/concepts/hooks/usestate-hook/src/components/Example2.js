import React from "react";
import "./styles.css";
import { useState } from "react";

const Example2 = () => {
  /**
   * Updating a state variable is as simple as invoking the updater function returned by the useState invocation.
   */
  const [age, setAge] = useState(19);
  const handleClick = () => setAge(age + 1);

  return (
    <div className="card">
      <h4>Update State Variable</h4>
      Today I am {age} Years of Age
      <div>
        <button onClick={handleClick}>Get older! </button>
      </div>
    </div>
  );
};

export default Example2;
