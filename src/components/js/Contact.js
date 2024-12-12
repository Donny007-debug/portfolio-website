import React from 'react';
import '../css/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-subtitle">I would love to hear from you!</p>
            <div className="contact-details">
                <p>Email: <a href="mailto: bajracharyanimesh2022@gmail.com">bajracharyanimesh2022@gmail.com</a></p>
                <p>Phone: <a href="tel:+9779860525874">+9779860525874</a></p>
                <div className="social-links">
                    <a href="https://github.com/Donny0007" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/in/nimesh-bajracharya" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
