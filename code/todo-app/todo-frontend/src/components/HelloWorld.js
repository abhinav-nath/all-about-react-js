import React, { Component } from "react";
import HelloWorldService from "../api/todo/HelloWorldService";

class HelloWorld extends Component {
  render() {
    return (
      <div className="card w-25 bg-light rounded mx-auto d-block">
        <div className="card-body">
          <p>Click below button to get a message from the b ackend</p>
          <button onClick={this.retrieveHello} className="btn btn-outline-success">
            Get Hello
          </button>
        </div>
      </div>
    );
  }

  retrieveHello = () => {
    HelloWorldService.execute().then((response) => console.log(response));
    //.catch();
  };
}

export default HelloWorld;
