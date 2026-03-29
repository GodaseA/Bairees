import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/advisory", label: "Services" },
    { to: "/architecture", label: "Architecture" },
    { to: "/founder", label: "Founder" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        {/* Menu */}
        <nav className="sidebar-menu">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={`sidebar-link ${location.pathname === item.to ? "active" : ""}`}
            >
              <span className="link-line" />
              <span className="link-text">{item.label}</span>
              <span className="link-underline" />
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;