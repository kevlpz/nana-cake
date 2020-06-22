import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} className="logo" alt="Nana Logo"/>
        </div>
    )
}

export default Header;