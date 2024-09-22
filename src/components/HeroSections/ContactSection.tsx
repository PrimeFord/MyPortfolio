import React from "react";
import Form from "../Form/Form";
import Connect from "../Reach/Connect";
// import { socialData } from "../../utility/data";
import Project from "../Reach/Project";
import Outline from "../Reach/Outline";
import Platform from "../Reach/Platform";
import Phone from "../Reach/Phone";

const ContactCard = () => {
  return (
    <div
      className="h-fit w-[100%] py-[3rem] px-[1rem] lg:py-[5rem] lg:px-[8rem] flex flex-col gap-12 shadow-lg dark:text-[#FBFBFB]"
      id="contact"
    >
      <div className="w-[100%] flex flex-col lg:flex-row gap-4">
        <div className="lg:w-[40%]">
          <h2 className="text-[2rem] lg:text-[2.5rem] leading-[3.5rem] font-[700] mb-5">
            Contact
          </h2>
          <p className="text-[1rem] font-[500] mb-[1rem]">
            I would love to hear from you
          </p>
          <Form />
        </div>
        <div className="w-[100%] lg:w-[60%] flex flex-col justify-center items-center">
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.53352567122!2d3.389379!3d6.4538728999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b11b862c079%3A0xf1fab07713f542fc!2sTinubu%20Square!5e0!3m2!1sen!2sng!4v1687387775355!5m2!1sen!2sng"
            width="600"
            height="450"
            className="border-2 border-solid border-[#263138] rounded-md w-[100%]"
            loading="lazy"
          ></iframe> */}
        </div>
      </div>
      <div className=" lg:h-[15rem] flex flex-col lg:flex-row gap-[1rem] justify-between">
        <Outline />
        <Project />
        <Connect />
        <Platform />
        <Phone />
      </div>
    </div>
  );
};

export default ContactCard;
