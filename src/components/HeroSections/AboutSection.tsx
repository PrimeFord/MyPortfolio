import React from "react";

const AboutCard = () => {
  return (
    <div
      className="h-fit lg:h-[80vh] w-[100%] py-[3rem] px-4 lg:px-[8rem] lg:py-[3rem] flex flex-col lg:flex-row justify-between shadow-lg dark:text-[#FBFBFB]"
      id="about"
    >
      <div className="w-[100%] lg:w-[40%] lg:h-[100%] flex flex-col  justify-center items-center pb-8 lg:pb-0">
        <h2 className="block place-self-start lg:hidden mb-[2rem] text-[2rem] font-[600]">
          About me
        </h2>

        <p className="w-[15rem] lg:w-[20rem] h-[15rem] lg:h-[20rem] rounded-[50%]  bg-[url('/images/pass1.jpg')] bg-cover bg-no-repeat bg-top "></p>
      </div>
      <div className="w-[100%] mt lg:w-[60%] lg:h-[100%] flex flex-col justify-center font-[500]">
        <h2 className="mb-[2rem] text-[1.25rem] font-[600] hidden lg:block">
          About me
        </h2>
        <p className="text-center ">
          👋 Hi, I am MuhammedFuad Bashar, Front-end Developer with 2+ years of
          experience designing and building responsive web design, proficient
          with CSS and JS Frameworks with extensive knowledge of ReactJS and
          NextJS. Notable achievements include Developing web applications with
          mobile responsiveness, Consuming and manipulating APIs, Maintaining
          and improving website and Creating quality mockups and prototypes.
        </p>
      </div>
    </div>
  );
};

export default AboutCard;
