import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <div className="edu-intern-page" id="education">
      <h2 className="section-title">
    
        </h2>

      <div className="edu-intern-wrapper">
        {/* Education Section */}
        <section className="education-box">
          <h3 className="sub-title">🎓 Education</h3>
          <div className="edu-entry">
            <div className="edu-header">
              <img
                src="/Sardar-Logo.jpeg"
                alt="Sardar Patel University Logo"
                className="logo"
              />
              <h4>Sardar Patel University</h4>
            </div>
            <p className="degree">Bachelor of Computer Science</p>
            <p className="duration">June 2023 – Present</p>
            <p>Currently pursuing a comprehensive curriculum in computer science.</p>
            <ul>
              <li>Completed 5 semesters with consistent academic performance</li>
              <li>Focused on software development, data structures, and web technologies</li>
            </ul>
          </div>
        </section>

        {/* Internship Section */}
        <section className="internship-box">
          <h3 className="sub-title">💼 Internship</h3>
          <div className="edu-entry">
            <div className="edu-header">
              <img
                src="/TechElecon.png"
                alt="TechElecon Logo"
                className="logo"
              />
              <h4>TechElecon</h4>
            </div>
            <p className="degree">Frontend Developer & UI Design Intern</p>
            <p className="duration">6 November – Present</p>
            <p>Contributing to real-world projects in frontend development and UI design.</p>
            <ul>
              <li>Building responsive interfaces using React, HTML, CSS, and JavaScript</li>
              <li>Designing calming, expressive layouts with gradients and custom fonts</li>
              <li>Working with modular architecture and reusable components</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Education;