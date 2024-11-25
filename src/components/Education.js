import React from 'react';
import './Education.css';

const educationData = [
  {
    degree: "Bachelor's in Information Management",
    institution: "Shanker Dev Campus - Putalisadak",
    duration: "2018 - 2023",
    },
  {
    degree: "High School",
    institution: "National Integrated College - Dillibazaar",
    duration: "2016 - 2018",
    }, 
  {
    degree: "School Leaving Certificate",
    institution: "Annapurna Secondary School",
    duration: "2004 - 2016",
    }
  // Add more education items here
];

const Education = () => {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-container">
        {educationData.map((item, index) => (
          <div key={index} className="education-item">
            <h3>{item.degree}</h3>
            <p><strong>Institution:</strong> {item.institution}</p>
            <p><strong>Duration:</strong> {item.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
