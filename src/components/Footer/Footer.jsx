import React from "react";
import "./Footer.css";
import { FaLinkedin, FaTwitter, FaGlobe } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

         <div className="footer-brand">
          <h2>BaiRees</h2>
          <p>
            Transforming Technology. Accelerating Enterprise Value.
          </p>

          <div className="footer-socials">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaGlobe /></a>
          </div>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#founder">Founder</a>
            <a href="#services">Services</a>
          </div>

          <div>
            <h4>Solutions</h4>
            <a href="#">AI Strategy</a>
            <a href="#">Digital Transformation</a>
            <a href="#">Enterprise Architecture</a>
          </div>

          <div>
            <h4>Support</h4>
            <a href="#contact">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 BaiRees Global Advisory. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;