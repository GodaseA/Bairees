import React, { useState, useEffect } from "react";
import "./StrategyCallButton.css";
import { FaCalendarAlt } from "react-icons/fa";

const StrategyCallButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  // Show button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Stop pulsing after first interaction
  const handleClick = () => {
    setIsPulsing(false);
    // Replace with your Calendly/meeting link
    window.open("https://calendly.com/your-link", "_blank");
  };

  return (
    <a
      href="#contact"
      className={`strategy-call-btn ${isVisible ? "visible" : ""} ${isPulsing ? "pulsing" : ""}`}
      onClick={handleClick}
    >
      <FaCalendarAlt className="btn-icon" />
      <span className="btn-text">Book a Strategy Call</span>
      <span className="btn-glow" />
    </a>
  );
};

export default StrategyCallButton;