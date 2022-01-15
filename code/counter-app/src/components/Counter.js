import React, { Component } from "react";
import "./Counter.css";

class Counter extends Component {
  // Define the initial state in the constructor
  // state => counter 0
  constructor() {
    super(); // mandatory

    this.state = {
      counter: 0,
    };
  }

  render = () => {
    const inlineStyle = { fontSize: "50px", padding: "15px 30px" };

    return (
      <div className="Counter">
        <button onClick={this.increment}>+1</button>
        <span className="count" style={inlineStyle}>
          {this.state.counter}
        </span>
      </div>
    );
  };

  // Update the state by using setState()
  // counter++
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
}

export default Counter;
