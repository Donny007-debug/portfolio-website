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
                        A result-driven and resourceful student with a passion for web development. Proficient in 
                        designing and building responsive websites, eager to tackle new challenges, continuously 
                        updated with new technologies, and self-motivated to innovate and improve.
                    </p>
                    <div className="skills">
                        <div className="skill">
                            <span>React</span>
                            <div className="skill-bar">
                                <div className="fill" style={{ width: "85%" }}></div>
                            </div>
                        </div>
                        <div className="skill">
                            <span>JavaScript</span>
                            <div className="skill-bar">
                                <div className="fill" style={{ width: "90%" }}></div>
                            </div>
                        </div>
                    </div>

                    <a
                        href="/latestcv_NimeshBajra.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-button"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Skills Section */}
                <div className="skills-section">
                    <h2>Skills</h2>
                    <div className="skills-grid">
                        <div className="skill-item">
                            <i className="devicon-html5-plain colored"></i> HTML5
                        </div>
                        <div className="skill-item">
                            <i className="devicon-css3-plain colored"></i> CSS3
                        </div>
                        <div className="skill-item">
                            <i className="devicon-javascript-plain colored"></i> JavaScript (ES6+)
                        </div>
                        <div className="skill-item">
                            <i className="devicon-react-original colored"></i> React
                        </div>
                        <div className="skill-item">
                            <i className="devicon-nodejs-plain colored"></i> Node.js
                        </div>
                        <div className="skill-item">
                            <i className="devicon-express-original colored"></i> Express.js
                        </div>
                        <div className="skill-item">
                            <i className="devicon-mysql-plain colored"></i> MySQL
                        </div>
                        <div className="skill-item">
                            <i className="devicon-git-plain colored"></i> Git/GitHub
                        </div>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="about-image">
                    <img src="/ppsizedpic.jpg" alt="Your Name" />
                </div>
            </div>
        </section>
    );
};

export default About;
