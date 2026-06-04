import React, { useState } from "react";
import "../style/components/contactForm.css";
import { data } from "../data";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.subject.trim()) e.subject = "Required";
    if (!form.message.trim()) e.message = "Required";
    else if (form.message.trim().length < 10) e.message = "At least 10 characters";
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    if (errors[e.target.id]) setErrors((prev) => ({ ...prev, [e.target.id]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setIsSubmitting(true);
    try {
      const body = new FormData();
      body.append("access_key", "3c2f4024-69c2-437f-a975-5f417172201c");
      Object.entries(form).forEach(([k, v]) => body.append(k, v));

      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch {
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cf-wrap">

      <header className="cf-header">
        <p className="cf-eyebrow">Get in touch</p>
        <h1 className="cf-heading">
          Let's build something<br /><em>remarkable together.</em>
        </h1>
        <div className="cf-header-rule"></div>
      </header>

      <div className="cf-grid">

        {/* LEFT — INFO */}
        <div className="cf-info">
          <div className="cf-info-block">
            <p className="cf-info-label">Availability</p>
            <div className="cf-availability">
              <span className="cf-availability-dot"></span>
              Open to new projects
            </div>
          </div>

          <div className="cf-info-block">
            <p className="cf-info-label">Email</p>
            <p className="cf-info-value">
              <a href={`mailto:${data.gmail}`}>{data.gmail}</a>
            </p>
          </div>

          <div className="cf-info-block">
            <p className="cf-info-label">Response time</p>
            <p className="cf-info-value cf-info-value--muted">Within 48 hours</p>
          </div>

          <div className="cf-info-block">
            <p className="cf-info-label">Connect</p>
            <div className="cf-social-links">
              <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="cf-social-link">
                LinkedIn — Diep Gia Lich Ngo
                <span className="cf-social-arrow">→</span>
              </a>
              <a href="https://github.com/diepngo21" target="_blank" rel="noopener noreferrer" className="cf-social-link">
                GitHub — diepngo21
                <span className="cf-social-arrow">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <div className="cf-form-wrap">
          <p className="cf-form-intro">
            Have a project in mind or just want to say hello?{" "}
            — <strong>I'd love to hear from you.</strong>
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} noValidate>
              <div className="cf-form-row">
                <div className="cf-form-group">
                  <label className="cf-label" htmlFor="name">Name</label>
                  <input className={`cf-input${errors.name ? " cf-input--err" : ""}`} id="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} />
                  {errors.name && <span className="cf-error">{errors.name}</span>}
                </div>
                <div className="cf-form-group">
                  <label className="cf-label" htmlFor="email">Email</label>
                  <input className={`cf-input${errors.email ? " cf-input--err" : ""}`} id="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
                  {errors.email && <span className="cf-error">{errors.email}</span>}
                </div>
              </div>

              <div className="cf-form-group">
                <label className="cf-label" htmlFor="subject">Subject</label>
                <input className={`cf-input${errors.subject ? " cf-input--err" : ""}`} id="subject" type="text" placeholder="What's this about?" value={form.subject} onChange={handleChange} />
                {errors.subject && <span className="cf-error">{errors.subject}</span>}
              </div>

              <div className="cf-form-group">
                <label className="cf-label" htmlFor="message">Message</label>
                <textarea className={`cf-textarea${errors.message ? " cf-input--err" : ""}`} id="message" placeholder="Tell me about your project…" value={form.message} onChange={handleChange}></textarea>
                {errors.message && <span className="cf-error">{errors.message}</span>}
              </div>

              <div className="cf-submit-row">
                <button type="submit" className="cf-btn-send" disabled={isSubmitting}>
                  {isSubmitting ? "Sending…" : "Send Message"}
                </button>
                <span className="cf-btn-note">No spam, ever.</span>
              </div>
            </form>
          ) : (
            <div className="cf-success">
              <div className="cf-success-icon">✦</div>
              <p className="cf-success-heading">Thank you.</p>
              <p className="cf-success-sub">I'll be in touch within 48 hours.</p>
            </div>
          )}
        </div>

      </div>

      {/* QUOTE */}
      <div className="cf-quote-strip">
        <span className="cf-quote-mark">"</span>
        <p className="cf-quote-text">
          Good design is not just how something looks —<br />
          it's how it <em>makes you feel.</em>
        </p>
      </div>

    </div>
  );
};

export default ContactForm;
