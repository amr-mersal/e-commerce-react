import React from "react";
import { Navbar, Container, FormControl, Nav } from "react-bootstrap";
import Logo from "../../Images/logo.png";
import login from "../../Images/login.png";
import cart from "../../Images/cart.png";

const NavBarLogin = () => {
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={Logo} className="logo" alt="sfvs" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            <Nav.Link
              href="/login"
              className="nav-text d-flex mt-3 justify-content-center"
            >
              <img src={login} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>Sign</p>
            </Nav.Link>
            <Nav.Link
              href="/cart"
              className=" d-flex mt-3 justify-content-center"
              style={{ color: "white" }}
            >
              <img src={cart} className="login-img" alt="cart" />
              <p style={{ color: "white" }}>Cart</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBarLogin;
