import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaExclamationTriangle, FaChartLine, FaMoneyBillWave, FaLink, FaCheckCircle } from "react-icons/fa";
import "./EmotionalHook.css";

const EmotionalHook = () => {
  const sectionRef = useRef(null);
  const problemRefs = useRef([]);
  const solutionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Animate header
      tl.from(".hook-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
      })
      // Animate problems list - fixed animation
      .from(
        problemRefs.current,
        {
          x: -50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          clearProps: "opacity", // Clear opacity after animation
        },
        "-=0.4"
      )
      // Animate solution
      .from(
        solutionRef.current,
        {
          x: 50,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.5"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const problems = [
    {
      icon: <FaChartLine />,
      text: "AI & Digital Initiatives lack clear ROI",
    },
    {
      icon: <FaMoneyBillWave />,
      text: "Transformation programs stall or overrun budgets",
    },
    {
      icon: <FaLink />,
      text: "Technology decisions are disconnected from business outcomes",
    },
  ];

  return (
    <section className="hook-section" ref={sectionRef}>
      <div className="hook-container">
        
        {/* Left Side - Problems */}
        <div className="problems-side">
          <div className="hook-header">
            <h2 className="section-title">
              The <span className="gradient-text">Hard Truth</span>
            </h2>
            <p className="section-subtitle">
              Most enterprises invest heavily in technology—but fail to realize business value.
            </p>
          </div>

          <div className="problems-list">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="problem-item"
                ref={(el) => (problemRefs.current[index] = el)}
                style={{ opacity: 1, visibility: 'visible' }} // Force visibility
              >
                <div className="problem-icon">
                  <FaExclamationTriangle />
                </div>
                <div className="problem-content">
                  <div className="problem-icon-small">{problem.icon}</div>
                  <p className="problem-text">{problem.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Solution */}
        <div className="solution-side" ref={solutionRef}>
          <div className="solution-content">
            <div className="solution-icon-wrapper">
              <FaCheckCircle className="solution-icon" />
            </div>
            <h3 className="solution-title">
              We Solve This Gap
            </h3>
            <p className="solution-text">
              BaiRees bridges the divide between technology investments and 
              measurable business outcomes. We ensure every digital initiative 
              delivers <strong className="highlight">real ROI</strong>, stays 
              on <strong className="highlight">budget</strong>, and drives 
              <strong className="highlight">enterprise value</strong>.
            </p>
            <div className="solution-cta">
              <span>Ready to transform?</span>
              <div className="arrow-down">↓</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EmotionalHook;