import React, { useState, useEffect } from 'react';
import "./About.css";
import { 
  MdOutlineAnalytics, 
  MdDesignServices, 
  MdPeopleOutline, 
  MdCheckCircle,
  MdTimeline 
} from "react-icons/md";
import { FaChartLine, FaRocket, FaUsers, FaAward } from "react-icons/fa";

import bgImage1 from "../../assets/Architechure1.jpg";
import bgImage2 from "../../assets/Architechure2.jpg";
import bgImage3 from "../../assets/Architechure3.jpg";
import bgImage4 from "../../assets/Architechure4.jpg";

const About = () => {
  // Same background carousel as Architecture section
  const bgImages = [bgImage1, bgImage2, bgImage3, bgImage4];
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Auto-change background every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  // Stats data for mapping
  const stats = [
    { icon: FaChartLine, number: "20+", label: "Years Experience" },
    { icon: FaRocket, number: "100+", label: "Transformations" },
    { icon: FaUsers, number: "Global", label: "Fortune 500" }
  ];

  return (
    <section 
      id='about' 
      className="about-section"
      style={{ 
        backgroundImage: `url(${bgImages[currentBgIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="about-overlay-light"></div>
      <div className="about-container">
        {/* Hero Title */}
        <div className="about-header">
          <h2 className="about-title-light">
            About <span>BaiRees</span> Global Advisory
          </h2>
          <MdTimeline className="about-icon-light" />
        </div>

        {/* Core Narrative */}
        <div className="about-narrative">
          <p className="about-text-light">
            <MdOutlineAnalytics className="text-icon-light" />
            Technology is redefining every industry. AI, digital platforms, and data-driven models reshape how organizations compete.
          </p>

          <p className="about-text-light">
            <MdDesignServices className="text-icon-light" />
            Yet transformation is rarely just technology—it's strategy, leadership, and operating model challenges.
          </p>

          <p className="about-text-light">
            <MdPeopleOutline className="text-icon-light" />
            We work with leadership teams to design transformation strategies that enable organizations to innovate faster.
          </p>

          <p className="about-text-light">
            <MdCheckCircle className="text-icon-light" />
            Advising at critical transformation moments where business strategy, technology, and change converge.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="about-stats">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="stat-card-light">
                <div className="stat-icon-container">
                  <Icon className="stat-icon-light" />
                </div>
                <div>
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
