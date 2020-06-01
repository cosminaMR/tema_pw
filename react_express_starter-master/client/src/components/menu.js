
import React from 'react';
import {Nav,Navbar,Badge} from 'react-bootstrap';
import "./menu.css";

export const Menu = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/home" id="karion"><i className="fas fa-city"></i> KORION </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/employees">Employees</Nav.Link>
      <Nav.Link href="/user/login">Login</Nav.Link>
      <Nav.Link href="/user/register">Register</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);
