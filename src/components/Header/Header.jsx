import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>ZAP SYSTEM</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="nav-link" to="/dashboard">
            Dashboard
          </Link>
          <Link className="nav-link" to="/mensagem">
            Mensagem
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
