"use client";
import React from "react";

const HireMe = ({ setShowModal }: any): any => {
  <button
    className="w-fit rounded-md bg-[#263138] dark:bg-[#FBFBFB] dark:text-[#263138] text-[#FBFBFB] py-2 px-4 drop-shadow-xl transition duration-700 ease-in-out hover:scale-[1.15] text-right hover:transition hover:ease-in-out hover:duration-700"
    onClick={() => setShowModal(true)}
  >
    Hire Me!
  </button>;
};

export default HireMe;
