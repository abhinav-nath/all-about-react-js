import React, { Component } from "react";
import ListTodos from "./ListTodos";
import "./TodoApp.css";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <p>Todo Application</p>
        <ListTodos />
      </div>
    );
  }
}

export default TodoApp;
