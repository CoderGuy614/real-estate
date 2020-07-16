import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import BootstrapNav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";

import logo from "../assets/homeLogo.png";

const Nav = () => {
  const navBar = () => {
    return (
      <Navbar bg="light" variant="secondary">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="60"
            className="d-inline-block align-top"
          />{" "}
          Hummell and Long Real Estate Professionals
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
          <BootstrapNav pullRight>
            <NavLink href="/favorites">
              <Button color="secondary">MY FAVORITES</Button>
            </NavLink>
            <NavLink href="/contact">
              <Button>CONTACT US</Button>
            </NavLink>
          </BootstrapNav>
        </Navbar.Collapse>
      </Navbar>
    );
  };

  return <div>{navBar()}</div>;
};

export default Nav;
