import React, { useEffect, useRef } from "react";
import { Main } from ".";
import { About, Projects } from "../components";

export const MainPage = () => {
  return (
    <>
      <section className="section home-section">
        <Main />
      </section>
      <section className="section projects-section">
        <Projects />
      </section>
      <section className="section about-page-section">
        <About />
      </section>
    </>
  );
};
