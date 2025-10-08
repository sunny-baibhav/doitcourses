import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';
// import logo from '../public/home.svg'; // adjust path if needed

function Navbar() {
  const buttonStyle = {
    padding: '8px 20px',
    border: '1px solid #007bff',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    textAlign: 'center'
  };

  const hoverStyle = {
    backgroundColor: '#0056b3',
    borderColor: '#0056b3',
  };

  return (
    <BootstrapNavbar expand="lg" style={{ backgroundColor: '#040000' }}>
      <Container style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo on left */}
        <BootstrapNavbar.Brand href="#home">
          <img src='/home.svg' alt="Logo" style={{ height: '40px', width: 'auto' }} />
        </BootstrapNavbar.Brand>

        {/* Mobile toggle */}
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Centered buttons */}
        <BootstrapNavbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'center' }}>
          <Nav style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <Nav.Link
              href="#courses"
              style={buttonStyle}
              onMouseEnter={e => Object.assign(e.target.style, hoverStyle)}
              onMouseLeave={e => Object.assign(e.target.style, buttonStyle)}
            >
              Courses
            </Nav.Link>
            <Nav.Link
              href="#domain"
              style={buttonStyle}
              onMouseEnter={e => Object.assign(e.target.style, hoverStyle)}
              onMouseLeave={e => Object.assign(e.target.style, buttonStyle)}
            >
              Domain
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
