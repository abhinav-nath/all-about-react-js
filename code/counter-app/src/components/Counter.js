import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  // Define the initial state in the constructor
  // state => counter 0
  constructor() {
    super(); // mandatory

    this.state = {
      counter: 0
    };

    // to make 'this' available to the increment function
    // we need to bind 'this' to the increment function
    // not required when we use arrow functions
    // this.increment = this.increment.bind(this);
  }

  render = () => {
    return (
      <div className="Counter">
        <button onClick={this.increment}>+1</button>
        <span className="count">{this.state.counter}</span>
      </div>
    );
  }

  // Update the state by using setState()
  // counter++
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

export default Counter;
