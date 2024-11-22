import React from 'react';
import './Skills.css';

const Skills = () => {
    const skills = [
        { name: 'JavaScript/ React' },
        { name: 'PHP' },
        { name: 'SCSS/Bootstrap' },
        { name: 'MySQL' },
        { name: 'Microsoft Office' },
        { name: 'Deadline Adherence and Time Management' },
    ];

    return (
        <section className="skills-section">
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div className="skill-card" key={index}>
                        <h3>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
