import React from "react";
import { usingData } from "../utility/data";
import Image from "next/image";

const Using = () => {
  return (
    <div className="w-[100%] text-left">
      <p className="text-[1.25rem] lg:text-[1.8rem] font-[500] mb-[2rem]">
        Using now:
      </p>
      <div className="flex gap-[1rem] px-[1rem] justify-center lg:justify-start text-center items-center">
        <a
          className="text-center lg:hidden dark:hidden"
          href="https://skillicons.dev"
        >
          <Image
            alt="skills"
            title="Sklls"
            src="https://skillicons.dev/icons?i=html,css,js,react,redux,ts,tailwind,sass,babel,vite,nextjs,vscode,git,github,figma&perline=5&theme=light"
          />
        </a>
        <a className="hidden lg:flex dark:hidden" href="https://skillicons.dev">
          <Image
            alt="skills"
            title="Sklls"
            src="https://skillicons.dev/icons?i=html,css,js,react,redux,ts,tailwind,sass,babel,vite,nextjs,vscode,git,github,figma&perline=15&theme=light"
          />
        </a>
        <a
          className="hidden dark:lg:hidden dark:flex"
          href="https://skillicons.dev"
        >
          <Image
            alt="skills"
            title="Sklls"
            src="https://skillicons.dev/icons?i=html,css,js,react,redux,ts,tailwind,sass,babel,vite,nextjs,vscode,git,github,figma&perline=5&theme=dark"
          />
        </a>
        <a
          className="hidden dark:hidden lg:hidden dark:lg:flex"
          href="https://skillicons.dev"
        >
          <Image
            alt="skills"
            title="Sklls"
            src="https://skillicons.dev/icons?i=html,css,js,react,redux,ts,tailwind,sass,babel,vite,nextjs,vscode,git,github,figma&perline=15&theme=dark"
          />
        </a>
      </div>
    </div>
  );
};

export default Using;
