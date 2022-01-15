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
        <CounterButton by={1} parentIncrementMethod={this.increment} parentDecrementMethod={this.decrement} />
        <CounterButton by={5} parentIncrementMethod={this.increment} parentDecrementMethod={this.decrement} />
        <CounterButton by={10} parentIncrementMethod={this.increment} parentDecrementMethod={this.decrement} />
        <CounterButton by={100} parentIncrementMethod={this.increment} parentDecrementMethod={this.decrement} />
        <span className="count">{this.state.counter}</span>
        <div><button className="reset" onClick={this.reset}>Reset</button></div>
      </div>
    );
  }

  increment = (by) => {
    console.log(`parent increment - ${by}`);
    this.setState((prevState) => {
      return { counter: prevState.counter + by };
    });
  };

  decrement = (by) => {
    console.log(`parent decrement - ${by}`);
    this.setState((prevState) => {
      return { counter: prevState.counter - by };
    });
  };

  reset = () => {
    this.setState({ counter: 0 });
  }
}

export default Counter;
