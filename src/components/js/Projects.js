// Projects.js
import React from 'react';
import '../css/Projects.css';
import IMS from '../../media/IMS.mp4';

const Projects = () => {

    const projectData = {
        title: 'Inventory Management System',
        description: "I developed this system as part of the requirements for completing my Bachelor's degree. The project is built using vanilla PHP. Since its submission to the respective authority, I have made minor updates, particularly to enhance the styling and presentation of the system."
    }

    return (
        <section id="projects" className="projects-section">
            <h2>My Projects</h2>
            <div className="projects-container">
                <div className="project-card">
                    <video width="100%" height="400" controls>
                        <source src={IMS} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <h3>{projectData.title}</h3>
                    <p>{projectData.description}</p>
                </div>
                {/* Add more project cards */}
            </div>
        </section>
    );
}

export default Projects;
