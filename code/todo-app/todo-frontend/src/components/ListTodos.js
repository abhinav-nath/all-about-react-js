import React, { Component } from "react";
import "./ListTodos.css";

class ListTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, description: "Learn React" },
        { id: 2, description: "Become Rich" },
        { id: 3, description: "Buy Vegetables" }
      ]
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
            {this.state.todos.map((todo) => (
              <tr>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListTodos;
