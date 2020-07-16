import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import BootstrapNav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";

import logo from "../assets/homeLogo.png";
import { connect } from "react-redux";
import { toggleShowFavorites } from "../actions/favorite";

const Nav = ({ showFavorites: { showFavorites }, toggleShowFavorites }) => {
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
            <NavLink>
              {showFavorites ? (
                <Button onClick={toggleShowFavorites} color="secondary">
                  {" "}
                  HIDE FAVORITES
                </Button>
              ) : (
                <Button onClick={toggleShowFavorites} color="secondary">
                  SHOW FAVORITES
                </Button>
              )}
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

const mapStateToProps = (state) => ({
  showFavorites: state.favoriteReducer,
});

export default connect(mapStateToProps, { toggleShowFavorites })(Nav);
