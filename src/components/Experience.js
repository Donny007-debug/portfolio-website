import React from 'react';
import './Education.css';

const experienceData = [
  {
    role: "Digital Marketing Intern",
    company: "Fatafat Sewa Pvt. Ltd.",
    duration: "April 2023 - July 2023",
    },
  {
    role: "Customer Service Representative Intern",
    company: "Daraz Kaymu Pvt. Ltd.",
    duration: "October 2022 - February 2023",
    },
  // Add more experience items here
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2>Experience</h2>
      <div className="experience-container">
        {experienceData.map((item, index) => (
          <div key={index} className="experience-item">
            <h3>{item.role}</h3>
            <p><strong>Company:</strong> {item.company}</p>
            <p><strong>Duration:</strong> {item.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;