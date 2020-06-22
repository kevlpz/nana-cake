import React from 'react';
import logo from '../assets/logo.png';
import { GoThreeBars } from "react-icons/go";

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} className="logo" alt="Nana Logo" />

            <div className="menu-button" onClick={() => console.log('clicked!')}>
                <GoThreeBars />
            </div>
        </div>
    )
}

export default Header;