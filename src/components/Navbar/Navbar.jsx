import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Navbar.css";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/logo.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navbarRef = useRef(null);
  const navMidRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hide middle nav links on scroll
      gsap.to(navMidRef.current, {
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "+=120",
          scrub: true,
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: -30,
        pointerEvents: "none",
        duration: 0.4,
        ease: "power2.out",
      });
    }, navbarRef);

    return () => ctx.revert();
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <button className="menu-btn">
        <FaBars />
      </button>

      <div className="nav--left">
        <a href="/" className="nav-logo">
          <img src={logo} alt="BaiRees Global Advisory" />
        </a>
        <a href="/">
          <h2>BaiRees</h2>
        </a>
      </div>

      <div className="nav-mid" ref={navMidRef}>
        <a href="#services">Services</a>
        <a href="#architecture">Architecture</a>
        <a href="#founder">Founder</a>
        <a href="#about">About</a>
      </div>

      <div className="nav-right">
        <a href="#contact">
          <button>
            <span>Contact</span>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
