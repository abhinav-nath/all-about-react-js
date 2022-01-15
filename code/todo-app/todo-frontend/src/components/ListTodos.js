import React, { Component } from "react";
import "./ListTodos.css";

class ListTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        id: 1,
        description: "Learn React"
      }
    };
  }

  render() {
    return (
      <div className="ListTodos">
        <h1>List Todos</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.todo.id}</td>
              <td>{this.state.todo.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListTodos;
