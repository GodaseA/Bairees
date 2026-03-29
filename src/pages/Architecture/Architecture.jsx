import React, { useState, useEffect } from 'react';
import "./Architecture.css";
import { FaLightbulb, FaServer, FaBrain, FaProjectDiagram, FaUsers, FaShieldAlt } from 'react-icons/fa';

// import bgImage1 from "../../assets/Architechure1.jpg";
// import bgImage2 from "../../assets/Architechure2.jpg";
// import bgImage3 from "../../assets/Architechure3.jpg";
// import bgImage4 from "../../assets/Architechure4.jpg";

const Architecture = () => {
  // Use your assets images for background carousel
  // const bgImages = [bgImage1, bgImage2, bgImage3, bgImage4];
  // const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Auto-change background every 4 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, [bgImages.length]);

  // Dark theme architecture data
  const architecturePills = [
    { title: "Strategy", description: "Aligning business vision with digital transformation priorities to create sustainable competitive advantage.", Icon: FaLightbulb },
    { title: "Technology Platforms", description: "Designing scalable and modern technology platforms that support innovation, agility, and long-term growth.", Icon: FaServer },
    { title: "Data & AI Intelligence", description: "Leveraging data, analytics, and artificial intelligence to drive smarter decision-making and business insights.", Icon: FaBrain },
    { title: "Operating Model", description: "Transforming organizational structures, governance, and delivery models to enable faster execution.", Icon: FaProjectDiagram },
    { title: "Leadership & Culture", description: "Building leadership alignment and fostering a culture that supports continuous innovation and transformation.", Icon: FaUsers },
    {title: "Cybersecurity & Risk",description: "Ensuring robust security frameworks, risk management, and compliance to protect digital assets and maintain business trust.",Icon: FaShieldAlt}
  ];

  const totalPillars = architecturePills.reduce((count) => count + 1, 0);

  return (
    <section
      id='architecture'
      className="architecture-section"
       
    >
      <div className="architecture-overlay-dark"></div>
      <div className="architecture-container">
        <h2 className="architecture-title-dark">
          BaiRees Transformation Architecture
        </h2>

        <p className="architecture-subtitle-dark">
          A structured framework that integrates strategy, technology,
          data, operating models, and leadership to enable successful
          enterprise transformation. <span className="pillar-count-dark">{totalPillars}</span> Core Pillars.
        </p>

        <div className="architecture-grid">
          {architecturePills.map((pillar, index) => {
            const Icon = pillar.Icon;
            return (
              <div key={pillar.title} className="architecture-card-dark">
                <div className="card-icon-dark">
                  <Icon className="icon-dark" />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
