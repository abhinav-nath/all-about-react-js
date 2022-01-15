import React, { Component } from "react";
import ListTodos from "./ListTodos";
import HelloWorld from "./HelloWorld";

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="TodoApp">
        <ListTodos />
        <HelloWorld />
      </div>
    );
  }
}

export default TodoApp;
