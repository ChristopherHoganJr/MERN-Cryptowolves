import React from "react";
import { Link } from "react-router-dom";

// bootstrap imports
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// images
import NavLogo from "../imgs/logoIcon.png";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="px-3">
      <Container>
        <Navbar.Brand className="user-btns d-flex align-items-center justify-content-end gap-3">
          <Link to="/">
            <img src={NavLogo} alt="CryptoWolves Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0 gap-3">
            <Nav.Link as={Link} to="/wolfvision">
              Wolf Vision
            </Nav.Link>
            <Nav.Link as={Link} to="/marketwatch">
              Wolf Market Watch
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/signup"
              className="rounded-3 text-center bg-warning px-3"
            >
              Sign Up
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/login"
              className="bg-success text-center rounded-3 text-light px-3"
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
