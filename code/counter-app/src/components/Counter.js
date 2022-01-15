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
  }

  render = () => {
    return (
      <div className="Counter">
        <button onClick={this.increment}>+{this.props.by}</button>
        <span className="count">{this.state.counter}</span>
      </div>
    );
  };

  // Update the state by using setState()
  // counter++
  increment = () => {
    this.setState({
      counter: this.state.counter + this.props.by,
    });
  };
}

Counter.defaultProps = {
  by: 1
};

export default Counter;
