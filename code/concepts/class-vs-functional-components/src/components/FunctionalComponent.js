import React, { useState } from "react";

function FunctionalComponent() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div class="flex-child">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <p>Functional</p>
    </div>
  );
}

export default FunctionalComponent;
