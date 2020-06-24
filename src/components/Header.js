import React from 'react';
import logo from '../assets/logo.png';
import { GoThreeBars } from "react-icons/go";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (
        <Navbar className="navbar" expand="lg">
            <Navbar.Brand>
                <img src={logo} className="logo" alt="Nana Logo" />
            </Navbar.Brand>
            <Navbar.Toggle className="nav-toggle"><GoThreeBars /></Navbar.Toggle>
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Nav.Link href="#products">Products</Nav.Link>
                    <Nav.Link href="#comissions">Comissions</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;