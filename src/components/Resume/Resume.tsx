"use client";
import Link from "next/link";
import React from "react";

const Resume = () => {
  return (
    <Link
      className="w-fit rounded-md bg-[#263138] text-[#FBFBFB] dark:bg-[#FBFBFB] dark:text-[#263138] py-2 px-4 drop-shadow-xl transition duration-700 ease-in-out hover:scale-[1.15] hover:transition hover:ease-in-out hover:duration-700"
      href={
        "https://docs.google.com/document/d/15-flJWTDMK-ZjFe_V4mZeGe4FgFxxHChW7-2UMmd3QQ/edit?usp=drive_link"
      }
      target="_blank"
    >
      View Resume
    </Link>
  );
};

export default Resume;
