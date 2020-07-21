import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import BootstrapNav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";

import logo from "../assets/homeLogo.png";

const Nav = () => {
  const navBar = () => {
    return (
      <Navbar bg="light" variant="secondary" className="navbar">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="60"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>

        <h5 className="navbar-text">Hummell and Long Real Estate</h5>
        <Navbar.Collapse className="justify-content-end">
          <BootstrapNav>
            <div className="d-none d-md-block social-container">
              <h5>Connect</h5>
              <i class="fab fa-facebook-square fa-2x social-icon"></i>
              <i class="fab fa-instagram-square fa-2x social-icon"></i>
              <i class="fab fa-twitter-square fa-2x social-icon"></i>
              <i class="fab fa-whatsapp-square fa-2x social-icon"></i>
            </div>
          </BootstrapNav>
        </Navbar.Collapse>
      </Navbar>
    );
  };

  return <div>{navBar()}</div>;
};

export default Nav;
