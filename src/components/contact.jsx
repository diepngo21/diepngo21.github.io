import "../style/components/contact.css";
import { data } from "../data";

export const Contact = () => {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-cta">
          <div className="cta-content">
            <div className="cta-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>

            <h3>Ready to Start Something Amazing?</h3>
            <p>
              Whether you have a specific project in mind or just want to
              explore possibilities, I'm here to help bring your ideas to life.
              Let's create something extraordinary together.
            </p>

            <div className="cta-buttons">
              <a href={`mailto:${data.gmail}`} className="btn-primary">
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
