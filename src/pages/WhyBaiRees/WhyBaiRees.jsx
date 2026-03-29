import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaCheckCircle, FaGlobe, FaBullseye, FaCog, FaChartLine } from "react-icons/fa";
import "./WhyBaiRees.css";

const WhyBaiRees = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each card individually with proper null check
      cardRefs.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            y: 60,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const reasons = [
    {
      icon: <FaGlobe />,
      title: "Deep Global Expertise",
      description: "20+ years across USA, Europe, Middle East & APAC",
    },
    {
      icon: <FaBullseye />,
      title: "Business-First Approach",
      description: "We start with outcomes, not technology",
    },
    {
      icon: <FaCog />,
      title: "Hands-On Execution",
      description: "We don't just advise—we drive implementation",
    },
    {
      icon: <FaChartLine />,
      title: "ROI-Focused",
      description: "Every engagement tied to measurable business value",
    },
  ];

  return (
    <section className="why-section" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="why-header">
          <h2 className="section-title">
            Why <span className="gold-gradient">BaiRees</span>
          </h2>
          <p className="section-subtitle">
            Built for Impact. Not Presentations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="why-grid">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="why-card"
              ref={(el) => (cardRefs.current[index] = el)}
              style={{ opacity: 1, visibility: 'visible' }}
            >
              <div className="why-icon-wrapper">
                <FaCheckCircle className="why-check-icon" />
                <div className="why-icon">{reason.icon}</div>
              </div>
              <h3 className="why-title">{reason.title}</h3>
              <p className="why-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBaiRees;