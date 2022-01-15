import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CounterButton.css";

class CounterButton extends Component {
  // Define the initial state in the constructor
  // state => counter 0
  constructor() {
    super(); // mandatory

    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <div className="CounterButton">
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

// Default value
CounterButton.defaultProps = {
  by: 1
};

// Type constrain
CounterButton.propTypes = {
  by: PropTypes.number
};

export default CounterButton;
