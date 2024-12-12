import React from 'react';
import '../css/About.css';
import 'devicon/devicon.min.css';
import ppsizedpic from '../../media/ppsizedpic.jpg';

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
                    <a className = "resume-button" href={`/resume.pdf`} download="resume.pdf">
                       Download My Resume
                    </a>

                </div>

                {/* Profile Image */}
                <div className="about-image">
                    <img src = {ppsizedpic} alt="MyPicture" />
                </div>
            </div>
        </section>
    );
};

export default About;
