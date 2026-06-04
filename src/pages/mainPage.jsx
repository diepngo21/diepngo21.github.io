import React from "react";
import { Main } from ".";
import { About, Projects, WorkExperience, Contact } from "../components";

export const MainPage = () => {
  return (
    <>
      <Main />
      <Projects />
      <About />
      <WorkExperience />
      <Contact />
    </>
  );
};
