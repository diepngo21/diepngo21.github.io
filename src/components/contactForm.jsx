import React, { useState } from "react";
import "../style/components/contactForm.css";
import avatar from "../svg/avatar.jpeg";
import { data } from "../data";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copyStatus, setCopyStatus] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Copy to clipboard function
  const copyToClipboard = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }

      setCopyStatus("copied");
      setTimeout(() => setCopyStatus(""), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
      setCopyStatus("error");
      setTimeout(() => setCopyStatus(""), 2000);
    }
  };

  const openLinkedIn = () => {
    const linkedinUrl = data.linkedin;
    window.open(linkedinUrl, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append(
        "access_key",
        "3c2f4024-69c2-437f-a975-5f417172201c"
      );
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        console.log("Form submitted successfully:", result);
        setSubmitted(true);

        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setSubmitted(false);
        }, 3000);
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-container">
      <div className="contact-form-header">
        <h2 className="contact-form-title">Get In Touch</h2>
        <p className="contact-form-subtitle">
          Have a project in mind or just want to say hello? I'd love to hear
          from you!
        </p>
      </div>

      {submitted && (
        <div className="contact-form-success">
          <div className="contact-form-success-icon">✅</div>
          <h3 className="contact-form-success-title">
            Message Sent Successfully!
          </h3>
          <p className="contact-form-success-message">
            Thank you for reaching out. I'll get back to you soon!
          </p>
        </div>
      )}

      <div className="contact-main-content">
        <div className="contact-form-section">
          <div className="contact-form-wrapper">
            <div className="contact-form-field">
              <label className="contact-form-label">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`contact-form-input ${errors.name ? "error" : ""}`}
              />
              {errors.name && (
                <span className="contact-form-error">{errors.name}</span>
              )}
            </div>

            <div className="contact-form-field">
              <label className="contact-form-label">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`contact-form-input ${errors.email ? "error" : ""}`}
              />
              {errors.email && (
                <span className="contact-form-error">{errors.email}</span>
              )}
            </div>

            <div className="contact-form-field">
              <label className="contact-form-label">Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`contact-form-input ${
                  errors.subject ? "error" : ""
                }`}
              />
              {errors.subject && (
                <span className="contact-form-error">{errors.subject}</span>
              )}
            </div>

            <div className="contact-form-field">
              <label className="contact-form-label">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className={`contact-form-textarea ${
                  errors.message ? "error" : ""
                }`}
              />
              {errors.message && (
                <span className="contact-form-error">{errors.message}</span>
              )}
            </div>

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="contact-form-button"
            >
              {isSubmitting ? (
                <span className="contact-form-button-content">
                  <div className="contact-form-spinner" />
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </div>

        <div className="contact-profile-section">
          <div className="contact-profile-picture">
            <img src={avatar} alt="Profile" className="profile-image" />
            <div className="profile-overlay">
              <p className="profile-text">Ready to collaborate?</p>
            </div>
          </div>

          <div className="contact-info-section">
            <h3 className="contact-info-title">Other Ways to Reach Me</h3>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="contact-icon">📧</span>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <span
                    className={`contact-value copyable-email ${copyStatus}`}
                    onClick={() => copyToClipboard(data.gmail)}
                    title="Click to copy email"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        copyToClipboard(data.gmail);
                      }
                    }}
                  >
                    {data.gmail}
                    {copyStatus === "copied" && (
                      <span className="copy-feedback">✓ Copied!</span>
                    )}
                    {copyStatus === "error" && (
                      <span className="copy-feedback error">✗ Failed</span>
                    )}
                  </span>
                </div>
              </div>

              <div className="contact-info-item">
                <span className="contact-icon">💼</span>
                <div className="contact-details">
                  <span className="contact-label">LinkedIn</span>
                  <span
                    className="contact-value clickable-linkedin"
                    onClick={openLinkedIn}
                    title="Click to open LinkedIn profile"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openLinkedIn();
                      }
                    }}
                  >
                    Diep Gia Lich Ngo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
