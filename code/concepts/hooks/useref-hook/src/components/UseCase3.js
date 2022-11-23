import "../styles.css";
import React, { useState, useEffect, useRef } from "react";

const UseCase1 = () => {
  const [name, setName] = useState("");

  // store the previous value of your state
  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div className="usecase">
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
    </div>
  );
};

export default UseCase1;
