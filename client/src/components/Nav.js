import React, { Component } from "react";
import "../styles/nav.css";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <a href="/" className="logo"></a>
        <div className="profile">
          <span className="brand-title">
            Hummell and Long Real Estate Professionals{" "}
          </span>
          <a href="/plus" className="button">
            CONTACT US
          </a>
        </div>
      </nav>
    );
  }
}
