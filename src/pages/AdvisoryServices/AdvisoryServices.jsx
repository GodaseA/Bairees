import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./AdvisoryServices.css";

import img1 from "../../assets/imgg1.jpg";
import img2 from "../../assets/service2.png";
import img3 from "../../assets/imgg3.jpg";
import img4 from "../../assets/imgg4.jpg";
import img5 from "../../assets/imgg5.jpg";
import img6 from "../../assets/imgg6.jpg";

const services = [
  {
    pillar: "Reinvent",
    quote: "Reimagine the enterprise to unlock exponential growth and enduring advantage.",
    image: img1,
  },
  {
    pillar: "Intelligence",
    quote: "Harness AI and data to drive smarter decisions and measurable business outcomes.",
    image: img2,
  },
  {
    pillar: "Platforms",
    quote: "Build scalable digital platforms that accelerate innovation and new value creation.",
    image: img3,
  },
  {
    pillar: "Agility",
    quote: "Enable speed, alignment, and execution excellence through modern operating models.",
    image: img4,
  },
  {
    pillar: "Trust",
    quote: "Establish secure, resilient, and trusted digital foundations for sustainable growth.",
    image: img5,
  },
  {
    pillar: "Leadership",
    quote: "Empower leadership to make bold decisions and deliver transformation at scale.",
    image: img6,
  },
];

function AdvisoryServices() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Arrival animation: staggered fade + slide up
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        }
      );

      // Hover animations for each card
      cardsRef.current.forEach((card) => {
        if (!card) return;

        const img = card.querySelector(".card-image-layer img");
        const overlay = card.querySelector(".image-overlay");
        const hoverContent = card.querySelector(".card-hover-content");

        // Set initial states
        gsap.set(img, { scale: 1 });
        gsap.set(overlay, { opacity: 0 });
        gsap.set(hoverContent, { opacity: 0, pointerEvents: "none" });

        const handleMouseEnter = () => {
          gsap.to(img, { scale: 1.12, duration: 0.5, ease: "power2.out", overwrite: true });
          gsap.to(overlay, { opacity: 0.6, duration: 0.35, overwrite: true });
          gsap.to(hoverContent, { opacity: 1, pointerEvents: "auto", duration: 0.35, overwrite: true });
        };

        const handleMouseLeave = () => {
          gsap.to(img, { scale: 1, duration: 0.4, ease: "power2.out", overwrite: true });
          gsap.to(overlay, { opacity: 0, duration: 0.3, overwrite: true });
          gsap.to(hoverContent, { opacity: 0, pointerEvents: "none", duration: 0.3, overwrite: true });
        };

        card.addEventListener("mouseenter", handleMouseEnter);
        card.addEventListener("mouseleave", handleMouseLeave);

        // Cleanup listeners
        return () => {
          card.removeEventListener("mouseenter", handleMouseEnter);
          card.removeEventListener("mouseleave", handleMouseLeave);
        };
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="service" className="services-section" ref={sectionRef}>
      <h2 className="services-title">BaiRees Advisory Pillars</h2>

      <div className="services-grid" role="list">
        {services.map((service, index) => (
          <article
            className="service-card"
            key={service.pillar}
            ref={(el) => (cardsRef.current[index] = el)}
            role="listitem"
            tabIndex={0}
            aria-label={service.pillar}
          >
            <div className="card-image-layer">
              <img
                src={service.image}
                alt=""
                loading="lazy"
                decoding="async"
              />
              <div className="image-overlay" aria-hidden="true" />
            </div>

            <div className="card-title-on-image" aria-hidden="true">
              <h3>{service.pillar}</h3>
            </div>

            <div className="card-hover-content">
              <h3>{service.pillar}</h3>
              <p>{service.quote}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AdvisoryServices;