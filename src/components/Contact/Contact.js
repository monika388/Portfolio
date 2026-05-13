import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <>
      <section id="contact" className="contact-section">
        <div className="contact-box">

          <h2>Contact Me</h2>

          <p className="contact-intro">
            I'd love to hear from you — whether it's a project,
            collaboration, or just a hello.
            <br />

            You can also connect with me on GitHub to explore my
            latest work and contributions.
            <br />

            Thank you for visiting my portfolio.
            <br />

            I truly appreciate your time and interest!
          </p>

          <div className="contact-details">

            {/* Clickable Email */}
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:monikajangir01090@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                monikajangir01090@gmail.com
              </a>
            </p>

            {/* Clickable Phone */}
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919723557388">
                +91 97235 57388
              </a>
            </p>

            {/* Clickable GitHub */}
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/monika388"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/monika388
              </a>
            </p>

            {/* Contact Button */}
            <a
              href="mailto:monikajangir01090@gmail.com"
              className="white-btn me-3"
            >
              CONTACT ME
            </a>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © Monika's Folio. Made with{" "}
          <span className="heart">❤️</span> by Monika.
        </p>
      </footer>
    </>
  );
}

export default Contact;