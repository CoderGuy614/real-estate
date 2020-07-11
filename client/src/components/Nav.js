import React, { Component } from "react";
import "../styles/nav.css";

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <a href="/" className="logo"></a>
        <div className="profile">
          <span className="brand-title">
            <em>
              <strong>Hummell and Long Real Estate Professionals</strong>
            </em>
          </span>
          <a href="/plus" className="button">
            CONTACT US
          </a>
        </div>
      </nav>
    );
  }
}
