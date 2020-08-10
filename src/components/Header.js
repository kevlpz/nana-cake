import React from 'react';
import logo from '../assets/logo.png';
import { GoThreeBars } from "react-icons/go";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

const Header = () => {
    const handleLogout = async () => {
        await Axios({
            method: 'get',
            url: 'http://localhost:5000/users/logout',
            withCredentials: true
        });
        localStorage.clear();
        window.location.reload();
    }

    console.log(localStorage.getItem('user'));
    const isLoggedIn = localStorage.getItem('user');

    return (
        <Navbar className="navbar" expand="lg">
            <Navbar.Brand>
                <Link to='/' >
                    <img src={logo} className="logo" alt="Nana Logo" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle className="nav-toggle">
                <GoThreeBars />
            </Navbar.Toggle>
            <Navbar.Collapse>
                <Nav className="ml-auto">
                    <Nav.Link href="#products">Products</Nav.Link>
                    <Nav.Link href="#comissions">Comissions</Nav.Link>
                    <Nav.Link href="#blog">Blog</Nav.Link>
                    {
                        isLoggedIn ? <Button onClick={handleLogout}>Logout</Button> : <Nav.Link href="/login">Login</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;