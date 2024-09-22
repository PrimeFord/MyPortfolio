"use client";
import React, { useState } from "react";
import { projectData } from "../../utility/data";
import "./Projects.css";
import Image from "next/image";
import Link from "next/link";
import { DGITHUB } from "../Theme/ThemeIcons";
import { trauncateString } from "../../utility/helper";

const Projects = () => {
  const [fullString, setFullString] = useState(false);

  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="w-[100%] grid grid-cols-1 lg:grid-cols-3 gap-[2rem]">
        {projectData.map((e, i) => (
          <div key={i} className="view">
            <Image
              src={e.img}
              alt={e.title}
              height={0}
              width={0}
              objectFit="cover"
              quality={100}
              layout="fill"
            />
            <div className="mask">
              <h2 className="">{e.title}</h2>
              <p className="mb-1 lg:mb-2">{trauncateString(e.desc)}</p>
              <h3 className="not-italic text-[0.9rem] mb-2 lg:mb-2">
                Tools: {e.tools}
              </h3>
              <Link href={e.link} rel="noopener" className="underline">
                View Website
              </Link>
              <Link
                href={e.github}
                rel="noopener"
                className="absolute flex hover:underline bottom-4 lg:bottom-2 left-2"
              >
                <i>
                  <DGITHUB />
                </i>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button className="w-[100%] lg:w-[25%] p-2 lg:py-4 lg:px-6 bg-[#263138] text-[#FBFBFB] dark:text-[#263138] dark:bg-[#FBFBFB] rounded-[1rem] shadow-lg">
        See more...
      </button>
    </div>
  );
};

export default Projects;
