import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark justify-content-center">
          <div className="navbar-brand">Todo Application</div>
        </nav>
      </header>
    );
  }
}

export default Header;
