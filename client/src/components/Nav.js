import React, { Component } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/contact" className="button">
            {" "}
            CONTACT US
          </Link>
        </div>
      </nav>
    );
  }
}
