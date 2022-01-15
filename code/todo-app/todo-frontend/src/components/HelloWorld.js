import React, { Component } from "react";
import HelloWorldService from "../api/todo/HelloWorldService";

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  render() {
    return (
      <div className="card w-25 bg-light rounded mx-auto d-block">
        <div className="card-body">
          <p>Click below button to get a message from the backend</p>
          <button onClick={this.retrieveHello} className="btn btn-outline-success">
            Get Hello
          </button>
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }

  retrieveHello = () => {
    HelloWorldService.execute().then((response) =>
      this.handleSuccesfulResponse(response)
    );
    //.catch();
  };

  handleSuccesfulResponse = (response) => {
    this.setState({ message: response.data });
  };
}

export default HelloWorld;
