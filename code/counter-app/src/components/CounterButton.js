import React, { Component } from "react";
import PropTypes from "prop-types";
import "./CounterButton.css";

class CounterButton extends Component {
  constructor() {
    super(); // mandatory
  }

  render() {
    return (
      <div className="CounterButton">
        <button onClick={this.increment}>+{this.props.by}</button>
        <button onClick={this.decrement}>-{this.props.by}</button>
      </div>
    );
  }

  increment = () => {
    this.props.parentIncrementMethod(this.props.by);
  };

  decrement = () => {
    this.props.parentDecrementMethod(this.props.by);
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
