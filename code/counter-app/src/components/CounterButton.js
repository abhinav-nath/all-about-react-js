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
        <button onClick={() => this.props.parentIncrementMethod(this.props.by)}>+{this.props.by}</button>
        <button onClick={() => this.props.parentDecrementMethod(this.props.by)}>-{this.props.by}</button>
      </div>
    );
  }

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
