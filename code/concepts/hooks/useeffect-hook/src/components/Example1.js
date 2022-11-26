import React from "react";
import "../styles.css";
import { useState, useEffect } from "react";

const Example1 = () => {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="card">
      <h4>Basic Effect</h4>
      <p>You clicked {count} times</p>
      <p>Also look at the title of the current tab in your browser</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default Example1;
