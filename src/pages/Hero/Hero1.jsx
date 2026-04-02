import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FiGlobe, FiMapPin, FiArrowRight, FiBriefcase } from "react-icons/fi";
import "./Hero.css";
import heroVideo from "../../assets/background_video.mp4";

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const credibilityRef = useRef(null);
  const primaryBtnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(heroRef.current, {
        opacity: 0,
        duration: 0.8,
      })
      .from(
        titleRef.current,
        {
          y: 80,
          opacity: 0,
          duration: 1.2,
        },
        "-=0.4"
      )
      .from(
        subtitleRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.6"
      )
      .from(
        credibilityRef.current?.children,
        {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
        },
        "-=0.5"
      )
      .from(
        primaryBtnRef.current,
        {
          y: 20,
          scale: 0.85,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.4"
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handlePrimaryClick = () => {
    document.querySelector('.services-section')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Background Video */}
      <video
        className="hero-video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />

      {/* Dark Overlay for Readability */}
      <div className="hero-overlay" />

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>
          Turning Technology Investments into<br />
          <span className="gold-gradient">Measurable Enterprise Value</span>
        </h1>

        <p className="hero-subtitle" ref={subtitleRef}>
          We partner with CEOs, CIOs, and leadership teams to unlock growth,
          optimize costs, and deliver real ROI from digital transformation.
        </p>

        {/* Credibility Strip */}
        <div className="credibility-strip" ref={credibilityRef} style={{ display: 'flex' }}>
          <div className="credibility-card">
            <div className="card-icon-wrapper">
              <FiGlobe className="card-icon" />
            </div>
            <div className="card-content">
              <h3 className="card-stat">25+</h3>
              <p className="card-label">Years Global Experience</p>
            </div>
          </div>
          
          <div className="credibility-card">
            <div className="card-icon-wrapper">
              <FiBriefcase className="card-icon" />
            </div>
            <div className="card-content">
              <h3 className="card-stat">500+</h3>
              <p className="card-label">Fortune Transformations</p>
            </div>
          </div>
          
          <div className="credibility-card">
            <div className="card-icon-wrapper">
              <FiMapPin className="card-icon" />
            </div>
            <div className="card-content">
              <h3 className="card-stat">Global</h3>
              <p className="card-label"> USA | Europe | Australia | India</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="hero-buttons" style={{ display: 'flex', marginTop: '40px' }}>
          <button 
            className="btn-primary" 
            ref={primaryBtnRef}
            onClick={handlePrimaryClick}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            Explore Our Advisory
            <FiArrowRight className="btn-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;