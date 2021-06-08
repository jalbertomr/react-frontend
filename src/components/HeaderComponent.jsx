import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar nabvar-expand-ms navbar-dark bg-dark">
            <div>
              <a
                href="https://jalbertomr.blogspot.com"
                className="navbar-brand"
              >
                Person Management App
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
