// Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-container">
                <div className="project-card">
                    <img src="/stormy_landscape.jpeg" alt="Project 1" />
                    <h3>Project 1</h3>
                    <p>Description of Project 1.</p>
                </div>
                {/* Add more project cards */}
            </div>
        </section>
    );
}

export default Projects;
