import React, { useEffect, useRef } from "react";
import { Main } from ".";
import { About, Projects } from "../components";

export const MainPage = () => {
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const aboutSection = aboutSectionRef.current;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutSection.classList.add("section-animated-active");
        } else {
          aboutSection.classList.remove("section-animated-active");
        }
      });
    }, observerOptions);

    observer.observe(aboutSection);

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <>
      <section className="section home-section">
        <Main />
      </section>
      <section className="section projects-section">
        <Projects />
      </section>
      <section className="section about-page-section">
        <About ref={aboutSectionRef} />
      </section>
    </>
  );
};
