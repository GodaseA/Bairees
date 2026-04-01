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
    title: "Enterprise Technology Transformation",
    desc: "Helping organizations modernize technology platforms and align digital capabilities with business strategy.",
    image: img1,
  },
  {
    title: "AI & Data Strategy",
    desc: "Building data-driven organizations using AI & analytics.",
    image: img2,
  },
  {
    title: "Digital Platform Strategy",
    desc: "Designing scalable digital platforms for innovation.",
    image: img3,
  },
  {
    title: "Technology Operating Model Reinvention",
    desc: "Improving structure & processes for better delivery.",
    image: img4,
  },
  {
    title: "Executive Transformation Advisory",
    desc: "Helping leaders manage large tech transformations.",
    image: img5,
  },
  {
    title: "Cybersecurity & Risk Advisory",
    desc: "Protecting digital assets by identifying risks, strengthening security frameworks, and ensuring regulatory compliance.",
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
      <h2 className="services-title">Advisory Focus Areas</h2>

      <div className="services-grid" role="list">
        {services.map((service, index) => (
          <article
            className="service-card"
            key={service.title}
            ref={(el) => (cardsRef.current[index] = el)}
            role="listitem"
            tabIndex={0}
            aria-label={service.title}
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
              <h3>{service.title}</h3>
            </div>

            <div className="card-hover-content">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AdvisoryServices;