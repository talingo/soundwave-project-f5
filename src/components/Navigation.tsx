import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import logo from '../assets/logo.png';

export function Navigation(): JSX.Element {
    return (
    <Navbar className="mt-4">
        <Nav className="mx-auto">
            <Navbar.Brand href="/" className="d-flex align-items-center h-100">
            <img src={logo} width="50" height="50" className="d-inline-block align-middle me-3" alt="Soundwave logo" />{' '}
            <span className="align-middle">Soundwave</span>
            </Navbar.Brand>
        </Nav>
    <Nav className="mx-auto">
        <Nav.Link href="/discover" ><span>Discover</span></Nav.Link>
        <Nav.Link href="/join" ><span>Join</span></Nav.Link>
    </Nav>
  </Navbar>
);
}
