import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaBusinessTime, FaCog, FaHandshake, FaBuilding } from "react-icons/fa";
import "./WhoWeWorkWith.css";

const WhoWeWorkWith = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
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

  const clients = [
    {
      icon: <FaBusinessTime />,
      title: "CEOs & Business Leaders",
      description: "Driving growth & profitability through technology-enabled transformation",
    },
    {
      icon: <FaCog />,
      title: "CIOs & CTOs",
      description: "Aligning technology investments with measurable business outcomes",
    },
    {
      icon: <FaHandshake />,
      title: "Private Equity / Investors",
      description: "Maximizing portfolio value through operational and digital improvements",
    },
    {
      icon: <FaBuilding />,
      title: "Mid to Large Enterprises",
      description: "Scaling transformation initiatives across complex organizations",
    },
  ];

  return (
    <section className="clients-section" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="clients-header">
          <h2 className="section-title">
            Who We <span className="gold-gradient">Partner With</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="clients-grid">
          {clients.map((client, index) => (
            <div
              key={index}
              className="clients-card"
              ref={(el) => (cardRefs.current[index] = el)}
            >
              <div className="clients-icon-wrapper">{client.icon}</div>
              <h3 className="clients-title">{client.title}</h3>
              <p className="clients-description">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;