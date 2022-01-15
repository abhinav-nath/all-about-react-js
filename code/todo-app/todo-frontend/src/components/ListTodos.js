import React, { Component } from "react";
import TodoDataService from "../api/todo/TodoDataService";
import "./ListTodos.css";

class ListTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  render() {
    return (
      <div className="ListTodos">
        <h1>List Todos</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Is Completed?</th>
                <th>Target Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
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
    TodoDataService.retrieveAllToDos()
      .then((response) => this.handleSuccesfulResponse(response))
      .catch((error) => this.handleError(error));
  };

  handleSuccesfulResponse = (response) => {
    // console.log(response);
    this.setState({ todos: response.data });
  };

  handleError = (error) => {
    this.setState({ message: error.response.data.message });
  };
}

export default ListTodos;
