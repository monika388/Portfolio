import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiMysql, SiBootstrap } from "react-icons/si";

function Skills() {
  return (
    <section id="Skills" className="skills-section">
      <div className="skills-content">
        <h2>What I Do</h2>
        <p className="skills-intro">
          <strong>CRAZY FRONTEND DEVELOPER</strong> who loves crafting expressive UIs and exploring modern tech stacks.
        </p>

        <ul className="skills-services">
          <li>⚡ Develop highly interactive Frontend / User Interfaces for web and mobile applications</li>
          <li>⚡ Build Progressive Web Apps (PWA) using SPA architecture</li>
          <li>⚡ Integrate third-party services like Firebase, MySQL, and Bootstrap</li>
          <li>⚡“I believe design should feel like a conversation — calm, clear, and full of personality.”</li>
        </ul>

        <h3>Tech Stack</h3>
        <div className="skills-icons">
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
          <FaJs title="JavaScript" />
          <FaReact title="ReactJS" />
          <SiMysql title="MySQL" />
          <SiBootstrap title="Bootstrap" />
        </div>
      </div>
    </section>
  );
}

export default Skills;