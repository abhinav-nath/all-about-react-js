import React, { Component } from "react";
import CounterButton from "./CounterButton";
import "./Counter.css";

class Counter extends Component {
  constructor() {
    super(); // mandatory

    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <div className="Counter">
        <CounterButton by={1} parentIncrementMethod={this.increment} />
        <CounterButton by={5} parentIncrementMethod={this.increment} />
        <CounterButton by={10} parentIncrementMethod={this.increment} />
        <CounterButton by={100} parentIncrementMethod={this.increment} />
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }

  increment = (by) => {
    console.log(`parent increment - ${by}`);
    this.setState({
      counter: this.state.counter + by
    });
  };
}

export default Counter;
