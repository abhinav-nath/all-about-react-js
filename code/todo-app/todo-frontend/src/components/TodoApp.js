import React, { Component } from "react";
import ListTodos from "./ListTodos";
import "./TodoApp.css";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <ListTodos />
      </div>
    );
  }
}

export default TodoApp;
