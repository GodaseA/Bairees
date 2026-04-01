import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SevenRMethodology.css";
import { 
  FaEye, 
  FaLightbulb, 
  FaMagic,          // ← Changed from FaDream
  FaMapMarkedAlt, 
  FaRocket, 
  FaShieldAlt, 
  FaChartLine 
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const SevenRMethodology = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const phases = [
    {
      id: 1,
      title: "Reveal",
      subtitle: "Uncover Reality with Precision",
      quote: "Truth is the foundation of transformation",
      icon: FaEye,
      points: [
        "Assess digital maturity, capabilities, and gaps",
        "Identify hidden risks & untapped opportunities"
      ],
      deliverable: "Digital Maturity Diagnostic Report"
    },
    {
      id: 2,
      title: "Reframe",
      subtitle: "Shift Leadership Thinking & Strategy",
      quote: "Transformation begins with a change in perspective",
      icon: FaLightbulb,
      points: [
        "Challenge legacy assumptions",
        "Align CXOs on priorities and outcomes"
      ],
      deliverable: "Strategic Alignment Workshop Outputs"
    },
    {
      id: 3,
      title: "Reimagine",
      subtitle: "Design the Future Enterprise",
      quote: "Define what winning looks like",
      icon: FaMagic,  // ← Changed here
      points: [
        "Future-state architecture & operating model",
        "AI-first, digital-first business vision"
      ],
      deliverable: "Target State Architecture & Vision Deck"
    },
    {
      id: 4,
      title: "Roadmap",
      subtitle: "Translate Vision into Executable Strategy",
      quote: "Bridge strategy and execution",
      icon: FaMapMarkedAlt,
      isDifferentiator: true,
      points: [
        "Phased transformation plan",
        "Investment priorities & business cases"
      ],
      deliverable: "Transformation Roadmap + ROI Business Cases"
    },
    {
      id: 5,
      title: "Realize",
      subtitle: "Build and Implement Transformation",
      quote: "Turn strategy into reality",
      icon: FaRocket,
      points: [
        "AI, data, platforms, and digital solutions",
        "Agile execution with measurable milestones"
      ],
      deliverable: "Live Solutions + Sprint Reviews"
    },
    {
      id: 6,
      title: "Reinforce",
      subtitle: "Embed Change & Sustain Transformation",
      quote: "Make transformation stick",
      icon: FaShieldAlt,
      isPremium: true,
      points: [
        "Change management & leadership alignment",
        "Governance, culture, and capability building"
      ],
      deliverable: "Change Adoption Dashboard + Capability Matrix"
    },
    {
      id: 7,
      title: "Realize Value",
      subtitle: "Drive Measurable Business Impact",
      quote: "Ensure outcomes—not just outputs",
      icon: FaChartLine,
      points: [
        "ROI tracking, KPI dashboards, value acceleration",
        "Continuous improvement loops"
      ],
      deliverable: "Value Realization Report + Optimization Pipeline"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate cards on scroll
      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card, 
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
            delay: index * 0.1,
          }
        );
      });

      // Animate section title
      gsap.fromTo(".methodology-title",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          }
        }
      );

      // Animate tagline
      gsap.fromTo(".methodology-tagline",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
          delay: 0.2,
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="methodology" className="seven-r-methodology" ref={sectionRef}>
      <div className="methodology-container">
        {/* Header */}
        <div className="methodology-header">
          <h2 className="methodology-title">
            BaiRees <span className="gold-text">7R</span> Transformation Methodology™️
          </h2>
          <p className="methodology-tagline">
            "From Insight to Measurable Impact"
          </p>
          <div className="methodology-divider" />
        </div>

        {/* Cards Grid */}
        <div className="methodology-grid">
          {phases.map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <div
                key={phase.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`methodology-card ${phase.isDifferentiator ? "differentiator" : ""} ${phase.isPremium ? "premium" : ""}`}
              >
                {/* Phase Number Badge */}
                <div className="phase-badge">
                  <span className="phase-number">0{phase.id}</span>
                </div>

                {/* Icon */}
                <div className="phase-icon">
                  <IconComponent />
                </div>

                {/* Content */}
                <div className="phase-content">
                  <h3 className="phase-title">
                    {phase.title}
                    {phase.isDifferentiator && <span className="badge-diff">Key</span>}
                    {phase.isPremium && <span className="badge-premium">Premium</span>}
                  </h3>
                  <p className="phase-subtitle">{phase.subtitle}</p>
                  
                  <blockquote className="phase-quote">
                    👉 {phase.quote}
                  </blockquote>

                  <ul className="phase-points">
                    {phase.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>

                  <div className="phase-deliverable">
                    <strong>Deliverable:</strong> {phase.deliverable}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="methodology-footer">
          <p className="footer-text">
            Unlike generic frameworks, BaiRees 7R™️ doesn't stop at delivery—
            <span className="gold-text"> we ensure adoption, reinforcement, and measurable ROI.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SevenRMethodology;