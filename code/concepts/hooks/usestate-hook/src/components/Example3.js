import React from "react";
import "./styles.css";
import { useState } from "react";

/**
 * Multiple State Variables
 */
const Example3 = () => {
  const [age, setAge] = useState(19);
  const [siblingsNum, setSiblingsNum] = useState(10);

  const handleAge = () => setAge(age + 1);
  const handleSiblingsNum = () => setSiblingsNum(siblingsNum + 1);

  return (
    <div className="card">
      <h4>Multiple State Variables</h4>
      <p>Today I am {age} Years of Age</p>
      <p>I have {siblingsNum} siblings</p>

      <div>
        <button onClick={handleAge}>Get older!</button>
        <button onClick={handleSiblingsNum}>More siblings!</button>
      </div>
    </div>
  );
};

export default Example3;
