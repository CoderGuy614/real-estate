import React, { Component } from "react";
import "../styles/nav.css";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <a href="/" className="logo"></a>
        <div className="profile">
          <a href="/plus" className="button">
            CONTACT US
          </a>
        </div>
      </nav>
    );
  }
}
