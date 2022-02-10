import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div class="flex-child">
        <h1>{this.state.count}</h1>
        <button onClick={this.increase}>+</button>
        <p>Class Component</p>
      </div>
    );
  }
}

export default ClassComponent;
