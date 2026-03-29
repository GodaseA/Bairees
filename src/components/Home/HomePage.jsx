import React from "react";
import { Link } from "react-router-dom";
import { 
  FaArrowRight, 
  FaChartLine, 
  FaDollarSign, 
  FaRocket, 
  FaSync, 
  FaCheckCircle,
  FaQuoteLeft,
  FaGlobe,
  FaAward,
  FaUsers,
  FaLightbulb,
  FaCog,
  FaBullseye
} from "react-icons/fa";
// import "./HomePage.css";

// Import founder image
import founderImage from "../../assets/founder.png"; // Update path as needed

const HomePage = () => {
  return (
    <main className="homepage">
      
      {/* ═══════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Turning Technology Investments into<br />
            <span className="gold-gradient">Measurable Enterprise Value</span>
          </h1>

          <p className="hero-subtitle">
            We partner with CEOs, CIOs, and leadership teams to unlock growth, 
            optimize costs, and deliver real ROI from digital transformation.
          </p>

          {/* Credibility Strip */}
          <div className="credibility-strip">
            <div className="credibility-item">
              <FaGlobe className="credibility-icon" />
              <span>20+ Years Global Experience</span>
            </div>
            <div className="credibility-item">
              <FaAward className="credibility-icon" />
              <span>Fortune 500 Transformations</span>
            </div>
            <div className="credibility-item">
              <FaUsers className="credibility-icon" />
              <span>USA | Europe | Middle East | APAC</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hero-ctas">
            <Link to="/contact" className="btn-primary">
              Book a Strategy Call <FaArrowRight className="btn-icon" />
            </Link>
            <Link to="/advisory" className="btn-secondary">
              Explore Our Advisory
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PROBLEM STATEMENT
      ═══════════════════════════════════════════════════ */}
      <section className="problem-section">
        <div className="container">
          <h2 className="section-title">
            The <span className="gold-gradient">Problem</span>
          </h2>
          
          <div className="problem-content">
            <p className="problem-headline">
              Most enterprises invest heavily in technology—but fail to realize business value.
            </p>

            <div className="problem-grid">
              <div className="problem-card">
                <FaBullseye className="problem-icon" />
                <h3>Digital Initiatives Lack Clear ROI</h3>
                <p>Technology spend without measurable business outcomes</p>
              </div>
              <div className="problem-card">
                <FaCog className="problem-icon" />
                <h3>Programs Stall or Overrun</h3>
                <p>Transformations exceed budgets and miss deadlines</p>
              </div>
              <div className="problem-card">
                <FaLightbulb className="problem-icon" />
                <h3>Disconnected from Business</h3>
                <p>Technology decisions made in isolation from strategy</p>
              </div>
            </div>

            <p className="problem-solution">
              <strong>We solve this gap.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHAT WE DO
      ═══════════════════════════════════════════════════ */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">
            Strategic <span className="gold-gradient">Technology Advisory</span>
          </h2>
          <p className="section-subtitle">
            We help organizations move from technology spend → measurable value creation
          </p>

          <div className="services-grid">
            <div className="service-card">
              <FaRocket className="service-icon" />
              <h3>Digital Transformation Strategy</h3>
              <p>Roadmaps aligned with business priorities and ROI targets</p>
            </div>
            <div className="service-card">
              <FaChartLine className="service-icon" />
              <h3>AI & Data-Driven Decision Enablement</h3>
              <p>Leverage analytics and AI for smarter business decisions</p>
            </div>
            <div className="service-card">
              <FaCog className="service-icon" />
              <h3>Enterprise Architecture & Modernization</h3>
              <p>Scalable, future-ready technology platforms</p>
            </div>
            <div className="service-card">
              <FaDollarSign className="service-icon" />
              <h3>Operational Efficiency & Cost Optimization</h3>
              <p>Reduce costs while improving performance</p>
            </div>
            <div className="service-card">
              <FaCheckCircle className="service-icon" />
              <h3>Execution Governance & Transformation Office</h3>
              <p>Ensure delivery with accountability and measurable outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          OUR IMPACT
      ═══════════════════════════════════════════════════ */}
      <section className="impact-section">
        <div className="container">
          <h2 className="section-title">
            Proof  <span className="gold-gradient">Claims</span>
          </h2>
          <p className="section-subtitle">
            We don't just advise. We deliver outcomes.
          </p>

          <div className="impact-grid">
            <div className="impact-card">
              <FaChartLine className="impact-icon" />
              <div className="impact-stat">20–40%</div>
              <div className="impact-label">Improvement in Operational Efficiency</div>
            </div>
            <div className="impact-card">
              <FaDollarSign className="impact-icon" />
              <div className="impact-stat">Multi-Million $</div>
              <div className="impact-label">Cost Optimization Programs Delivered</div>
            </div>
            <div className="impact-card">
              <FaRocket className="impact-icon" />
              <div className="impact-stat">30–50%</div>
              <div className="impact-label">Faster Digital Initiative Execution</div>
            </div>
            <div className="impact-card">
              <FaSync className="impact-icon" />
              <div className="impact-stat">100%</div>
              <div className="impact-label">Transformation Recovery for Failing Programs</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHO WE WORK WITH
      ═══════════════════════════════════════════════════ */}
      <section className="clients-section">
        <div className="container">
          <h2 className="section-title">
            Who We <span className="gold-gradient">Partner With</span>
          </h2>

          <div className="clients-grid">
            <div className="client-card">
              <h3>CEOs & Business Leaders</h3>
              <p>Driving growth & profitability through technology-enabled transformation</p>
            </div>
            <div className="client-card">
              <h3>CIOs & CTOs</h3>
              <p>Aligning technology investments with measurable business outcomes</p>
            </div>
            <div className="client-card">
              <h3>Private Equity / Investors</h3>
              <p>Maximizing portfolio value through operational and digital improvements</p>
            </div>
            <div className="client-card">
              <h3>Mid to Large Enterprises</h3>
              <p>Scaling transformation initiatives across complex organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          OUR APPROACH
      ═══════════════════════════════════════════════════ */}
      <section className="approach-section">
        <div className="container">
          <h2 className="section-title">
            From Strategy to <span className="gold-gradient">Execution</span>
          </h2>
          <p className="section-subtitle">
            Unlike traditional consulting firms, we bridge the critical gap between strategy, execution, and measurable outcomes.
          </p>

          <div className="approach-steps">
            <div className="approach-step">
              <div className="step-number">1</div>
              <h3>Diagnose</h3>
              <p>Identify enterprise challenges and value unlock opportunities</p>
            </div>
            <div className="approach-step">
              <div className="step-number">2</div>
              <h3>Define</h3>
              <p>Build a value-driven roadmap with clear ROI targets</p>
            </div>
            <div className="approach-step">
              <div className="step-number">3</div>
              <h3>Align</h3>
              <p>Secure stakeholder buy-in and organizational alignment</p>
            </div>
            <div className="approach-step">
              <div className="step-number">4</div>
              <h3>Execute</h3>
              <p>Drive implementation with governance and accountability</p>
            </div>
            <div className="approach-step">
              <div className="step-number">5</div>
              <h3>Measure</h3>
              <p>Track outcomes continuously and optimize for impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          WHY BAIREES
      ═══════════════════════════════════════════════════ */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">
            Why <span className="gold-gradient">BaiRees</span>
          </h2>
          <p className="section-subtitle">
            Built for Impact. Not Presentations.
          </p>

          <div className="why-grid">
            <div className="why-card">
              <FaCheckCircle className="why-icon" />
              <h3>Deep Global Expertise</h3>
              <p>20+ years across USA, Europe, Middle East & APAC</p>
            </div>
            <div className="why-card">
              <FaCheckCircle className="why-icon" />
              <h3>Business-First Approach</h3>
              <p>We start with outcomes, not technology</p>
            </div>
            <div className="why-card">
              <FaCheckCircle className="why-icon" />
              <h3>Hands-On Execution</h3>
              <p>We don't just advise—we drive implementation</p>
            </div>
            <div className="why-card">
              <FaCheckCircle className="why-icon" />
              <h3>ROI-Focused</h3>
              <p>Every engagement tied to measurable business value</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FOUNDER SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="founder-home-section">
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

              <Link to="/founder" className="btn-primary">
                Meet Our Founder
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          INSIGHTS SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="insights-section">
        <div className="container">
          <h2 className="section-title">
            Latest <span className="gold-gradient">Insights</span>
          </h2>
          <p className="section-subtitle">
            Perspectives on Digital Transformation, AI, and Enterprise Strategy
          </p>

          <div className="insights-grid">
            <Link to="/insights" className="insight-card">
              <h3>Why Most Digital Transformations Fail</h3>
              <p>The hidden gaps between strategy and execution</p>
              <span className="read-more">Read More <FaArrowRight /></span>
            </Link>
            <Link to="/insights" className="insight-card">
              <h3>AI in Enterprise: Beyond the Hype</h3>
              <p>Practical use cases delivering real ROI</p>
              <span className="read-more">Read More <FaArrowRight /></span>
            </Link>
            <Link to="/insights" className="insight-card">
              <h3>Building a Value-Driven Technology Roadmap</h3>
              <p>From spend to strategic advantage</p>
              <span className="read-more">Read More <FaArrowRight /></span>
            </Link>
          </div>

          <div className="insights-cta">
            <Link to="/insights" className="btn-secondary">
              View All Insights
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <section className="final-cta-section">
        <div className="container">
          <h2 className="final-cta-title">
            Ready to Unlock Real Value from Your<br />
            <span className="gold-gradient">Technology Investments?</span>
          </h2>

          <div className="final-cta-buttons">
            <Link to="/contact" className="btn-primary btn-large">
              Book a Strategy Call <FaArrowRight className="btn-icon" />
            </Link>
            <Link to="/contact" className="btn-secondary btn-large">
              Get in Touch
            </Link>
          </div>

          <p className="final-cta-note">
            In 30 minutes, we'll identify your biggest value unlock opportunities.
          </p>
        </div>
      </section>

    </main>
  );
};

export default HomePage;