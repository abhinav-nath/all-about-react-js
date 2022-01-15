import React, { Component } from "react";
import TodoDataService from "../api/todo/TodoDataService";
import "./ListTodos.css";

class ListTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      message: ""
    };
  }

  render() {
    return (
      <div className="ListTodos">
        <h1>List Todos</h1>
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Is Completed?</th>
                <th>Target Date</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.deleteTodoHandler(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // a component life-cycle method
  // called immediately after a component is mounted
  componentDidMount = () => {
    this.refreshTodos();
  };

  handleSuccessfulResponse = (response) => {
    // console.log(response);
    this.setState({ todos: response.data });
  };

  handleError = (error) => {
    this.setState({ message: error.response.data.message });
  };

  deleteTodoHandler = (id) => {
    // console.log(id);
    TodoDataService.deleteTodo(id).then((response) => {
      this.setState({ message: `Delete of ${id} successful` });
      this.refreshTodos();
    });
  };

  refreshTodos = () => {
    TodoDataService.retrieveAllToDos()
      .then((response) => this.handleSuccessfulResponse(response))
      .catch((error) => this.handleError(error));
  };
}

export default ListTodos;
