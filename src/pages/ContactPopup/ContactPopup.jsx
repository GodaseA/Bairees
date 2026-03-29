import React, { useState, useEffect, useRef } from "react";
import "./ContactPopup.css";
import {
  MdClose,
  MdPersonOutline,
  MdOutlineMailOutline,
  MdMessage,
  MdSend,
  MdCheckCircle
} from "react-icons/md";

function ContactPopup({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const popupRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && popupRef.current) {
      const focusable = popupRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      first?.focus();

      const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

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

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" ref={popupRef}>
      <div className="popup-box">
        <div className="popup-header">
          <h2 className="popup-title">
            <MdPersonOutline className="popup-icon" />
            Get In Touch
          </h2>
          <button
            className="popup-close-btn"
            onClick={onClose}
            aria-label="Close popup"
          >
            <MdClose />
          </button>
        </div>

        <p className="popup-subtitle">
          Connect with BaiRees Global Advisory to discuss your transformation journey.
        </p>

        <form className="popup-form" onSubmit={handleSubmit}>
          <div className="popup-form-group">
            <MdPersonOutline className="popup-form-icon" />
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              disabled={isSubmitting}
              className="popup-input"
            />
          </div>

          <div className="popup-form-group">
            <MdOutlineMailOutline className="popup-form-icon" />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              disabled={isSubmitting}
              className="popup-input"
            />
          </div>

          <div className="popup-form-group">
            <MdMessage className="popup-form-icon" />
            <textarea
              placeholder="Tell us about your transformation needs..."
              rows="4"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              disabled={isSubmitting}
              className="popup-textarea"
            />
          </div>

          <button
            type="submit"
            className={`popup-submit-btn ${submitStatus}`}
            disabled={isSubmitting}
            onClick={onSubmit}

          >
            {isSubmitting ? (
              <>
                <MdSend className="popup-spin" />
                <span>Sending...</span>
              </>
            ) : submitStatus === 'success' ? (
              <>
                <MdCheckCircle className="popup-success-icon" />
                <span>Thank You!</span>
              </>
            ) : (
              <>
                <MdSend />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>

        {submitStatus === 'success' && (
          <p className="popup-success-message">
            We'll respond within 24 hours. Thank you for reaching out!
          </p>
        )}
      </div>
    </div>
  );
}

export default ContactPopup;
