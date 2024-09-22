import React from "react";
import Using from "../Using";
import Learn from "../Learn";

const SkillCard = () => {
  return (
    <div
      className="h-fit w-[100%] py-[3rem] px-[1rem]  lg:py-[8rem] lg:px-[8rem] flex flex-col items-center shadow-lg dark:text-[#FBFBFB]"
      id="skills"
    >
      <h2 className="text-[2rem] place-self-start lg:text-[3.5rem] leading-[3.5rem] font-[700] mb-2 lg:mb-5">
        Skills
      </h2>
      <h2 className="text-[1.5rem] place-self-start lg:text-[2.5rem] font-[700] mb-5">
        Technologies and Skills
      </h2>
      <div className="w-[100%] mb-[3rem]">
        <Using />
      </div>
      <div className="w-[100%]">
        <Learn />
      </div>
    </div>
  );
};

export default SkillCard;
