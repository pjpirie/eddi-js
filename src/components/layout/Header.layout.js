import React from 'react';
import Logo from '../../Logo.svg';
import './css/Header.css'

function Header() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="header__navbar">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Editor</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </header >
    )
}

export default Header
