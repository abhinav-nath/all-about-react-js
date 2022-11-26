import "../styles.css";
import React, { useState, useEffect, useRef } from "react";

const UseCase1 = () => {
  const [name, setName] = useState("");

  // will persist between re-renders and will not cause you to re-render like state does when it is changed
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div className="card">
      <h4>Usecase 1</h4>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
    </div>
  );
};

export default UseCase1;
