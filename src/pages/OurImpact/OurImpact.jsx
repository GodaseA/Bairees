import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaChartLine, FaDollarSign, FaRocket, FaSyncAlt } from "react-icons/fa";
import "./OurImpact.css";
import bg_img from "../../assets/Architechure2.jpg";

const OurImpact = () => {
  const sectionRef = useRef(null);
  const statRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      statRefs.current.forEach((stat, index) => {
        if (stat) {
          gsap.from(stat, {
            y: 50,
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

  const impacts = [
    {
      icon: <FaChartLine />,
      stat: "20–40%",
      label: "Improvement in Operational Efficiency",
      color: "#FFD700",
    },
    {
      icon: <FaDollarSign />,
      stat: "Multi-Million $",
      label: "Cost Optimization Programs Delivered",
      color: "#D4AF37",
    },
    {
      icon: <FaRocket />,
      stat: "30–50%",
      label: "Faster Digital Initiative Execution",
      color: "#F2D492",
    },
    {
      icon: <FaSyncAlt />,
      stat: "100%",
      label: "Transformation Recovery for Failing Programs",
      color: "#FFD700",
    },
  ];

  return (
    <section className="impact-section" ref={sectionRef}>
      {/* Background Image */}
      <div 
        className="impact-background"
        style={{ backgroundImage: `url(${bg_img})` }}
      />
      
      {/* Dark Overlay for Readability */}
      <div className="impact-overlay" />

      <div className="container">
        {/* Header */}
        <div className="impact-header">
          <h2 className="section-title">
            Proof <span className="gold-gradient">&gt;</span> Claims
          </h2>
          <p className="section-subtitle">
            We don't just advise. We deliver outcomes.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="impact-grid">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="impact-card"
              ref={(el) => (statRefs.current[index] = el)}
            >
              <div className="impact-icon-wrapper" style={{ color: impact.color }}>
                {impact.icon}
              </div>
              <div className="impact-stat" style={{ color: impact.color }}>
                {impact.stat}
              </div>
              <div className="impact-label">{impact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpact;