import React from "react";
import "../Home/Home.css";

function Home() {
  return (
    <div className="container-fluid p-0">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg px-4 fixed-top">
        <a className="navbar-brand fw-bold d-flex align-items-center " href="#home">
          <img
            src="/My-profile.jpg"
            alt="Portfolio Universe"
            className="me-2"
            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
          />
          <span className="brand-name">Monika's Folio</span>
          </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <a className="nav-link active" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Proficiency">Proficiency</a>
              </li>
            <li className="nav-item">
              <a className="nav-link active" href="#contact">Contact</a>
            </li>
            
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="hero-section d-flex align-items-center"
      >
        <div className="container">
          <div className="row align-items-center">
            {/* Left: Text Content */}
            <div className="col-md-6 text-center text-md-start">
              <h1 className="Home">Hi, I'm Monika </h1>
              <p className="lead">
                Frontend Developer & UI Designer. A passionate software developer who builds web and mobile applications using JavaScript, React.js, HTML, CSS, and other cool libraries and frameworks.
              </p>
              <div className="social-icons mt-4">
                   <a href="https://github.com/monika388" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github fa-2x"></i></a>
                    <a href="mailto:monikajangir01090@gmail.com">
                      <i className="fas fa-envelope fa-2x"></i>
                    </a>
                    </div>
              <div className="button-group text-center mt-5">
                <a href="#contact" className="white-btn me-3"> CONTACT ME</a>
                <a href="/Monika_resume.pdf" className="white-btn" download>DOWNLOAD RESUME</a>
                </div>


            </div>

            {/* Right: Image */}
            <div className="col-md-6 text-center mt-4 mt-md-0">
              <div className="profile-wrapper">
                <img
                  src="/My-profile.jpg"
                  alt="Monika Mistry - Frontend Developer"
                  className="profile-photo img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
}

export default Home;