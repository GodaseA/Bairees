import React, { useState } from 'react'
import "./Contact.css"
import {
  MdEmail,
  MdLocationOn,
  MdOutlineMailOutline,
  MdPersonOutline,
  MdMessage,
  MdCheckCircle
} from "react-icons/md";

import { FaLinkedin, FaGlobe, FaPaperPlane } from "react-icons/fa";
// import { MdCheckCircle } from "react-icons/md";
// import { FaPaperPlane } from "react-icons/fa"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("sending");

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setSubmitStatus(""), 3000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    }

    setIsSubmitting(false);
  };

  return (
    <section id='contact' className="contact-section">
      <div className="contact-container">

        {/* Top Section */}
        <div className="contact-top">
          <div className="contact-title-wrapper">
            <h2 className="contact-title">
              Ready to Transform? <span>Let's Talk</span>
            </h2>
            <MdEmail className="contact-main-icon" />
          </div>

          <p className="contact-subtitle">
            Connect with BaiRees Global Advisory to discuss technology transformation,
            digital strategy, and enterprise innovation.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="contact-down">

          {/* Contact Info */}
          <div className="contact-info">
            <h3><MdLocationOn /> Get in Touch</h3>

            <div className="contact-item">
              <MdOutlineMailOutline className="contact-icon" />
              <div>
                <strong>Email</strong>
                <p>info@baireesglobal.com</p>
              </div>
            </div>

            <div className="contact-item">
              <FaGlobe className="contact-icon" />
              <div>
                <strong>Website</strong>
                <p>www.baireesglobal.com</p>
              </div>
            </div>

            <div className="contact-item">
              <FaLinkedin className="contact-icon" />
              <div>
                <strong>LinkedIn</strong>
                <p>BaiRees Global Advisory</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <MdPersonOutline className="form-icon" />
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <MdOutlineMailOutline className="form-icon" />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <MdMessage className="form-icon" />
              <textarea
                placeholder="Tell us about your transformation needs..."
                rows="5"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                disabled={isSubmitting}
              />
            </div>

            <button type="submit" className={`submit-btn ${submitStatus}`} disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <FaPaperPlane className="spin" />
                  <span>Sending...</span>
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <MdCheckCircle />
                  <span>Message Sent!</span>
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <p className="success-message">
                Thank you! We'll get back to you within 24 hours.
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact
