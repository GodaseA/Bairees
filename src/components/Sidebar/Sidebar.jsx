import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import logo from "../../assets/logo.jpeg";

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const menuItems = [
    { id: "service", label: "Services" },
    { id: "architecture", label: "Solutions" },
    { id: "methodology", label: "Industries" },
    { id: "insights", label: "Insights" },
    { id: "founder", label: "Founder" },
    { id: "contact", label: "Contact" },
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px", // Trigger when section is in middle of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    menuItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        {/* Logo Section */}
        <div className="sidebar-logo">
          <a href="#hero" className="logo-link">
            <img src={logo} alt="BaiRees Global Advisory" />
          </a>
        </div>

        {/* Menu */}
        <nav className="sidebar-menu">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`sidebar-link ${activeSection === item.id ? "active" : ""}`}
              onClick={(e) => handleClick(e, item.id)}
            >
              <span className="link-line" />
              <span className="link-text">{item.label}</span>
              <span className="link-underline" />
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;