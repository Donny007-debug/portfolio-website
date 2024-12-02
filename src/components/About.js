import React from 'react';
import './About.css';
import 'devicon/devicon.min.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                {/* About Text */}
                <div className="about-text">
                    <h1>About Me</h1>
                    <p>
                        A result-driven and resourceful graduate with a passion for web development. Proficient in 
                        designing and building responsive websites, eager to tackle new challenges, continuously 
                        updated with new technologies, and self-motivated to innovate and improve.
                    </p>
                    <a
                        href="/latestcv_NimeshBajra.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-button"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Profile Image */}
                <div className="about-image">
                    <img src="images/ppsizedpic.jpg" alt="Description" />
                </div>
            </div>
        </section>
    );
};

export default About;
