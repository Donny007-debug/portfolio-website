import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to = '/'><h1>Donny</h1></Link>
            </div>
            <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <Link to = '/about'> About </Link>
                <Link to = '/skills'> Skills </Link>
                <Link to ="/projects"> Projects </Link>
                <Link to ="/education"> Education </Link>
                <Link to ="/experience"> Experience </Link>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default NavBar;
