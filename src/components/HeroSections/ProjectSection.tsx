import React from "react";
import Projects from "../Projects/Projects";

const ProjectCard = () => {
  return (
    <div
      className="h-fit w-[100%]  py-[3rem] px-[1rem]  lg:py-[5rem] lg:px-[8rem] flex flex-col items-center shadow-lg dark:text-[#FBFBFB]"
      id="projects"
    >
      <h2 className="text-[2.25rem] lg:text-[3.5rem] leading-[3.5rem] font-[700] mb-5">
        Projects
      </h2>

      <p className="text-[1rem] font-[500] mb-[2rem] text-center">
        These frontend mobile and web applications projects, were built and
        written with HTML, CSS and JavaScript using Reactjs | Nextjs and Vitejs
        frameworks with full mobile responsiveness.
      </p>
      <div className="w-[100%]">
        <Projects />
      </div>
    </div>
  );
};

export default ProjectCard;
