import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/logo-home.png";
import "./Header.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = ({
  expanded,
  show2,
  count,
  display,
  incrementCount,
  handleToggle,
}) => {
  // const [expanded, setExpanded] = useState(false);
  // const [button, setButton] = useState('flex');
  // const handleToggle = (count,incrementCount) => {
  //   setExpanded(!expanded);
  //   setButton('block');
  console.log(show2);
  // };

  return (
    <Navbar expand="md" expanded={expanded}>
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="Company Logo" className="align-top logo-image" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleToggle} aria-controls="navbarCollapse" />
        <Navbar.Collapse id="navbarCollapse" className="justify-content-end">
          <Nav>
            <div style={{ display: count }}>
              <div
                style={{ display: "flex" }}
                className="justify-content-center align-items-center mt-lg-0 mt-2"
              >
                <div>
                  <NavLink to="/" className="link-nav-custom m-lg-1 m-md-0">
                    Home
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/about"
                    className="link-nav-custom m-lg-1 m-md-0"
                  >
                    About
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/services"
                    className="link-nav-custom m-lg-1 m-md-0"
                  >
                    Services
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/projects"
                    className="link-nav-custom m-lg-1 m-md-0"
                  >
                    Projects
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/themes"
                    className="link-nav-custom m-lg-1 m-md-0"
                  >
                    Theme
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    to="/contact"
                    className="link-nav-custom m-lg-1 m-md-0"
                  >
                    Contact
                  </NavLink>
                </div>
                {show2 ? (
                  <div style={{ display: show2 }}>
                    <button
                      className="btn-talk m-lg-1 m-md-0"
                      onClick={incrementCount}
                    >
                      <span style={{ color: "white" }}>Go to App</span>
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
