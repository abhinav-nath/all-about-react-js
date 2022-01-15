import React, { Component } from "react";
import CounterButton from "./CounterButton";
import "./Counter.css";

class Counter extends Component {
  render() {
    return (
      <div className="Counter">
        <CounterButton by={1} />
        <CounterButton by={5} />
        <CounterButton by={10} />
        <CounterButton by={100} />
      </div>
    );
  }
}

export default Counter;
