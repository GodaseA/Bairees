import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaExclamationTriangle, FaChartLine, FaMoneyBillWave, FaCheckCircle, FaArrowRight } from "react-icons/fa";
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
      // Animate problems list
      .from(
        problemRefs.current,
        {
          x: -50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          clearProps: "opacity",
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
      text: "AI investments fail to deliver ROI",
    },
    {
      icon: <FaMoneyBillWave />,
      text: "Programs exceed budgets by 40%",
    },
    {
      icon: <FaExclamationTriangle />,
      text: "Tech decisions lack business alignment",
    },
  ];

  return (
    <section className="hook-section" ref={sectionRef}>
      <div className="hook-container">
        
        {/* Left Side - Pain Points */}
        <div className="problems-side">
          <div className="hook-header">
            <h2 className="section-title">
              Billions Spent on Technology.<br />
              <span className="gradient-text">Value Still Missing.</span>
            </h2>
            <p className="section-subtitle">
              We ensure every transformation delivers measurable ROI and business outcomes.
            </p>
          </div>

          <div className="problems-list">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="problem-item"
                ref={(el) => (problemRefs.current[index] = el)}
                style={{ opacity: 1, visibility: 'visible' }}
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
              The BaiRees Difference
            </h3>
            <p className="solution-text">
              BaiRees transforms technology investments into measurable business impact through{" "}
              <strong className="highlight">Outcome-Led Transformation™</strong>.
            </p>
            
            <button className="solution-cta-button">
              Get Your Transformation Diagnostic
              <FaArrowRight className="cta-icon" />
            </button>

            <div className="authority-strip">
              <span>30+ Years</span>
              <span className="divider">|</span>
              <span>Fortune 500 Experience</span>
              <span className="divider">|</span>
              <span>Global Delivery Leadership</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EmotionalHook;