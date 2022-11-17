import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

// Header Component
const Header = () => {
    return (
        <nav className='header-container'>
            <img src={logo} alt="" />
            <h2>SPORTY CLUB</h2>
        </nav>
    );
};

export default Header;