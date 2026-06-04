import "../style/components/contact.css";
import { data } from "../data";

export const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <p className="section-label">GET IN TOUCH</p>
        <div className="section-divider"></div>

        <div className="contact-headline">
          <h2 className="contact-h2">Let's build something</h2>
          <h2 className="contact-h2 contact-h2-italic">remarkable together.</h2>
        </div>

        <div className="contact-links">
          <a href={`mailto:${data.gmail}`} className="contact-link">
            {data.gmail}
          </a>
          <span className="contact-dot">·</span>
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            LinkedIn
          </a>
          <span className="contact-dot">·</span>
          <a
            href="https://github.com/diepngo21"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
