import "../styles.css";
import React, { useState, useRef } from "react";

const UseCase1 = () => {
  const [name, setName] = useState("");

  // reference elements inside your HTML
  const inputRef = useRef();

  function focus() {
    inputRef.current.focus();
  }

  return (
    <div className="usecase">
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={focus}>Focus</button>
    </div>
  );
};

export default UseCase1;
