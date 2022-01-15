import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <button onClick={this.increment}>+1</button>
        <span className="count">0</span>
      </div>
    );
  }

  increment() {
    console.log("incremented");
  }
}

export default Counter;
