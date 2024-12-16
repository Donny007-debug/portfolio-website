import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0); // Track the last scroll position
    const [isScrollingUp, setIsScrollingUp] = useState(false); // State for scrolling up/down

    // Toggle the menu on small screens
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop) {
                // Scrolling down
                setIsScrollingUp(false);
            } else {
                // Scrolling up
                setIsScrollingUp(true);
            }

            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop); // Prevent negative scroll
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <div className={`content ${isScrollingUp ? 'faded' : ''}`}>
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to='/'><h1>Nimesh</h1></Link>
                </div>
                <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                    <Link to='/about'> About </Link>
                    <Link to='/skills'> Skills </Link>
                    <Link to="/projects"> Projects </Link>
                    <Link to="/education"> Education </Link>
                    <Link to="/experience"> Experience </Link>
                </div>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
