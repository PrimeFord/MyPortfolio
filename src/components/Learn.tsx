import React from "react";
// import { learningData } from "../utility/data";
import Image from "next/image";

const Learn = () => {
  return (
    <div>
      <div className="w-[100%] text-left">
        <p className="text-[1.25rem] lg:text-[1.8rem] font-[500] mb-[2rem]">
          Learning:
        </p>
        <div className="flex gap-[1rem]  px-[1rem] justify-center lg:justify-start text-center items-center">
          {/* {learningData.map((e, i) => (
            <Image
              src={e.src}
              alt={e.alt}
              title={e.title}
              key={e.title}
              width={80}
              height={100}
            />
          ))} */}

          <a className="lg:hidden dark:hidden" href="https://skillicons.dev">
            <Image
              alt="skills"
              title="Sklls"
              src="https://skillicons.dev/icons?i=nodejs,py,postgres,mongodb,mysql,django,aws,jquery,graphql,flutter&perline=5&theme=light"
            />
          </a>
          <a
            className="hidden lg:flex dark:hidden"
            href="https://skillicons.dev"
          >
            <Image
              alt="skills"
              title="Sklls"
              src="https://skillicons.dev/icons?i=nodejs,py,postgres,mongodb,mysql,django,aws,jquery,graphql,flutter&perline=15&theme=light"
            />
          </a>
          <a
            className="hidden dark:lg:hidden dark:flex"
            href="https://skillicons.dev"
          >
            <Image
              alt="skills"
              title="Sklls"
              src="https://skillicons.dev/icons?i=nodejs,py,postgres,mongodb,mysql,django,aws,jquery,graphql,flutter&perline=5&theme=dark"
            />
          </a>
          <a
            className="hidden dark:hidden lg:hidden dark:lg:flex"
            href="https://skillicons.dev"
          >
            <Image
              alt="skills"
              title="Sklls"
              src="https://skillicons.dev/icons?i=nodejs,py,postgres,mongodb,mysql,django,aws,jquery,graphql,flutter&perline=15&theme=dark"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Learn;
