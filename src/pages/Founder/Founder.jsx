import React from 'react'
import "./Founder.css"
import founderImage from "../../assets/founder.png"
import { FaQuoteLeft } from 'react-icons/fa'

const Founder = () => {
  return (
    <section id='founder' className="founder-home-section">
      <div className="container">
        <div className="founder-home-grid">
          <div className="founder-home-image">
            <img src={founderImage} alt="Ramesh Babu Bairy" />
          </div>
          <div className="founder-home-content">
            <h2 className="founder-home-title">
              Led by <span className="gold-gradient">Experience</span>.<br />
              Driven by Outcomes.
            </h2>

            <h3 className="founder-name">Ramesh Babu Bairy</h3>
            <p className="founder-role">Chief Digital Transformation Advisor</p>

            <ul className="founder-credentials">
              <li>20+ years in Business Development, Operations & Delivery</li>
              <li>Global leadership across USA, Europe, Middle East & APAC</li>
              <li>Certified Chief Digital Officer</li>
              <li>Proven track record in enterprise-scale transformations</li>
            </ul>

            <blockquote className="founder-quote">
              <FaQuoteLeft className="quote-icon" />
              <p>"Technology should not just enable business—it should transform it."</p>
            </blockquote>

            <button className="btn-primary">
              Meet Our Founder
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder