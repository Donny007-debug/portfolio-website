// Hero.js
import React from 'react';
import '../css/HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Hi, I'm Nimesh.</h1>
                <p>Web Developer | Recent Graduate | Passionate</p>
                <Link to="/contact" className="cta-button">Let's Work Together</Link>
            </div>
        </section>
    );
}

export default HomePage;
