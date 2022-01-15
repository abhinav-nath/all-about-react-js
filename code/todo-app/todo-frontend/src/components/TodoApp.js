import React, { Component } from "react";
import ListTodos from "./ListTodos";

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TodoApp">
        <ListTodos />
        <div className="card w-25 bg-light rounded mx-auto d-block">
          <div className="card-body">
            <p>Click below button to get a message from the backend</p>
            <button onClick={this.retrieveHello} className="btn btn-outline-success">
              Get Hello
            </button>
          </div>
        </div>
      </div>
    );
  }

  retrieveHello = () => {
    console.log("retrieve clicked!");
  };
}

export default TodoApp;
