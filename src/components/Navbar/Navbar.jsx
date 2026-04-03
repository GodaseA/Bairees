import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ setSidebarOpen }) => {
  const navbarRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Navbar background on scroll
      gsap.to(navbarRef.current, {
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "+=100",
          scrub: true,
        },
        backgroundColor: "rgba(11, 15, 43, 0.98)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.4)",
        duration: 0.3,
      });
    }, navbarRef);

    // Scroll hide/show logic
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navbarHeight = navbarRef.current?.offsetHeight || 120;

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > navbarHeight) {
        // Scrolling DOWN
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling UP
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setSidebarOpen?.(true);
  };

  return (
    <nav 
      className={`navbar ${isVisible ? "navbar-visible" : "navbar-hidden"}`} 
      ref={navbarRef}
    >
      {/* Left: Menu + Logo */}
      <div className="nav-left">
        {/* <button className="menu-btn" onClick={handleMenuClick} aria-label="Open menu">
          <FaBars />
        </button> */}

        <a href="/" className="nav-logo">
          <img src={logo} alt="BaiRees Global Advisory" />
        </a>
      </div>

      {/* Center: Brand Title (Gold) */}
      <div className="nav-center">
        <a href="/" className="nav-brand">
          <h2>BaiRees</h2>
          <h3>Global Technology Advisory</h3>
        </a>
      </div>

      {/* Right: Contact Button */}
      <div className="nav-right">
        <a href="#contact">
          <button className="contact-btn">
            <span>Contact</span>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;