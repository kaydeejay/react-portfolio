import React from 'react'
import { useLocation } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavHeader = () => {
  const location = useLocation();
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Kevin Devine-Jones</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            href="/"
            className={location.pathname === '/' ? 'active' : ''}>
            About Me
          </Nav.Link>
          <Nav.Link
            href="/portfolio"
            className={location.pathname === '/portfolio' ? 'active' : ''}>
            Portfolio
          </Nav.Link>
          <Nav.Link
            href="/contact"
            className={location.pathname === '/contact' ? 'active' : ''}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavHeader;
