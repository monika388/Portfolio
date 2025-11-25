import React from "react";
import "./Proficiency.css";

function Proficiency() {
  return (
    <section id="Proficiency" className="proficiency-section">
      <div className="proficiency-box">
        <h2>Proficiency</h2>

        <div className="proficiency-item">
          <label>Frontend </label>
          <div className="bar-wrapper">
             <div className="bar">
            <div className="fill" style={{ width: "90%" }}></div>
          </div>
          <span className="percentage-label">90%</span>
          </div>
        </div>

        <div className="proficiency-item">
          <label>Backend</label>
            <div className="bar-wrapper">
          <div className="bar">
            <div className="fill" style={{ width: "30%" }}></div>
           </div>
           <span className="percentage-label">30%</span>
          </div>
        </div>

        <div className="proficiency-item">
          <label>Programming</label>
          <div className="bar-wrapper">
          <div className="bar">
            <div className="fill" style={{ width: "65%" }}></div>
          </div>
        <span className="percentage-label">65%</span>
       </div>
        </div>
      </div>
    </section>
  );
}

export default Proficiency;